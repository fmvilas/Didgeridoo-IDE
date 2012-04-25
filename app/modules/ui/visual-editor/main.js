(function() {
    
    //Extends information about visual editor with the visual editor itself
    $.extend(didgeridoo.ui.visualEditor, $("#didgeridoo-visual-editor")[0]);

    didgeridoo.ui.visualEditor.iframe = $('#didgeridoo-visual-editor-iframe');
    var	$iframe = $('#didgeridoo-visual-editor-iframe'),
    	$interactor = $('#didgeridoo-visual-editor-interactor'),    
		$interactorContainer = $('#didgeridoo-visual-editor-interactorContainer'),
		selectedObject = null;

    didgeridoo.ui.visualEditor.interactor = $('#didgeridoo-visual-editor-interactor');
    
    didgeridoo.ui.visualEditor.interactorContainer = $('#didgeridoo-visual-editor-interactorContainer');

    didgeridoo.ui.visualEditor.selectedObject = null;

    didgeridoo.ui.visualEditor.selectObjectFromPoint = function(e) {
        var doc = didgeridoo.ui.visualEditor.iframe[0].contentDocument,
    var	makeWireframe = function() {
    	var doc = $iframe[0].contentDocument,
    	    body = doc.body,
			all = $(body).find('*');
			
			$interactor.append(all);
    };
    
    
    var selectObjectFromPoint = function(e) {
        var doc = $iframe[0].contentDocument,
            body = doc.body,
            deltaX = didgeridoo.ui.visualEditor.interactorContainer[0].scrollLeft,
            deltaY = didgeridoo.ui.visualEditor.interactorContainer[0].scrollTop,
            deltaX = $interactorContainer[0].scrollLeft,
            deltaY = $interactorContainer[0].scrollTop,
            x = (e.offsetX || e.layerX) - deltaX,
            y = (e.offsetY || e.layerY) - deltaY,
            $el = $(doc.elementFromPoint(x-1, y-1)),
            $pel = $el.parent(),
            $original = $(doc.elementFromPoint(x-1, y-1)),
            $originalParent = $el.parent(),
            result = null;
		
		if(didgeridoo.ui.visualEditor.selectedObject != null) {
			$(didgeridoo.ui.visualEditor.selectedObject).css('background-color', 'transparent');
		}
		
		if($el[0]) {
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
	        
	        $el.css('background-color', 'yellow');
	
	        result = $el;
	        selectedElement = $original;
	
	        didgeridoo.ui.visualEditor.interactor.height(didgeridoo.ui.visualEditor.iframe[0].contentDocument.body.scrollHeight);
	        didgeridoo.ui.visualEditor.interactor.width(didgeridoo.ui.visualEditor.iframe[0].contentDocument.body.scrollWidth);
	        $interactor.height(didgeridoo.ui.visualEditor.iframe[0].contentDocument.body.scrollHeight);
	        $interactor.width(didgeridoo.ui.visualEditor.iframe[0].contentDocument.body.scrollWidth);
	        
		} else {
			selectedElement = null;
		}
		
        didgeridoo.ui.visualEditor.selectedObject = result;
        
        console.log('Selected element: ', result);
        
        return result;
    };
    
    
    didgeridoo.ui.visualEditor.iframe.wrapTextBlobs = function() {
        body = didgeridoo.ui.visualEditor.iframe[0].contentDocument.body;
    $iframe.wrapTextBlobs = function() {
        body = $iframe[0].contentDocument.body;

        $(body).contents().filter(function() {
            return this.nodeType == 3 && this.length > 1; //3 is the type of a TextNode
        }).wrap('<span></span>').end();
    };

    didgeridoo.ui.visualEditor.interactor.droppable({
    $interactor.droppable({
        accept: '.didgeridoo-tools-tool',
        drop: function( event, ui ) {
            var body = didgeridoo.ui.visualEditor.iframe[0].contentDocument.body,
            var body = $iframe[0].contentDocument.body,
                path = didgeridoo.toolsPath + $(ui.draggable).data('toolPath'),
                containerEl = didgeridoo.ui.visualEditor.selectObjectFromPoint(event);
                containerEl = selectObjectFromPoint(event);

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
    $interactor.click(function(e) {
        selectObjectFromPoint(e);
    });

    didgeridoo.ui.visualEditor.interactor.mousemove(function(e) {
        if(didgeridoo.ui.visualEditor.isDragging == true) {
            didgeridoo.ui.visualEditor.selectObjectFromPoint(e);
    $interactor.mousemove(function(e) {
        if(isDragging == true) {
            selectObjectFromPoint(e);
        }
    });

    didgeridoo.ui.visualEditor.interactorContainer.scroll(function(e) {
        didgeridoo.ui.visualEditor.iframe[0].contentWindow.scroll(this.scrollLeft, this.scrollTop);
    $interactorContainer.scroll(function(e) {
        $iframe[0].contentWindow.scroll(this.scrollLeft, this.scrollTop);
    });

    didgeridoo.ui.visualEditor.iframe.load(function() {
        didgeridoo.ui.visualEditor.iframe.wrapTextBlobs();
    $iframe.load(function() {
        $iframe.wrapTextBlobs();
        //didgeridoo.ui.visualEditor.interactor.height($(didgeridoo.ui.visualEditor.iframe[0].contentDocument.body).outerHeight());
        //didgeridoo.ui.visualEditor.iframe[0].contentDocument.getElementsByTagName('html')[0].height = didgeridoo.ui.visualEditor.iframe[0].contentWindow.outerHeight;
        didgeridoo.ui.visualEditor.interactor.height(didgeridoo.ui.visualEditor.iframe[0].contentDocument.body.scrollHeight);
        didgeridoo.ui.visualEditor.interactor.width(didgeridoo.ui.visualEditor.iframe[0].contentDocument.body.scrollWidth);
        $interactor.height($iframe[0].contentDocument.body.scrollHeight);
        $interactor.width($iframe[0].contentDocument.body.scrollWidth);
        //$('#didgeridoo-visual-editor-interactorContainer').css('display', 'none');
        makeWireframe();
    });
	
})();