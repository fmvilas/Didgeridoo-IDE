(function() {
    
    //Extends information about visual editor with the visual editor itself
    $.extend(didgeridoo.ui.visualEditor, $("#didgeridoo-visual-editor")[0]);

    didgeridoo.ui.visualEditor.iframe = $('#didgeridoo-visual-editor-iframe');

    didgeridoo.ui.visualEditor.interactor = $('#didgeridoo-visual-editor-interactor');
    
    didgeridoo.ui.visualEditor.interactorContainer = $('#didgeridoo-visual-editor-interactorContainer');

    didgeridoo.ui.visualEditor.selectedObject = null;

    didgeridoo.ui.visualEditor.selectObjectFromPoint = function(e) {
        var doc = didgeridoo.ui.visualEditor.iframe[0].contentDocument,
            body = doc.body,
            deltaX = didgeridoo.ui.visualEditor.interactorContainer[0].scrollLeft,
            deltaY = didgeridoo.ui.visualEditor.interactorContainer[0].scrollTop,
            x = (e.offsetX || e.layerX) - deltaX,
            y = (e.offsetY || e.layerY) - deltaY,
            $el = $(doc.elementFromPoint(x-1, y-1)),
            $pel = $el.parent(),
            result = null;
		
		if(didgeridoo.ui.visualEditor.selectedObject != null) {
			$(didgeridoo.ui.visualEditor.selectedObject).css('background-color', 'transparent');
		}
		
		if($el[0]) {
	        
	        $el.css('background-color', 'yellow');
	
	        result = $el;
	
	        didgeridoo.ui.visualEditor.interactor.height(didgeridoo.ui.visualEditor.iframe[0].contentDocument.body.scrollHeight);
	        didgeridoo.ui.visualEditor.interactor.width(didgeridoo.ui.visualEditor.iframe[0].contentDocument.body.scrollWidth);
	        
		}
		
        didgeridoo.ui.visualEditor.selectedObject = result;
        
        console.log('Selected element: ', result);
        
        return result;
    };
    
    
    didgeridoo.ui.visualEditor.iframe.wrapTextBlobs = function() {
        body = didgeridoo.ui.visualEditor.iframe[0].contentDocument.body;

        $(body).contents().filter(function() {
            return this.nodeType == 3 && this.length > 1; //3 is the type of a TextNode
        }).wrap('<span></span>').end();
    };

    didgeridoo.ui.visualEditor.interactor.droppable({
        accept: '.didgeridoo-tools-tool',
        drop: function( event, ui ) {
            var body = didgeridoo.ui.visualEditor.iframe[0].contentDocument.body,
                path = didgeridoo.toolsPath + $(ui.draggable).data('toolPath'),
                containerEl = didgeridoo.ui.visualEditor.selectObjectFromPoint(event);

            $.ajax(path, {
                cache: false, //TIP: Do we have to cache or not? :/ Maybe a config option for didgeridoo?
                success: function(data) {
                    $(containerEl, body).append(data);
                }
            });
        }
    });

    didgeridoo.ui.visualEditor.interactor.click(function(e) {
        didgeridoo.ui.visualEditor.selectObjectFromPoint(e);
    });

    didgeridoo.ui.visualEditor.interactor.mousemove(function(e) {
        if(didgeridoo.ui.visualEditor.isDragging == true) {
            didgeridoo.ui.visualEditor.selectObjectFromPoint(e);
        }
    });

    didgeridoo.ui.visualEditor.interactorContainer.scroll(function(e) {
        didgeridoo.ui.visualEditor.iframe[0].contentWindow.scroll(this.scrollLeft, this.scrollTop);
    });

    didgeridoo.ui.visualEditor.iframe.load(function() {
        didgeridoo.ui.visualEditor.iframe.wrapTextBlobs();
        //didgeridoo.ui.visualEditor.interactor.height($(didgeridoo.ui.visualEditor.iframe[0].contentDocument.body).outerHeight());
        //didgeridoo.ui.visualEditor.iframe[0].contentDocument.getElementsByTagName('html')[0].height = didgeridoo.ui.visualEditor.iframe[0].contentWindow.outerHeight;
        didgeridoo.ui.visualEditor.interactor.height(didgeridoo.ui.visualEditor.iframe[0].contentDocument.body.scrollHeight);
        didgeridoo.ui.visualEditor.interactor.width(didgeridoo.ui.visualEditor.iframe[0].contentDocument.body.scrollWidth);
        //$('#didgeridoo-visual-editor-interactorContainer').css('display', 'none');
    });
	
})();