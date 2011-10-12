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
    slideTrigger_open:        'mouseover'   // slide de panels on mouseover, instead of click by default
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
    west__minSize:			200     // west panel minimal width (px)
    ,
    east__minSize:			200     // east panel minimal width (px)
    ,
    east__maxSize:			Math.floor(screen.availWidth / 2 - 50) // east panel maximum width is 1/2 screen width - 50px
    ,
    west__maxSize:			Math.floor(screen.availWidth / 2 - 50) // west panel maximum width is 1/2 screen width - 50px
    ,
    south__maxSize:			Math.floor(screen.availHeight / 2) // south panel maximum height is 1/2 screen height
    ,
    //
    //Events
    //
    onclose: function(paneName, thePane) {
        var $btn = $('.ui-layout-pane-toolbar-toggler', thePane);
        $btn.addClass('ui-layout-pane-toolbar-toggler-pin');
        $btn.attr('title', 'Pin panel');
    },
    onopen: function(paneName, thePane, state) {
        if(!state.isSliding) {
            var $btn = $('.ui-layout-pane-toolbar-toggler', thePane);
            $btn.removeClass('ui-layout-pane-toolbar-toggler-pin');
            $btn.attr('title', 'Unpin panel');
        }
    },
    onresize: function(paneName, thePane) {
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
    }
});


$('#ui-layout-west').hover(function() {
	var $pane = $(this),
		$toolbar = $('#ui-layout-west-toolbar');
		
	$toolbar.css('left', $pane.position().left + $pane.width() + 3);
	$toolbar.stop().fadeIn();
	
}, function() {
	var $toolbar = $('#ui-layout-west-toolbar');
	
	$toolbar.animate({display:'block'}, 1500, function() {
		$toolbar.fadeOut();
	});
});


$('#ui-layout-west-toolbar').hover(function() {
	var $toolbar = $(this);
	
	$toolbar.stop();
	
}, function() {
	var $toolbar = $(this);
	
	$toolbar.animate({display:'block'}, 1500, function() {
		$toolbar.fadeOut();
	});
});


$('#ui-layout-east').hover(function() {
	var $pane = $(this),
		$toolbar = $('#ui-layout-east-toolbar');
		
	$toolbar.css('left', $pane.position().left - $toolbar.width() - 10);
	$toolbar.stop().fadeIn();
	
}, function() {
	var $toolbar = $('#ui-layout-east-toolbar');
	
	$toolbar.animate({display:'block'}, 1500, function() {
		$toolbar.fadeOut();
	});
});


$('#ui-layout-east-toolbar').hover(function() {
	var $toolbar = $(this);
	
	$toolbar.stop();
	
}, function() {
	var $toolbar = $(this);
	
	$toolbar.animate({display:'block'}, 1500, function() {
		$toolbar.fadeOut();
	});
});


$('#ui-layout-south').hover(function() {
	var $pane = $(this),
		$toolbar = $('#ui-layout-south-toolbar');
		
	$toolbar.css('top', $pane.position().top - $toolbar.height() - 21);
	$toolbar.stop().fadeIn();
	
}, function() {
	var $toolbar = $('#ui-layout-south-toolbar');
	
	$toolbar.animate({display:'block'}, 1500, function() {
		$toolbar.fadeOut();
	});
});


$('#ui-layout-south-toolbar').hover(function() {
	var $toolbar = $(this);
	
	$toolbar.stop();
	
}, function() {
	var $toolbar = $(this);
	
	$toolbar.animate({display:'block'}, 1500, function() {
		$toolbar.fadeOut();
	});
});


//Add funcionality to Pin/Unpin buttons
//NOTE: it works for all Pin/Unpin buttons!!! note, the class selector
//      (.ui-layout-pane-toolbar-toggler) instead of id selector
//      (#ui-layout-pane-toolbar-toggler), which doesn't exist
$('.ui-layout-pane-toolbar-toggler').click(function() {
    panePosition = $(this).parents('.ui-layout-pane').attr('pane');

    if(panePosition && panePosition.length) {
        if($(this).hasClass('ui-layout-pane-toolbar-toggler-pin')) {
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
    panePosition = $(this).parents('.ui-layout-pane').attr('pane');

    if(panePosition && panePosition.length) {
        didgeridoo.ui.layout.hide(panePosition);
    }
});

//Creates the south panel tabs
$('#didgeridoo-layout-south-tabs').tabs();
//Makes the tabs sortable
$('#didgeridoo-layout-south-tabs > ul').sortable({ axis: "x" });
