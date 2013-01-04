"use strict";
define(['require', 'modules/ui/dialog/Dialog'], function(require, Dialog) {

	didgeridoo.Action.register('FileSaveAsDialog', function() {
		_render();
	});

	var _render = function() {
		require(['text!./FileSaveAs.html'], function(html) {
			//current document
			var $selectedTab = $('.ui-state-active a', didgeridoo.layout.getCenterPanel()),
				doc = didgeridoo.documents[$selectedTab[0].hash.substring(1)];

			if( $selectedTab.length > 0 ) {
				var modal = new Dialog('FileSaveAsDialog', html),
					$btnSave = $('.btn-primary', '#' + modal.id),
					$txtFileName = $('input[name=name]', '#' + modal.id);

				$txtFileName.val( doc.getURL() );

				$btnSave.click(function() {
					if( $txtFileName.val().trim() === '' ) {
						/* TODO: Better error message */
						alert('mal! caca!');
					} else {
						didgeridoo.Action.do('FileSave', {
							path: $txtFileName.val(),
							content: doc.getCodeView().getEditor().getValue()
						});
					}
				});
			} else {
				/* TODO: Better error message */
				console.log('error');
			}
		});
	};

});