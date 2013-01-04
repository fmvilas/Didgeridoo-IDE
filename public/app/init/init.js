(function() {

    require.config({
        baseUrl: 'app',
        paths: {
            //RequireJS plugins
            text: 'libraries/require/plugins/text',
            //"order": 'libraries/require/plugins/order',
            //Didgeridoo modules and libraries
            core: 'core/didgeridoo',
            jquery: 'libraries/jquery/jquery.min',
            jqueryTmpl: 'libraries/jquerytemplates/jquery.tmpl.min',
            autoGrowInput: 'libraries/autoGrowInput/autoGrowInput',
            moment: 'libraries/moment/moment.min'/*,
            prueba: 'components/ui/base/menu/BaseMenu'*/
        },
        shim: {
            'core': {
                deps: ['jquery', 'jqueryTmpl']
            },
            'jqueryTmpl': {
                deps: ['jquery']
            },
            'autoGrowInput': {
                deps: ['jquery']
            }/*,
            'prueba': {
                deps: ['didgeridoo']
            }*/
        }
    });
	
    require([
        /*'prueba',*/
        'moment',
        'autoGrowInput',
        'core'
        ], function() {
            $.getJSON(didgeridoo.APP_DIR + didgeridoo.FILE_SEPARATOR + didgeridoo.LIBRARIES_LIST_PATH, function(libs) {
			
                didgeridoo.libraries.list = libs.libraries;
			
                didgeridoo.libraries.load(['jqueryui', 'extjs'], function() {
                    _buildUI();
                });
            });			
        });
	
	
	
	
    /* _buildUI
    *
    * Constructs the Didgeridoo User Interface.
    */
    var _buildUI = function() {
        didgeridoo.modules.load('ui/layout', 'body', function(layout) {
            didgeridoo.modules.load('ui/main-menu', layout.getNorthPanel());
            /*didgeridoo.modules.load('ui/dom-inspector', function(DOMInspector) {
				var di = new DOMInspector();
				
				di.renderTo('.ui-layout-east > .container');
			});*/
            
                
            layout.getSideBar().addPanel('ui/project-explorer');
            
            didgeridoo.modules.load('ui/document', function(Document) {
                var doc1 = new Document();
				
                doc1.load('app/templates/test/index.html');	
            });
        });
    }
	
})();