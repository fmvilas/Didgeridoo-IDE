didgeridoo.ui.codeEditor = ace.edit("didgeridoo-code-editor-ace");
didgeridoo.ui.codeEditor.setTheme("ace/theme/vibrant_ink");

var JavaScriptMode = require("ace/mode/javascript").Mode;
didgeridoo.ui.codeEditor.getSession().setUseWorker(false);
didgeridoo.ui.codeEditor.getSession().setMode(new JavaScriptMode());
$(window).resize(function() {
	didgeridoo.ui.codeEditor.resize();
});