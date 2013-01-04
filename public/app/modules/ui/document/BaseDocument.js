"use strict";
define(function() {

	var moduleName = 'BaseDocument';

	var BaseDocument = function() {

		//It forces to instantiate the class
		if ( !(this instanceof BaseDocument) )
			return new BaseDocument();

		var _id = 'document' + new Date().getTime(),
		_state = 'closed',
		_url = '',
		_title = '';

		//Initialize
		didgeridoo.documents = didgeridoo.documents || {};

		//Events
		didgeridoo.observer.subscribe('Document.change', function(documentId) {
			var doc = didgeridoo.documents[documentId];

			if( doc ) {
				this.setState( doc.getCodeView().getEditor().isClean() ? 'loaded' : 'dirty' );
			}

			if( this.getState() === 'dirty' ) {

			}
		});

		this.close = function() {
			didgeridoo.Action.do('FileClose', _id);
		};

		this.getId = function() {
			return _id;
		};

		this.getState = function() {
			return _state;
		};

		this.setState = function(newState) {
			var _oldState = _state;
			_state = newState;
			didgeridoo.observer.publish('Document.state.change', {
				oldState: _oldState,
				newState: newState
			});
		};

		this.getURL = function() {
			return _url;
		};

		this.setURL = function(newURL) {
			_url = newURL;
		};

		this.getTitle = function() {
			return _title;
		};

		this.setTitle = function(newTitle) {
			_title = newTitle;
		};

	};

	/*
	 * TODO:
	 * -----
	 * Create a DocumentTab Interface and DocumentTabs collection for managing tabs properly
	 *
	 */
	var DocumentTabs = (function() {

	})();

	var DocumentTab = function(documentId, title) {
		//It forces to instantiate the class
		if ( !(this instanceof DocumentTab) )
			return new DocumentTab();

		var _title = title || 'Untitled',
			_domRef;

		$(didgeridoo.layout.getCenterPanel()).tabs( 'add', '#' + documentId, _title );
	};


	return BaseDocument;

}); //end of define
