require.config({
    baseUrl: '/app',
    paths: {
        //RequireJS plugins
        text: 'libraries/require/plugins/text',
        //Didgeridoo modules and libraries
        core: 'core/didgeridoo',
        actions: 'modules/action/actions',
        jquery: 'libraries/jquery/jquery.min',
        dynatree: 'libraries/dynatree/jquery.dynatree-1.2.2',
        bootstrap: 'libraries/bootstrap/bootstrap',
        jqueryTmpl: 'libraries/jquerytemplates/jquery.tmpl.min',
        autoGrowInput: 'libraries/autoGrowInput/autoGrowInput',
        moment: 'libraries/moment/moment.min',
        codemirror_script: 'libraries/codemirror/lib/codemirror'
    },
    shim: {
        'core': {
            deps: ['jquery', 'jqueryTmpl', 'bootstrap']
        },
        'actions': {
            deps: ['core']
        },
        'jstree': {
            deps: ['jquery']
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'jqueryui': {
            deps: ['jquery']
        },
        'jqueryTmpl': {
            deps: ['jquery']
        },
        'autoGrowInput': {
            deps: ['jquery']
        }
    }
});

define([
    'core',
    'actions',
    'codemirror_script'
], function(core) {
    
    didgeridoo.currentProject = 'test';
    
    // Load dialog modules

    require(['modules/ui/dialog/dialogs']);

    // Constructs the Didgeridoo User Interface.
    require(['modules/ui/layout/layout'], function(layout) {
        
        require(['modules/ui/main-menu/main'], function(MainMenu) {
            new MainMenu().renderTo( layout.getNorthPanel() );
        });
        /*didgeridoo.modules.load('ui/dom-inspector', function(DOMInspector) {
			var di = new DOMInspector();
			
			di.renderTo('.ui-layout-east > .container');
		});*/
        
            
        layout.getSideBar().addPanel('modules/ui/project-explorer/main');
        layout.getSideBar().addPanel('modules/ui/tools/main');
        
        require(['modules/ui/document/HTMLDocument'], function(HTMLDocument) {
            var doc1 = new HTMLDocument();
			
            doc1.load('/templates/test/index.html', 'text/html');	
        });
    });
    
});