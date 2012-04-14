(function() {
    var stop = false;
    
    $('#didgeridoo-tools .didgeridoo-panel-window-header').click(function() {
    	if($('#didgeridoo-properties').hasClass('didgeridoo-panel-window-collapsed')) {
	    	$('#didgeridoo-properties').removeClass('didgeridoo-panel-window-collapsed');
	    } else {
	    	$('#didgeridoo-properties').addClass('didgeridoo-panel-window-collapsed');
	    }
    });
    
    $( "#didgeridoo-properties h3" ).click(function( event ) {
        if ( stop ) {
            event.stopImmediatePropagation();
            event.preventDefault();
            stop = false;
        }
    });
    
    //Close button behavior for the Tools panel window
    $('.didgeridoo-panel-window-close', '#didgeridoo-properties').live('click', function(e) {
        $window = $(this).parents('.didgeridoo-panel-window');

        if($window) {
            $window.fadeOut(200);
            window.locationbar = false;
        }

        return false;
    });

})();