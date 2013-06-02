
define(['require',
'text!./Document.html',
'modules/ui/document/BaseDocument',
'modules/ui/layout/layout'],
function(require, html, BaseDocument) {
	
    var moduleName = 'BlankDocument',
    cssFile = require.toUrl('./BlankDocument.css');

    
    var BlankDocument = function() {

        //It forces to instantiate the class
        if ( !(this instanceof BlankDocument) )
            return new BlankDocument();
        
        //Inherit from BaseDocument
        didgeridoo.utils.extend(this, new BaseDocument);

        if( typeof didgeridoo.documents[this.getId()] === 'undefined' ) {
            didgeridoo.documents[this.getId()] = this;
        }

        var _codeview = null;
    		
        this.getCodeView = function() {
            return _codeview;
        };

        this.setCodeView = function(newCodeView) {
            _codeview = newCodeView;
        };
    		
    };

    BlankDocument.prototype.load = function() {
        this.setTitle( 'Untitled' );
        this.setState( 'loaded' );

        var _id = this.getId(),
            _title = this.getTitle(),
            _this = this;
        

        //Render HTML
        $.tmpl( html, {
            id: _id,
            state: this.getState(),
            url: this.getURL(),
            title: _title
        } ).appendTo( didgeridoo.layout.getCenterPanel() );

        //Load CSS
        didgeridoo.utils.loadCSS(cssFile);

        //Create new tab
        $(didgeridoo.layout.getCenterPanel()).tabs( 'add', '#' + _id, _title );


        var $docWrapper = $('#' + _id),
            $docContainer = $('.didgeridoo-document-container', $docWrapper),
            $codeviewContainer = $('.codeview-container', $docContainer);

        $docWrapper.addClass('blank-document');
        
        require(['modules/ui/codeview/main'], function(CodeView) {
            _this.setCodeView( new CodeView(_id) );
                
            $(didgeridoo.layout.getCenterPanel()).tabs( 'select', '#' + _id );
            _this.getCodeView().renderTo($codeviewContainer[0]);

            _this.setState('loaded');
        });
        
        didgeridoo.observer.publish(moduleName + '.rendered');
    };
    	
    return BlankDocument;
	
}); //end of define