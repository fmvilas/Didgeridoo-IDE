(function() {
    var stop = false;
    
    $('#didgeridoo-tools .didgeridoo-panel-window-header').click(function() {
    	if($('#didgeridoo-tools').hasClass('didgeridoo-panel-window-collapsed')) {
	    	$('#didgeridoo-tools').removeClass('didgeridoo-panel-window-collapsed');
	    } else {
	    	$('#didgeridoo-tools').addClass('didgeridoo-panel-window-collapsed');
	    }
    });
    
    $( "#didgeridoo-tools h3" ).click(function( event ) {
        if ( stop ) {
            event.stopImmediatePropagation();
            event.preventDefault();
            stop = false;
        }
    });
    $( "#didgeridoo-tools .didgeridoo-panel-window-content" )
    .accordion({
        header: "> div > h3",
        autoHeight: false,
        collapsible: true
    })
    .sortable({
        axis: "y",
        handle: "h3",
        stop: function() {
            stop = true;
        }
    });

    $("#didgeridoo-tools li").draggable({
        appendTo: 'body',
        zIndex: 999999999,
        cursorAt: {left: -20, top: -30},
        helper: function() {
            return $( "<div class='ui-widget-header'>I'm a custom helper</div>" );
        },
        start: function() {
            didgeridoo.ui.visualEditor.isDragging = true;
        },
        stop: function() {
            didgeridoo.ui.visualEditor.isDragging = false;
        }
    });

    
    //Close button behavior for the Tools panel window
    $('.didgeridoo-panel-window-close', '#didgeridoo-tools').live('click', function(e) {
        $window = $(this).parents('.didgeridoo-panel-window');

        if($window) {
            $window.fadeOut(200);
            window.locationbar = false;
        }

        return false;
    });
	
})();