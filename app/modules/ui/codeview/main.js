"use strict";
define(function() {
	
	var config,
		files,
		moduleName = 'didgeridoo-codeview',
		codeviewTemplate;
	
	var tokens = didgeridoo.observer.subscribe(moduleName + '.loaded', function(topic, module) {
		didgeridoo.observer.unsubscribe(tokens[0]);
		_init(module);
	});
	
	
	var _init = function(module) {
		var htmlIsLoaded = false,
			codeMirrorIsLoaded = false;	
		
		config = module.originalConfig; 
		files = config.files;
		
		didgeridoo.libraries.load('codemirror', function(a, b, c) {
			codeMirrorIsLoaded = true;
			_whenLoaded(htmlIsLoaded, codeMirrorIsLoaded);
		});
		
		$.ajax({
			url: config.url + files.html.main,
			success: function(data) {
				codeviewTemplate = $.template(null, data);
				htmlIsLoaded = true;
				_whenLoaded(htmlIsLoaded, codeMirrorIsLoaded);
			},
			error: function(jqXHR, status, errorThrown) {
				didgeridoo.logger.warn('Oops! Didgeridoo couldn\'t load the "' + config.id + '" module.\n'+
										'Error details:\n  Status Text: ' + status + '\n  Error Thrown: ' + errorThrown);
			}
		});
		
		$('head').append('<link rel="stylesheet" href="' + config.url + files.css.main  + '">');
		
	};
	
	
	
	var _whenLoaded = function(htmlIsLoaded, codeMirrorIsLoaded) {
		if( htmlIsLoaded === true && codeMirrorIsLoaded === true ) {
			didgeridoo.observer.publish(moduleName + '.ready');
		}
	};
	
	
	
	var CodeView = function(documentId) {
      	if ( !(this instanceof CodeView) )
      		return new CodeView();
      	
      	var _instance = this,
      		_rendered = false,
      		_editor;
		
		var _renderTo = function(selector, callback) {
			var assert = didgeridoo.utils.assert;
			assert(	typeof selector === 'string' ||
					typeof selector === 'object',
					'Error in module ' + config.id + '.\n' +
					'CodeView._renderTo(selector[, callback]): "selector" must be a String or an Object.');
			
			assert(	typeof callback === 'function' ||
					typeof callback === 'undefined',
					'Error in module ' + config.id + '.\n' +
					'CodeView._renderTo(selector[, callback]): "callback" is not a Function.');
					
			
			var _id = documentId + '-designer',
				_codemirror = didgeridoo.libraries.list.codemirror,
				APP_DIR = didgeridoo.APP_DIR + '/';
			
			$.tmpl( codeviewTemplate, {
				id: _id
			} ).appendTo( selector );
			
			
			$('head').append('<link rel="stylesheet" href="' + APP_DIR + _codemirror.theme.didgeridoo  + '">');
			$('head').append('<script src="' + APP_DIR + _codemirror.mode.xml  + '"></script>');
			$('head').append('<script src="' + APP_DIR + _codemirror.mode.css  + '"></script>');
			$('head').append('<script src="' + APP_DIR + _codemirror.mode.javascript  + '"></script>');
			$('head').append('<script src="' + APP_DIR + _codemirror.mode.htmlmixed  + '"></script>');
			
			
			_editor = CodeMirror.fromTextArea( $('#' + _id)[0], {
				mode: 'text/html',
				tabMode: 'indent',
				lineNumbers: true,
    			lineWrapping: true,
    			theme: 'didgeridoo'
			});
			
			_rendered = true;
			didgeridoo.observer.publish(moduleName + '.rendered', _instance);
			
			if(callback) {
				callback.call(this);
			}
			
			return _instance;
		};
		
		
		
		var _load = function(url, mode) {
			var assert = didgeridoo.utils.assert;
			assert(	_rendered === true,
					'Error in module ' + config.id + '.\n' +
					'CodeView._load(url[, mode]): The module must be rendered before performing any operation.');
			
			assert(	typeof url === 'string',
					'Error in module ' + config.id + '.\n' +
					'CodeView._load(url[, mode]): "url" must be a String.');
			
			assert(	typeof mode === 'string' ||
					typeof mode === 'undefined',
					'Error in module ' + config.id + '.\n' +
					'CodeView._load(url[, mode]): "mode" must be a String.');
					
			
			$.ajax({
				url: url,
				success: function(code) {
					console.dir(_editor);
					_editor.setValue(code);
				},
				error: function(jqXHR, status, errorThrown) {
					didgeridoo.logger.warn('Oops! Didgeridoo couldn\'t load the "' + url + '" file at CodeView._load(url[, mode]).\n'+
											'Error details:\n  Status Text: ' + status + '\n  Error Thrown: ' + errorThrown);
				}
			});
			
		};
		
				
		return {
			load: _load,
			renderTo: _renderTo
		};
		
	};
	
	
	return CodeView;
	
});