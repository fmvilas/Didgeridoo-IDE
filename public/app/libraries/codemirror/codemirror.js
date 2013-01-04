define([
	'require',
	'libraries/codemirror/mode/clike/clike',
	'libraries/codemirror/mode/xml/xml',
	'libraries/codemirror/mode/css/css',
	'libraries/codemirror/mode/javascript/javascript',
	'libraries/codemirror/mode/htmlmixed/htmlmixed'
	], function(require) {

	var cssFile = require.toUrl('./lib/codemirror.css');
	didgeridoo.utils.loadCSS(cssFile);

	var themeFile = require.toUrl('./theme/didgeridoo.css');
	didgeridoo.utils.loadCSS(themeFile);
	
}); //end of define