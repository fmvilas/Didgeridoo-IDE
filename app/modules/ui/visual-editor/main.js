(function() {
    
    //Extends information about visual editor with the visual editor itself
    $.extend(didgeridoo.ui.visualEditor, $("#didgeridoo-visual-editor")[0]);

    didgeridoo.ui.visualEditor.iframe = $('#didgeridoo-visual-editor-iframe');

    didgeridoo.ui.visualEditor.interactor = $('#didgeridoo-visual-editor-interactor');
    
    didgeridoo.ui.visualEditor.interactorContainer = $('#didgeridoo-visual-editor-interactorContainer');
    
    didgeridoo.ui.visualEditor.nodeHandler = $('#didgeridoo-visual-editor-node-handler');
    
    didgeridoo.ui.visualEditor.parentNodeHandler = $('#didgeridoo-visual-editor-parent-node-handler');

    didgeridoo.ui.visualEditor.selectedParent = null;

    didgeridoo.ui.visualEditor.selectObjectFromPoint = function(e) {
        var doc = didgeridoo.ui.visualEditor.iframe[0].contentDocument,
            body = doc.body,
            deltaX = didgeridoo.ui.visualEditor.interactorContainer[0].scrollLeft,
            deltaY = didgeridoo.ui.visualEditor.interactorContainer[0].scrollTop,
            x = (e.offsetX || e.layerX) + e.srcElement.offsetLeft + e.srcElement.parentElement.offsetLeft - e.srcElement.parentElement.scrollLeft - deltaX,
            y = (e.offsetY || e.layerY) + e.srcElement.offsetTop + e.srcElement.parentElement.offsetTop - e.srcElement.parentElement.scrollTop - deltaY,
            $el = $(doc.elementFromPoint(x-1, y-1)),
            $pel = $el.parent(),
            result = null;
		
		console.log(e);
		
		if($el[0]) {
	        
	        didgeridoo.ui.visualEditor.parentNodeHandler.css('overflow', 'hidden');
	        if($pel[0] instanceof HTMLHtmlElement || $pel[0] == doc) {
				didgeridoo.ui.visualEditor.parentNodeHandler.css({
				    'left': $el[0].offsetLeft + parseInt($el.css('margin-left')),
				    'top': $el[0].offsetTop + parseInt($el.css('margin-top')),
				    'width': $el.outerWidth(),
				    'height': $el.outerHeight(),
				    'overflow': $el.css('overflow')
				});
				
				console.log($el.outerWidth());
				didgeridoo.ui.visualEditor.nodeHandler.css({
				    'left': $el[0].offsetLeft,
				    'top': $el[0].offsetTop,
				    'width': $el.outerWidth(),
				    'height': $el.outerHeight()
				});
			} else {
				var obj = $pel[0], ol = 0, ot = 0;
				console.log($el);
				do {
					ol += obj.offsetLeft;
					ot += obj.offsetTop;
				} while(obj = obj.offsetParent);
				didgeridoo.ui.visualEditor.parentNodeHandler.css({
				    'left': ol,
				    'top': ot,
				    'width': $pel.outerWidth(),
				    'height': $pel.outerHeight(),
				    'overflow': $pel.css('overflow')
				});
							
				didgeridoo.ui.visualEditor.nodeHandler.css({
				    'left': $el[0].offsetLeft + parseInt($el.css('margin-left')) - $pel[0].offsetLeft,
				    'top': $el[0].offsetTop + parseInt($el.css('margin-top')) - $pel[0].offsetTop,
				    'width': $el.outerWidth(),
				    'height': $el.outerHeight()
				});
				
				if(!($el[0] instanceof HTMLBodyElement)) {
					console.dir($.fn);
					$('.didgeridoo-visual-editor-resizer-handler').css('display', 'block').draggable({
						drag: function(e) {
							
						},
						stop: function(e) {
							var _self = $(this),
								_p = {
										left: parseInt(_self.css('left')),
										top: parseInt(_self.css('top'))
									}
							
							if(_p.left < 0) { _self.css('left', 0); }
							if(_p.top < 0) { _self.css('top', 0); }
							
							console.log(didgeridoo.ui.visualEditor.resizerHandlers.se[0].offsetLeft);
						}
					});
				}
			}
	
	        result = $el;
	
	        didgeridoo.ui.visualEditor.interactor.height(didgeridoo.ui.visualEditor.iframe[0].contentDocument.body.scrollHeight);
	        didgeridoo.ui.visualEditor.interactor.width(didgeridoo.ui.visualEditor.iframe[0].contentDocument.body.scrollWidth);
	        
		}
		
		didgeridoo.ui.visualEditor.selectedParent = $pel;
        didgeridoo.ui.visualEditor.selectedObject = result;
        
        console.log('Selected element: ', result);
        
        return result;
    };
    
    didgeridoo.ui.visualEditor.parentNodeHandler.scroll(function(e) {
    	didgeridoo.ui.visualEditor.selectedParent[0].scrollTop = this.scrollTop;
    	didgeridoo.ui.visualEditor.selectedParent[0].scrollLeft = this.scrollLeft;
    });

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