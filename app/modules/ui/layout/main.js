(function($) {
	
	var $northPanel = $('#ui-layout-north'),
		$westPanel = $('#ui-layout-west'),
		$eastPanel = $('#ui-layout-east'),
		$centerPanel = $('#ui-layout-center');
	
	d.observer.subscribe('layout-west.resize', function(topics, ui) {
		$centerPanel.css('left', ui.size.width);
		$westPanel.css('height', 'auto');
	});
	
	d.observer.subscribe('layout-east.resize', function(topics, ui) {
		$centerPanel.css('right', ui.size.width);
		$eastPanel.css('height', 'auto');
	});
		
	$westPanel.resizable({
		handles: 'e',
		minWidth: 200,
		stop: function(evt, ui) {
			d.observer.publish('layout-west.resize', ui);
		},
		resize: function(evt, ui) {
			d.observer.publish('layout-west.resize', ui);
		}
	});
	
	$eastPanel.resizable({
		handles: 'w',
		minWidth: 10,
		stop: function(evt, ui) {
			d.observer.publish('layout-east.resize', ui);
		},
		resize: function(evt, ui) {
			d.observer.publish('layout-east.resize', ui);
		}
	});
	
})(jQuery);