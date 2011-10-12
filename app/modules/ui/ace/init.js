var editor = ace.edit("didgeridoo-code-editor-ace");
editor.setTheme("ace/theme/vibrant_ink");

var JavaScriptMode = require("ace/mode/javascript").Mode;
editor.getSession().setUseWorker(false);
editor.getSession().setMode(new JavaScriptMode());