
define(['require'], function(require) {

	didgeridoo.Action.register('FileOpen', function(path) {
		var moduleToLoad = ['modules/ui/document/PlainTextDocument'];

		if( path.match(/(\.html)|(\.htm)$/g) ) {
			moduleToLoad = ['modules/ui/document/HTMLDocument'];
		} else if( path.match(/\.php$/g) ) {
			moduleToLoad = ['modules/ui/document/PHPDocument'];
		}

		require(moduleToLoad, function(Document) {
			new Document().load('/p/' + didgeridoo.currentProject + '/f' + path);
		});
	});

});
