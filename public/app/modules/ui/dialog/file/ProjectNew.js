"use strict";
define(['require', 'modules/ui/dialog/Dialog'], function(require, Dialog) {

	didgeridoo.Action.register('ProjectNewDialog', function() {
		_render();
	});

	var _render = function() {
		require(['text!./ProjectNew.html'], function(html) {
			var modal = new Dialog('ProjectNewDialog', html),
				$btnCreate = $('.btn-primary', '#' + modal.id),
				$txtProjectName = $('input[name=name]', '#' + modal.id);


				$btnCreate.click(function() {
					if( $txtProjectName.val().trim() === '' ) {
						alert('mal! caca!');
					} else {
						$.ajax({
							url: '/project',
							type: 'POST',
							data: {
								name: $txtProjectName.val()
							},
							success: function(data) {
								console.log(data);
							},
							error: function(jqXHR, textStatus) {
								console.log(jqXHR.status, textStatus);
							}
						});
					}
				});
		});
	};

});