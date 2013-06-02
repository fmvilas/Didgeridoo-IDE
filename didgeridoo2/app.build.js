({
    baseUrl: './public/app',
    dir: './build/public/app',
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
        'libraries/codemirror/codemirror': {
            deps: ['codemirror_script']
        },
        'dynatree': {
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
    },
    skipModuleInsertion: false,
    findNestedDependencies: false,
    //optimizeCss: 'none',
    optimize: 'none',
    //optimize: 'uglify',
    optimizeCss: 'standard',
    modules: [
    {
        name: 'didgeridoo'
    }
    ]
})