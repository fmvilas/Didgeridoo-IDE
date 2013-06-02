
define(['require'], function(require) {

	didgeridoo.Action.register('FileNew', function() {
		require(['modules/ui/document/BlankDocument'], function(BlankDocument) {
			new BlankDocument().load();
		});
	});

});