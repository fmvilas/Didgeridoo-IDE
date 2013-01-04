"use strict";
define(['require'], function(require) {

	didgeridoo.Action.register('FileSave', function(args) {
		$.ajax({
			url: '/project/' + didgeridoo.currentProject + '/files' + args.path,
			type: 'PUT',
			data: args.content,
			success: function(data) {
				console.log(data);
			},
			error: function(jqXHR, textStatus) {
				console.log(jqXHR.responseText);
			}
		});
	});

});