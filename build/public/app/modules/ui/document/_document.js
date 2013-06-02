
define([],function() {
	
    var moduleName = 'Document',
    cssFile = require.toUrl('./document.css');
	
    var Document = function() {
        
        var _id = 'document' + new Date().getTime(),
        _state = 'closed',
        _url = '',
        _title = '';
    	
        //Initialize
        didgeridoo.documents =  didgeridoo.documents || {};

        var _close = function() {
            delete didgeridoo.documents[_id];
            $(didgeridoo.layout.getCenterPanel()).tabs( 'remove', '#' + _id );
    			
            didgeridoo.observer.publish(moduleName + '.document.close', _id);
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

        var _setTitle = function(newTitle) {
            _title = newTitle;
        };
    		
    				
        return {
            getId: _getId,
            getState: _getState,
            getURL: _getURL,
            getTitle: _getTitle,
            _setTitle: _setTitle,
            close: _close
        };
    		
    };
    	
    	
    return Document;
	
}); //end of define