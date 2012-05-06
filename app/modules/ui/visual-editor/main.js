(function() {

    var	$iframe = $('#didgeridoo-visual-editor-iframe'),
    	$interactor = $('#didgeridoo-visual-editor-interactor'),    
		$interactorContainer = $('#didgeridoo-visual-editor-interactorContainer'),
		selectedObject = null;

    
    var	makeWireframe = function() {
    	var doc = $iframe[0].contentDocument,
    	    body = doc.body;
			
			traverseDOMTree(body, 'el', 0);
			
    };
    
    var dom2box = function(element) {
    	var $box;
    	
    	if(element.nodeType != 3) {
    		$box = $('<' + element.tagName + '/>');
    	} else {
    		$box = element;
    	}
    	
    	return $box[0];
    };
    
    var traverseDOMTree = function(element, name, index) {
		
		var nodeList = element.childNodes,
			node,
			html,
			parent,
			box,
			elName = name;
			
		/*if(element.tagName == 'BODY') {
			element = $interactor;
		}*/
		
		for(var i = 0; i < nodeList.length; i++) {
			node = nodeList.item(i);
			
			//box = dom2box(node);
			//insert box
			
			/*if(node.nodeType != 3) {
				html = node.innerHTML;
			} else {
				html = node.innerText;
			}*/
			
			//$(element).append(html);
			if(node.nodeType != 3) {
				elName = elName + '' + i;
				console.log(elName, ' - ', node);
				traverseDOMTree(node, elName, i);
			}
		}
    };
    
    
    var selectObjectFromPoint = function(e) {
        var doc = $iframe[0].contentDocument,
            body = doc.body,
            deltaX = $interactorContainer[0].scrollLeft,
            deltaY = $interactorContainer[0].scrollTop,
            x = (e.offsetX || e.layerX) - deltaX,
            y = (e.offsetY || e.layerY) - deltaY,
            $original = $(doc.elementFromPoint(x-1, y-1)),
            $originalParent = $el.parent(),
            result = null;
		
		if($original[0]) {
	        
	        $parents = $original.parents();
	        
	        var i = 0,
	        	$object;
	        while( $parents[i].tagName != 'BODY' && i < $parents.length ) {
	        	
	        	/*$object = $(document.createElement('DIV'));
	        	$object.attr('id', 'object' + i);
	        	$original = $($parents[i]);
	        	$object.css({
	        		position: $original.css('position'),
	        		display: $original.css('display'),
	        		left: $original.css('left'),
	        		top: $original.css('top'),
	        		right: $original.css('right'),
	        		bottom: $original.css('bottom'),
	        		width: $original.css('width'),
	        		height: $original.css('height'),
	        		'float': $original.css('float'),
	        		'clear': $original.css('clear')
	        	}).css('border', '#0ff 1px solid');
	        	
	        	didgeridoo.ui.visualEditor.interactor.append($object);*/
	        	
	        	i++;
	        }
	        
	
	        selectedElement = $original;
	
	        $interactor.height(didgeridoo.ui.visualEditor.iframe[0].contentDocument.body.scrollHeight);
	        $interactor.width(didgeridoo.ui.visualEditor.iframe[0].contentDocument.body.scrollWidth);
	        
		} else {
			selectedElement = null;
		}
        
        console.log('Selected element: ', result);
    };
    
    
    $iframe.wrapTextBlobs = function() {
        body = $iframe[0].contentDocument.body;

        $(body).contents().filter(function() {
            return this.nodeType == 3 && this.length > 1; //3 is the type of a TextNode
        }).wrap('<span></span>').end();
    };

    $interactor.droppable({
        accept: '.didgeridoo-tools-tool',
        drop: function( event, ui ) {
            var body = $iframe[0].contentDocument.body,
                path = didgeridoo.toolsPath + $(ui.draggable).data('toolPath'),
                containerEl = selectObjectFromPoint(event);

            $.ajax(path, {
                cache: false, //TIP: Do we have to cache or not? :/ Maybe a config option for didgeridoo?
                success: function(data) {
                    $(containerEl, body).append(data);
                }
            });
        }
    });

    $interactor.click(function(e) {
        selectObjectFromPoint(e);
    });

    $interactor.mousemove(function(e) {
        /*if(isDragging == true) {
            selectObjectFromPoint(e);
        }*/
    });

    $interactorContainer.scroll(function(e) {
        $iframe[0].contentWindow.scroll(this.scrollLeft, this.scrollTop);
    });

    $iframe.load(function() {
        //$iframe.wrapTextBlobs();
        //didgeridoo.ui.visualEditor.interactor.height($(didgeridoo.ui.visualEditor.iframe[0].contentDocument.body).outerHeight());
        //didgeridoo.ui.visualEditor.iframe[0].contentDocument.getElementsByTagName('html')[0].height = didgeridoo.ui.visualEditor.iframe[0].contentWindow.outerHeight;
        $interactor.height($iframe[0].contentDocument.body.scrollHeight);
        $interactor.width($iframe[0].contentDocument.body.scrollWidth);
        //$('#didgeridoo-visual-editor-interactorContainer').css('display', 'none');
        makeWireframe();
    });
	
})();