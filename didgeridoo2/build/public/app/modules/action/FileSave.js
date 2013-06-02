
define(['require'], function(require) {

	didgeridoo.Action.register('FileSave', function(args) {
		$.ajax({
			url: '/p/' + didgeridoo.currentProject + '/f' + args.path,
			type: 'POST',
			data: {
				body: args.content,
				authenticity_token: didgeridoo.authenticityToken
			},
			success: function(data) {
				console.log(data);
			},
			error: function(jqXHR, textStatus) {
				console.log(jqXHR.responseText);
			}
		});
	});

});