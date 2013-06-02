
define(['require',
'text!./Document.html',
'modules/ui/document/BaseDocument',
'modules/ui/layout/layout'],
function(require, html, BaseDocument) {

    var moduleName = 'PlainTextDocument',
    cssFile = require.toUrl('./PlainTextDocument.css');


    var PlainTextDocument = function() {

        //It forces to instantiate the class
        if ( !(this instanceof PlainTextDocument) )
            return new PlainTextDocument();

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

    PlainTextDocument.prototype.load = function(url, callback) {

        var extension = url.match(/\.[\w]*$/g),
            mimeType = 'text/plain',
            mode;

        if( extension.length > 0 ) {
            extension = extension[0].substring(1).toUpperCase();

            switch( extension ) {
                case 'HTML':
                    type = 'HTMLDocument';
                    mimeType = 'text/html';
                    mode = 'htmlmixed';
                break;

                case 'CSS':
                    mimeType = 'text/css';
                    mode = 'css';
                break;

                case 'JS':
                    mimeType = 'text/javascript';
                    mode = 'javascript';
                break;

                case 'JAVA':
                    mimeType = 'text/x-java';
                break;
            }
        }

        var modulesToLoad;

        if( typeof mode !== 'undefined' ) {
            modulesToLoad = ['modules/ui/codeview/main', 'libraries/codemirror/mode/' + mode + '/' + mode];
        } else {
            modulesToLoad = ['modules/ui/codeview/main'];
        }

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

        $docWrapper.addClass('plain-text-document');

        require(modulesToLoad, function(CodeView) {
            _this.setCodeView( new CodeView(_id) );

            $(didgeridoo.layout.getCenterPanel()).tabs( 'select', '#' + _id );
            _this.getCodeView().renderTo($codeviewContainer[0], function() {

                this.load(url, mimeType, function() {
                    _this.setState('loaded');
                });
            });
        });

        if( typeof callback === 'function') callback(_this);

        didgeridoo.observer.publish(moduleName + '.rendered');
    };

    return PlainTextDocument;

}); //end of define
