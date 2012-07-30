"use strict";
define(function() {
	
	var moduleName = 'didgeridoo-document',
		documentTemplate;
	
	var tokens = didgeridoo.observer.subscribe(moduleName + '.loaded', function(topic, module) {
		didgeridoo.observer.unsubscribe(tokens[0]);
		_init(module);
	});
	
	
	var _init = function(module) {
		var	config = module.originalConfig, 
			files = config.files;	
		
		//Create "documents" namespace if it doesn't exist yet
		if( typeof didgeridoo.documents === 'undefined' ) { didgeridoo.documents = {}; }
		
		$.ajax({
			url: config.url + files.html.document,
			success: function(data) {
				documentTemplate = $.template(null, data);
				didgeridoo.observer.publish(moduleName + '.ready');
			},
			error: function(jqXHR, status, errorThrown) {
				didgeridoo.logger.warn('Oops! Didgeridoo couldn\'t load the "' + config.id + '" module.\n'+
										'Error details:\n  Status Text: ' + status + '\n  Error Thrown: ' + errorThrown);
			}
		});
		
		$('head').append('<link rel="stylesheet" href="' + config.url + files.css.document  + '">');
	};
	
	
	
	var Document = function() {
      	if ( !(this instanceof Document) )
      		return new Document();
      		
		var _id = 'document' + new Date().getTime(),
			_state = 'closed',
			_url = '',
			_title = '',
			_designer = null,
			_codeview = null;
		
		
		var _load = function(url, callback) {
			_title = url.lastIndexOf('/') != -1 ? url.substr(url.lastIndexOf('/')+1) : url;
			_url = url;
			_state = 'loaded';
			
			if( typeof didgeridoo.documents[_id] === 'undefined' ) {
				didgeridoo.documents[_id] = this;
			}
			
			$.tmpl( documentTemplate, {
				id: _id,
				state: _state,
				url: _url,
				title: _title
			} ).appendTo( didgeridoo.modules.get('ui/layout').getCenter() );
			didgeridoo.modules.get('ui/layout').getCenter().tabs( 'add', '#' + _id, _title );
			
			didgeridoo.modules.load('ui/designer', function(Designer) {
				_designer = new Designer(_id);
				
				didgeridoo.modules.get('ui/layout').getCenter().tabs( 'select', '#' + _id );
				_designer.renderTo('#' + _id + ' .didgeridoo-document-designer-container', function() {
					_designer.loadURL(url, function() {
						didgeridoo.observer.publish(moduleName + '.document.load', _id);						
					});
				});
				
				didgeridoo.modules.load('ui/tools');
			});
			
			didgeridoo.modules.load('ui/codeview', function(CodeView) {
				_codeview = new CodeView(_id);
				
				didgeridoo.modules.get('ui/layout').getCenter().tabs( 'select', '#' + _id );
				_codeview.renderTo('#' + _id + ' .didgeridoo-document-codeview-container', function() {
					
					this.load(url);
				});
			});
			
			$('#' + _id).on('click', '.icon.codeview', function() {
				if( $('.didgeridoo-document-designer-container', '#' + _id).css('display') === 'block' ) {
					$('.didgeridoo-document-designer-container', '#' + _id).css('display', 'none');
					$('.didgeridoo-document-codeview-container', '#' + _id).css('display', 'block');
				} else {
					$('.didgeridoo-document-designer-container', '#' + _id).css('display', 'block');
					$('.didgeridoo-document-codeview-container', '#' + _id).css('display', 'none');
				}
				
			});
			
			didgeridoo.observer.publish(moduleName + '.rendered');
		};
		
		var _close = function() {
			delete didgeridoo.documents[_id];
			didgeridoo.modules.get('ui/layout').getCenter().tabs( 'remove', '#' + _id );
			
			didgeridoo.observer.publish(moduleName + '.document.close', _id);
		};
		
		var _getDesigner = function() {
			return _designer;
		};
		
		var _getCodeView = function() {
			return _codeview;
		};
		
		var _getId = function() {
			return _id;
		};
		
		var _getState = function() {
			return _state;
		};
		
		var _getURL = function() {
			return _url;
		};
		
		var _getTitle = function() {
			return _title;
		};
		
				
		return {
			getId: _getId,
			getState: _getState,
			getURL: _getURL,
			getTitle: _getTitle,
			load: _load,
			close: _close,
			getDesigner: _getDesigner,
			getCodeView: _getCodeView
		};
		
	};
	
	
	return Document;
	
});