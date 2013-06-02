
define(['require',
'text!./Document.html',
'modules/ui/document/PlainTextDocument',
'modules/ui/layout/layout'],
function(require, html, PlainTextDocument) {

    var moduleName = 'PHPDocument',
    cssFile = require.toUrl('./PHPDocument.css');


    var PHPDocument = function() {

        //It forces to instantiate the class
        if ( !(this instanceof PHPDocument) )
            return new PHPDocument();

        //Inherit from BaseDocument
        didgeridoo.utils.extend(this, new PlainTextDocument);

        //Override methods
        this.load = PHPDocument.prototype.load;

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

    PHPDocument.prototype.load = function(url, callback) {

        var extension = url.match(/\..*$/g);

        this.setTitle( url.lastIndexOf('/') != -1 ? url.substr(url.lastIndexOf('/')+1) : url );
        this.setURL( url );
        this.setState( 'loaded' );

        var _id = this.getId(),
            _title = this.getTitle(),
            _this = this;

        if( typeof didgeridoo.documents[_id] === 'undefined' ) {
            didgeridoo.documents[_id] = this;
        }

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
            $designerContainer = $('.designer-container', $docContainer),
            $codeviewContainer = $('.codeview-container', $docContainer);

        $docWrapper.addClass('php-document');

        require(['modules/ui/codeview/main', 'libraries/codemirror/mode/php/php'], function(CodeView) {
            _this.setCodeView( new CodeView(_id) );

            $(didgeridoo.layout.getCenterPanel()).tabs( 'select', '#' + _id );
            _this.getCodeView().renderTo($codeviewContainer[0], function() {

                this.load(url, 'application/x-httpd-php', function() {
                    _this.setState('loaded');
                });
            });
        });

        if( typeof callback === 'function') callback(_this);

        didgeridoo.observer.publish(moduleName + '.rendered');
    };

    return PHPDocument;

}); //end of define
