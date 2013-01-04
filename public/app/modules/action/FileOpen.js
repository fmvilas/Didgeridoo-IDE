"use strict";
define(['require'], function(require) {

	didgeridoo.Action.register('FileOpen', function(path) {
		var moduleToLoad = ['modules/ui/document/PlainTextDocument'];

		if( path.match(/\.html$/g) ) {
			moduleToLoad = ['modules/ui/document/HTMLDocument'];
		}

		require(moduleToLoad, function(Document) {
			new Document().load('/project/' + didgeridoo.currentProject + '/files' + path);
		});
	});

});