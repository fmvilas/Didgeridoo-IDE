//This makes the layout panels
didgeridoo.ui.layout = $('body').layout({
    closable:                       true	// pane can open & close
    ,
    resizable:			true	// when open, pane can be resized
    ,
    slidable:			true	// when closed, pane can 'slide' open over other panes - closes on mouse-out
    ,
    spacing_open:                   3      // spacing between panels, when open
    ,
    spacing_closed:                 3      // spacing between panels, when closed
    ,
    sliderTip:				''
    ,
    togglerTip_closed:		'Pin panel'
    ,
    north__slidable:		false	// north panel cannot be slidable
    ,
    north__resizable:               false   // north panel (for the menu) is fixed size
    ,
    north__closable:                false   // north panel cannot be closed
    ,
    north__spacing_open:            0       // there's no space between north panel and the rest of the panels
    ,
    north__size:                    35      // north panel height (px)
    ,
    south__size:                    200     // south panel initial height (px)
    ,
    south__minSize:			10      // south panel minimal height (px)
    ,
    south__spacing_closed:	17
    ,
    west__minSize:			200     // west panel minimal width (px)
    ,
    west__spacing_closed:	16
    ,
    east__minSize:			200     // east panel minimal width (px)
    ,
    east__maxSize:			Math.floor(screen.availWidth / 2 - 50) // east panel maximum width is 1/2 screen width - 50px
    ,
    east__spacing_closed:	16
    ,
    west__maxSize:			Math.floor(screen.availWidth / 2 - 50) // west panel maximum width is 1/2 screen width - 50px
    ,
    south__maxSize:			Math.floor(screen.availHeight / 2) // south panel maximum height is 1/2 screen height
    ,
    //
    //Events
    //
    onclose_start: function(paneName, thePane) {
    	var $thePane = $(thePane),
    		$toolbar = $('#' + $thePane.attr('id') + '-toolbar');
    	
    	$toolbar.css('display', 'none');
    },
    onopen_end: function(paneName, thePane, state) {
    	if(!state.isSliding) {
        	var $thePane = $(thePane),
        		$toolbar = $('#' + $thePane.attr('id') + '-toolbar');
        
	        placeToolbar(paneName, thePane);
	        $toolbar.css('display', 'block');
	    }
    },
    onresize: function(paneName, thePane) {
    	placeToolbar(paneName, thePane);
    	$(window).trigger('resize');
    }
});


var placeToolbar = function(paneName, thePane) {
	var $thePane = $(thePane);
	
	switch (paneName) {
		case 'west':
			$('#ui-layout-west-toolbar').css('left', $thePane.position().left + $thePane.width() + 3);
		break;
		case 'east':
			var $toolbar = $('#ui-layout-east-toolbar');
			$toolbar.css('left', $thePane.position().left - $toolbar.width() - 10);
		break;
	}
};


$('#ui-layout-west').hover(function() {
	if(!didgeridoo.ui.layout.state.west.isSliding) {
		var $pane = $(this),
			$toolbar = $('#ui-layout-west-toolbar');
			
		$toolbar.stop().css({
			'left': $pane.position().left + $pane.width() + 3,
			'display': 'block'
		});
	}
	
}, function() {
	if(!didgeridoo.ui.layout.state.west.isSliding) {
		var $toolbar = $('#ui-layout-west-toolbar');
		
		$toolbar.animate({display:'block'}, 1500, function() {
			$toolbar.css('display', 'none');
		});
	}
});


$('#ui-layout-west-toolbar').hover(function() {
	var $toolbar = $(this);
	
	$toolbar.stop().css('display', 'block');	
}, function() {
	var $toolbar = $(this);
	
	$toolbar.animate({display:'block'}, 1500, function() {
		$toolbar.css('display', 'none');
	});
});


$('#ui-layout-east').hover(function() {
	if(!didgeridoo.ui.layout.state.east.isSliding) {
		var $pane = $(this),
			$toolbar = $('#ui-layout-east-toolbar');
			
		$toolbar.stop().css({
			'left': $pane.position().left - $toolbar.width() - 10,
			'display': 'block'
		});
	}
	
}, function() {
	if(!didgeridoo.ui.layout.state.east.isSliding) {
		var $toolbar = $('#ui-layout-east-toolbar');
		
		$toolbar.animate({display:'block'}, 1500, function() {
			$toolbar.css('display', 'none');
		});
	}
});


$('#ui-layout-east-toolbar').hover(function() {
	var $toolbar = $(this);
	
	$toolbar.stop().css('display', 'block');
	
}, function() {
	var $toolbar = $(this);
	
	$toolbar.animate({display:'block'}, 1500, function() {
		$toolbar.css('display', 'none');
	});
});


//Add funcionality to Unpin buttons
$('.ui-layout-pane-toolbar-toggler').click(function() {
	var $me = $(this);
	
    panePosition = $('#' + $me.parent().data('panel')).attr('pane');
    
    if(panePosition && panePosition.length) {
        if($me.hasClass('ui-layout-pane-toolbar-toggler-pin')) {
            didgeridoo.ui.layout.open(panePosition);
        } else {
            didgeridoo.ui.layout.close(panePosition);
        }
        
    }
});

//Add funcionality to Close buttons
//NOTE: it works for all Close buttons!!! note, the class selector
//      (.ui-layout-pane-toolbar-close) instead of id selector
//      (#ui-layout-pane-toolbar-close), which doesn't exist
$('.ui-layout-pane-toolbar-close').click(function() {
    var $me = $(this);
    
    panePosition = $('#' + $me.parent().data('panel')).attr('pane');

    if(panePosition && panePosition.length) {
        didgeridoo.ui.layout.hide(panePosition);
    }
});
