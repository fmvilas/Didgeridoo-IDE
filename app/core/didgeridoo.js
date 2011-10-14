var didgeridoo = (function () {

	/**********************************************
	 *					CONSTANTS				  *
	 **********************************************/
	 
	var _ = {
		APP_DIR: 'app',
		MODULES_DIR: 'modules',
		DEPS_FILENAME: 'deps.json'
	};
	
	
	
	/**********************************************
	 *					  UTILS					  *
	 **********************************************/
	
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
	
	
	
	
	/**********************************************
	 *					 METHODS				  *
	 **********************************************/
	
	var start = function() {
		_buildUI();
	};
	
	/* _buildUI
	 *
	 * Constructs the Didgeridoo User Interface.
	 */
	var _buildUI = function() {
		loadModule('ui/jqueryui', '');
		loadModule('ui/layout', 'body', function() {
			loadModule('ui/main-menu', '#ui-layout-north');
			loadModule('ui/kendoui', 'body', function() {
				loadModule('ui/tools', '#ui-layout-west > .container', function() {
					loadModule('ui/project-explorer', '#ui-layout-west .container', function() {
						$('#ui-layout-west .container').append('<div></div>').kendoSplitter({
							orientation: 'vertical',
							panes: [{
								size: '200px'
							},
							{
								size: '200px'
							},
							{
								size: '50px'
							}]
						});
					});
				});
			});
			loadModule('ui/visual-editor', '#ui-layout-center');
			loadModule('ui/ace', '#didgeridoo-code-editor');
		});
	};
	
	/* loadModule(module, [selector])
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
	var loadModule = function(module, selector, callback) {
		
		if(arguments.length > 1 && typeof selector == 'string' ) {

			//Load the dependencies schema
			$.getJSON(_.APP_DIR + '/' + _.MODULES_DIR + '/' + module + '/' + _.DEPS_FILENAME, function(deps) {
				
				//Load the CSS...
				if(deps.css) {
					$('head').append('<link rel="stylesheet" type="text/css" href="' + _.APP_DIR + '/' + _.MODULES_DIR + '/' + module + '/' + deps.css + '" />');
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
			logger.warn('Not enough parameters for didgeridoo.loadModule(module, [selector]) function.\n'+
						'«module» parameter is required!');
		}
				
	};
	
	
	
	/**********************************************
	 *				PUBLIC INTERFACE			  *
	 **********************************************/
	return $.extend(_, {
		logger: logger,
		start: start,
		loadModule: loadModule,
		ui: {
			visualEditor: {}
		}
	});
})();