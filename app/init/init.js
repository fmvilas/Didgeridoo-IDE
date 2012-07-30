(function() {

	require.config({
	    baseUrl: 'app',
	    paths: {
	    	//RequireJS plugins
	    	text: 'libraries/require/plugins/text',
	    	//"order": 'libraries/require/plugins/order',
	    	//Didgeridoo modules and libraries
	    	didgeridoo: 'core/didgeridoo',
	        jquery: 'libraries/jquery/jquery.min',
	        jqueryTmpl: 'libraries/jquerytemplates/jquery.tmpl.min',
	        autoGrowInput: 'libraries/autoGrowInput/autoGrowInput'
	    },
	    shim: {
		    'didgeridoo': {
			    deps: ['jquery', 'jqueryTmpl']
		    },
		    'jqueryTmpl': {
			    deps: ['jquery']
		    },
		    'autoGrowInput': {
		    	deps: ['jquery']
		    }
	    }
	});
	
	require([
	'autoGrowInput',
	'didgeridoo'
	], function() {
		$.getJSON(didgeridoo.APP_DIR + didgeridoo.FILE_SEPARATOR + didgeridoo.LIBRARIES_LIST_PATH, function(libs) {
			
			didgeridoo.libraries.list = libs.libraries;
			
			didgeridoo.libraries.load('jqueryui', function() {
				_buildUI();
			});
		});			
	});
	
	
	
	
	/* _buildUI
	 *
	 * Constructs the Didgeridoo User Interface.
	 */
	var _buildUI = function() {
		didgeridoo.modules.load('ui/layout', function() {
			didgeridoo.modules.load('ui/main-menu');
			/*didgeridoo.modules.load('ui/dom-inspector', function(DOMInspector) {
				var di = new DOMInspector();
				
				di.render();
			});*/
			didgeridoo.modules.load('ui/document', function(Document) {
				var doc1 = new Document();
				
				doc1.load('app/templates/test/index.html');
				
				//var doc2 = Document();
				
				//doc2.load('app/templates/default/blank.html');
				
				
			});
			/*didgeridoo.modules.load('ui/designer', function(Designer) {
				var designer = new Designer();
				//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				//This a a temporary solution for testing
				designer.renderTo('.ui-layout-center #welcome', function() {
					designer.loadURL('app/templates/test/index.html');
				});
				
				var designer2 = new Designer();
				//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				//This a a temporary solution for testing
				designer2.renderTo('.ui-layout-center #welcome2', function() {
					designer2.loadURL('app/templates/default/blank.html');
				});
				
				
				didgeridoo.modules.load('ui/tools');
			});*/
		});
	};
	/*var _buildUI = function() {
		didgeridoo.modules.load('ui/layout', 'body', function() {
			didgeridoo.modules.load('ui/main-menu', '#ui-layout-north');
			didgeridoo.modules.load('ui/properties', '#ui-layout-east > .container');
			//d.modules.load('ui/project-explorer', '#ui-layout-west .container');
			didgeridoo.modules.load('ui/designer', '#ui-layout-center #welcome', function() {
				didgeridoo.modules.load('ui/tools', '#ui-layout-west > .container');
			});
		});
	};*/
	
})();