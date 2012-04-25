var d = didgeridoo = (function () { // 'd' is shorthand for 'didgeridoo'

	/********************************************************************************************************************
	 *														 CONSTANTS										  			*
	 ********************************************************************************************************************/
	 
	var _ = {
		APP_DIR: 'app',
		MODULES_DIR: 'modules',
		LIBRARIES_DIR: 'libraries',
		DEPS_FILENAME: 'deps.json',
		LIBRARIES_LIST_PATH: 'app/init/libraries.list.json'
	};
	
	
	
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
				type: type
			};
			
			logList.push(info);
		};
		
		var _info = function(message) { _log(message, 'info'); };
		
		var _warn = function(message) { _log(message, 'warn'); };
		
		var _error = function(message) { _log(message, 'error'); };
		
		return {
			log: _log,
			info: _info,
			warn: _warn,
			error: _error,
			list: logList
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

	 	assert(typeof library == 'string', 'Type mismatch. «library» parameter in didgeridoo.libraries.load( library [, callback] ) must be a string.');
	 	
	 	if(arguments.length > 1) {
			assert(typeof callback == 'function', 'Type mismatch. «callback» parameter in didgeridoo.libraries.load( library [, callback] ) must be a function.');
		}
	 	
	 	
	 	$.getJSON(_.LIBRARIES_LIST_PATH, function(libs) {
	 	
	 		var list = libs.libraries;
	 		
	 		assert(typeof list[library] == 'object', 'Library not found. «' + library + '» library does not exist.');
	 		
	 		if( typeof list[library].css == 'string' ) {
	 			$('head').append('<link rel="stylesheet" type="text/css" href="' + _.APP_DIR + '/' + list[library].css + '" />');
	 		}
	 		
 			if( typeof list[library].js == 'string' ) {
 				if(callback) {
 						require( [list[library].js], callback );
 				} else {
 					require( [list[library].js] );
 				}
 			} else {
 				if(callback) {
 					callback.call(this);
 				}
 			}
	 		
	 	});
	 	
	 	
	 }
	 
	
	
	
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
	var _loadModule = function(module, selector, callback) {
		
		if(arguments.length > 1 && typeof selector == 'string' ) {

			//Load the dependencies schema
			$.getJSON(_.APP_DIR + '/' + _.MODULES_DIR + '/' + module + '/' + _.DEPS_FILENAME, function(deps) {
				
				//Load the CSS...
				if(deps.css) {
					if(typeof deps.css != 'object') { deps.css = [deps.css]; } //If dep.css is not an array, let's make it
					for(var i=0;i<deps.css.length;i++) {
						$('head').append('<link rel="stylesheet" type="text/css" href="' + _.APP_DIR + '/' + _.MODULES_DIR + '/' + module + '/' + deps.css[i] + '" />');
					}
				}
				//...and load the HTML...
				if(deps.html) {
					require(['text!' + _.MODULES_DIR + '/' + module + '/' + deps.html], function(html) {
						$(selector).append(html);
						
						//...and, when finished, load the JavaScript.
						if(deps.js) {
							if(typeof deps.js != 'object') { deps.js = [deps.js]; } //If dep.js is not an array, let's make it
							for(var i=0;i<deps.js.length;i++) {
								if(deps.js[i].substr(0, 6) == 'order!') {
									deps.js[i] = 'order!' + _.MODULES_DIR + '/' + module + '/' + deps.js[i].substr(6);
								} else {
									deps.js[i] = _.MODULES_DIR + '/' + module + '/' + deps.js[i];
								}
							}
							if(typeof callback == 'function') {
								require(deps.js, callback);
							} else {
								require(deps.js);
							}
						} else {
							if(typeof callback == 'function') {
								callback.call(this);
							}
						}
					});
				} else if(deps.js) {
					if(typeof deps.js != 'object') { deps.js = [deps.js]; } //If dep.js is not an array, let's make it
					for(var i=0;i<deps.js.length;i++) {
						if(deps.js[i].substr(0, 6) == 'order!') {
							deps.js[i] = 'order!' + _.MODULES_DIR + '/' + module + '/' + deps.js[i].substr(6);
						} else {
							deps.js[i] = _.MODULES_DIR + '/' + module + '/' + deps.js[i];
						}
					}
					if(typeof callback == 'function') {
						require(deps.js, callback);
					} else {
						require(deps.js);
					}
				}
				
				
			});
		} else if(arguments.length == 1) {
			require([_.MODULES_DIR + '/' + module + '/main']);
		} else {
			logger.warn('Not enough parameters for didgeridoo.loadModule(module [, selector]) function.\n'+
						'«module» parameter is required!');
		}
				
	};
	
	
	
	
	/********************************************************************************************************************
	 *														 OBSERVER										  			*
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

    _publish = function ( topic, args ) {

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

    _subscribe = function ( topic, func ) {

        if (!topics[topic]) {
            topics[topic] = [];
        }

        var token = (++subUid).toString();
        topics[topic].push({
            token: token,
            func: func
        });
        return token;
    };

    _unsubscribe = function ( token ) {
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
	 *				PUBLIC INTERFACE			  *
	 **********************************************/
	return $.extend(_, {
		logger: logger,
		observer: {
			publish: _publish,
			subscribe: _subscribe,
			unsubscribe: _unsubscribe
		},
		modules: {
			load: _loadModule
		},
		libraries: {
			load: _loadLibrary
		},
		ui: {
			visualEditor: {}
		}
	});
})();