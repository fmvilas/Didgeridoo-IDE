"use strict";

window.didgeridoo = (function () {

	/********************************************************************************************************************
	 *														 CONSTANTS										  			*
	 ********************************************************************************************************************/
	 

	var	FILE_SEPARATOR = '/',
		APP_DIR = 'app',
		MODULES_DIR = 'modules',
		MODULE_CONFIG_FILENAME = 'config.json',
		LIBRARIES_DIR = 'libraries',
		CONFIG_DIR = 'config',
		LIBRARIES_LIST_PATH = CONFIG_DIR + FILE_SEPARATOR + 'libraries.list.json';
	
	
	
	/********************************************************************************************************************
	 *														   UTILS										  			*
	 ********************************************************************************************************************/
	
	var logger = (function() {
		
		var logList = [];
		
		var _log = function(message, type) {
			var time = new Date(),
				finalMessage = 	'[' + (time.getHours() < 10 ? '0' + time.getHours() : time.getHours()) + ':' +
								(time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()) + ':' +
								(time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()) + '.' +
								time.getMilliseconds() + '] ' +
								message;
			
			switch(type) {
				case 'warn':
					console.warn(finalMessage);
				break;
				case 'error':
					console.error(finalMessage);
				break;
				default:
					type = 'info';
					console.info(finalMessage);
				break;
			}
			
			var	info = {
				hours: time.getHours(),
				minutes: time.getMinutes(),
				seconds: time.getSeconds(),
				milliseconds: time.getMilliseconds(),
				message: message,
				output: finalMessage,
				type: type
			};
			
			logList.push(info);
		};
		
		var _info = function(message) { _log(message, 'info'); };
		
		var _warn = function(message) { _log(message, 'warn'); };
		
		var _error = function(message) { _log(message, 'error'); };
		
		var _getList = function(filter) {
			var def = {
				info: false,
				warn: false,
				error: false
			};
			
			if(filter) {
				$.extend(def, filter);
			} else {
				filter = {
					info: true,
					warn: true,
					error: true
				};
			}
			
			var output = [];
			
			for( var i = 0; i < logList.length; i++ ) {
				if(logList[i].type === 'info' && filter.info === true ||
				   logList[i].type === 'warn' && filter.warn === true ||
				   logList[i].type === 'error' && filter.error === true) {
						output.push(logList[i]);
				}
			}
			
			return output;
		};
		
		
		return {
			info: _info,
			warn: _warn,
			error: _error,
			getList: _getList
		};
		
	})();
	
		
	var assert = function(exp, message) {
		if (!exp) {
			throw new AssertException(message);
		}
	};
	
	
	
	
	/********************************************************************************************************************
	 *													    EXCEPTIONS										  			*
	 ********************************************************************************************************************/
	
	var AssertException = function(message) {
	    this.name = "AssertException";
	    this.message = message || "Assert Exception occurred!";
	    logger.warn(this.name + ': ' + this.message);
	}
	AssertException.prototype = new Error();
	AssertException.prototype.constructor = AssertException;
	
	
		
	
	/********************************************************************************************************************
	 *														LIBRARIES										  			*
	 ********************************************************************************************************************/
	 
	 var _loadLibrary = function(library, callback) {
	 	
	 	assert(arguments.length > 0, 'Not enough parameters for didgeridoo.libraries.load( library [, callback] ).\n'+
	 										'«library» parameter is required!');

	 	assert(typeof library === 'string' || library instanceof Array, 'Type mismatch. «library» parameter in didgeridoo.libraries.load( library [, callback] ) must be a string.');
	 	
	 	if(arguments.length > 1) {
			assert(typeof callback === 'function', 'Type mismatch. «callback» parameter in didgeridoo.libraries.load( library [, callback] ) must be a function.');
		}
	 	
	 	if(typeof library === 'string') {
		 	library = [library];
	 	}
	 	
	 	
 		var list = didgeridoo.libraries.list, loaded = 0;
 			 		
 		for(var i = 0; i < library.length; i++) {
 			 		
	 		assert(typeof list[library[i]] === 'object', 'Library not found. «' + library[i] + '» library does not exist.');
	 		
	 		if( typeof list[library[i]].css === 'string' ) {
	 			$('head').append('<link rel="stylesheet" href="' + APP_DIR + FILE_SEPARATOR + list[library[i]].css + '" />');
	 		}
	 		
 			if( typeof list[library[i]].js === 'string' ) {
 				require( [list[library[i]].js], function() {
	 				loaded++;
	 				if(loaded === library.length) { callback.call(this); }
 				});
 			} else {
 				loaded++;
 			}
 			
 			if(loaded === library.length) { callback.call(this); }
 		}
	 			 		 	
	 };
	 
	
	
	
	/********************************************************************************************************************
	 *														 MODULES										  			*
	 ********************************************************************************************************************/
	
	/* _loadModule(module, [selector])
	 *
	 * Loads a module specified at «module» parameter. Optionally
	 * can append HTML dependencies at a specified jQuery's like «selector».
	 * Note: if no selector is specified the name of the module will be
	 * 		 «module»/main.
	 *
	 * module:		string containing the name of the module (i.e. 'ui/layout').
	 * selector:	(optional) string containing a jQuery's like selector to
	 *				which append the module.
	 */
	var _loadModule = function() {
		
		assert(	arguments.length > 0,
				'Not enough parameters for didgeridoo.loadModule(module [, selector]) function.\n'+
						'«module» parameter is required!');
		assert(	typeof arguments[0] === 'string',
				'el parametro module no es un string');
		
		
		var module = arguments[0],
			selector,
			callback,
			_module_path = APP_DIR + '/' + MODULES_DIR + '/' + module + '/';
		
		if(typeof arguments[1] !== 'undefined') {
			
			assert(	typeof arguments[1] === 'string' ||
					typeof arguments[1] === 'function',
					'el segundo parametro debe ser selector o callback');
			
			if(typeof arguments[1] === 'function') {
				callback = arguments[1];
			} else {
				selector = arguments[1];
				
				assert(	typeof arguments[2] === 'function' ||
						typeof arguments[2] === 'undefined',
						'el tercer parametro debe ser una funcion');
				
				if(arguments[2]) {
					callback = arguments[2];
				}
			}
			
		}
		
		//Load the dependencies schema
		$.ajax({
			type: 'GET',
			dataType: 'json',
			url: _module_path + MODULE_CONFIG_FILENAME,
			success: function(config) {
				
				var deps, version, files, entrypoint;
				
				assert(typeof config === 'object' && !Array.isArray(config), 'error!! no se ha podido recuperar el archivo de configuracion o no es un objeto!!');
				assert(typeof config.entrypoint === 'string', 'no hay entrypoint o no es un string!!');
				
				entrypoint = config.entrypoint;
				if(entrypoint.substr(-3) === '.js') { entrypoint = entrypoint.substr(0, entrypoint.length - 3); }
				files = config.files;
									
				var mconfig = $.extend(true, config, {
					url: _module_path,
					renderTo: selector,
					id: module
				});
				
				require([MODULES_DIR + '/' + module + '/' + entrypoint], function(m) {
					$.extend( true, m, _moduleProto(mconfig) );
					didgeridoo.modules.list[module] = m;
					if(callback) {
						var token = didgeridoo.observer.subscribe(config.name + '.ready', function() {
							didgeridoo.observer.unsubscribe(token);
							callback(m);
						});
					}
					
					didgeridoo.observer.publish(config.name + '.loaded', m);
				});
				
			}, //end of success function
			error: function(xhr, status, errorThrown) {
				logger.warn('Oops! Didgeridoo couldn\'t load the "' + module + '" module.\n'+
									'Error details:\n  Status Text: ' + status + '\n  errorThrown: ' + errorThrown);
			} //end of error function
		});
	
				
	};
	
	var _moduleProto = function(_mconfig) {
		return {
			originalConfig: _mconfig
		};
	};
	
	var _getModule = function(module) {
		return didgeridoo.modules.list.hasOwnProperty(module) ? didgeridoo.modules.list[module] : null;
	};
	
	
	
	
	/********************************************************************************************************************
	 * OBSERVER
	 ********************************************************************************************************************/
	/*
	* Based on the Pub/Sub implementation by Addy Osmani
	* http://addyosmani.com/
	* https://github.com/addyosmani/pubsubz
	* http://jsfiddle.net/LxPrq/
	* Licensed under the GPL
	*/
	var topics = {},
        subUid = -1;

    var _publish = function ( topic, args ) {

        if (!topics[topic]) {
            return false;
        }

        setTimeout(function () {
            var subscribers = topics[topic],
                len = subscribers ? subscribers.length : 0;

            while (len--) {
                subscribers[len].func(topic, args);
            }
        }, 0);

        return true;

    };

   var  _subscribe = function ( topic, func ) {
		
		var tokens = [];
		
		topic = topic.split(',');
		for(var i=0; i < topic.length; i++) {
			topic[i] = topic[i].trim();
		}
			
		for(var i=0; i < topic.length; i++) {
			if (!topics[topic[i]]) {
	            topics[topic[i]] = [];
	        }
	
	        var token = (++subUid).toString();
	        topics[topic[i]].push({
	            token: token,
	            func: func
	        });
	        
	        tokens.push(token);
		}
        
        return tokens;
    };

   var  _unsubscribe = function ( token ) {
        for (var m in topics) {
            if (topics[m]) {
                for (var i = 0, j = topics[m].length; i < j; i++) {
                    if (topics[m][i].token === token) {
                        topics[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }
        return false;
    };
	
	
	/**********************************************
	 *                 PUBLIC INTERFACE        	  *
	 **********************************************/
	return {
		'FILE_SEPARATOR': FILE_SEPARATOR,
		'APP_DIR': APP_DIR,
		'MODULES_DIR': MODULES_DIR,
		'MODULE_CONFIG_FILENAME': MODULE_CONFIG_FILENAME,
		'LIBRARIES_DIR': LIBRARIES_DIR,
		'CONFIG_DIR': CONFIG_DIR,
		'LIBRARIES_LIST_PATH': LIBRARIES_LIST_PATH,
		logger: logger,
		utils: {
			assert: assert
		},
		observer: {
			publish: _publish,
			subscribe: _subscribe,
			unsubscribe: _unsubscribe
		},
		modules: {
			list: {},
			get: _getModule,
			load: _loadModule
		},
		libraries: {
			load: _loadLibrary,
			list: {}
		}
	}
	
})();
