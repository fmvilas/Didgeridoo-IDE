"use strict";
define(['require',
'text!./Document.html',
'modules/ui/document/BaseDocument',
'modules/ui/layout/layout'],
function(require, html, BaseDocument) {
	
    var moduleName = 'HTMLDocument',
    cssFile = require.toUrl('./HTMLDocument.css');

    
    var HTMLDocument = function() {

        //It forces to instantiate the class
        if ( !(this instanceof HTMLDocument) )
            return new HTMLDocument();
        
        //Inherit from BaseDocument
        didgeridoo.utils.extend(this, new BaseDocument);

        if( typeof didgeridoo.documents[this.getId()] === 'undefined' ) {
            didgeridoo.documents[this.getId()] = this;
        }

        var _designer = null,
        _codeview = null;

    		
        this.getDesigner = function() {
            return _designer;
        };

        this.setDesigner = function(newDesigner) {
            _designer = newDesigner;
        };
    		
        this.getCodeView = function() {
            return _codeview;
        };

        this.setCodeView = function(newCodeView) {
            _codeview = newCodeView;
        };
    		
    };

    HTMLDocument.prototype.load = function(url, callback) {
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

        $docWrapper.addClass('html-document');
        
        require(['modules/ui/designer/main'], function(Designer) {
            _this.setDesigner( new Designer(_id) );
                
            $(didgeridoo.layout.getCenterPanel()).tabs( 'select', '#' + _id );
            _this.getDesigner().renderTo($designerContainer[0], function() {
                _this.getDesigner().loadURL(url, function() {
                    didgeridoo.observer.publish(moduleName + '.document.load', _id);                        
                });
            });
        });
        
        require(['modules/ui/codeview/main'], function(CodeView) {
            _this.setCodeView( new CodeView(_id) );
                
            $(didgeridoo.layout.getCenterPanel()).tabs( 'select', '#' + _id );
            _this.getCodeView().renderTo($codeviewContainer[0], function() {
                    
                this.load(url, 'text/html', function() {
                    _this.setState('loaded');
                });
            });
        });
        
        $('#' + _id).on('click', '.btn.codeview', function() {
            
            if( $docContainer.hasClass('codeview') ) {
                $docContainer.removeClass('codeview').addClass('designer');
            } else {
                $docContainer.removeClass('designer').addClass('codeview');
            }
                
        });

        if( typeof callback === 'function') callback(_this);
        
        didgeridoo.observer.publish(moduleName + '.rendered');
    };
    	
    return HTMLDocument;
	
}); //end of define