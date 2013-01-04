({
    baseUrl: './src/app',
    dir: './build/app',
    paths: {
        'requireLib': 'libraries/require/require',
        'text': 'libraries/require/plugins/text',
        'core': 'core/didgeridoo',
        'jquery': 'libraries/jquery/jquery.min',
        'jqueryui': 'libraries/jqueryui/jquery-ui.min',
        'extjs': 'libraries/extjs/ext-all',
        'jqueryTmpl': 'libraries/jquerytemplates/jquery.tmpl.min',
        'autoGrowInput': 'libraries/autoGrowInput/autoGrowInput',
        'moment': 'libraries/moment/moment.min'
    },
    shim: {
        'didgeridoo': {
            deps: ['requireLib', 'extjs']
        },
        'core': {
            deps: ['jquery', 'jqueryTmpl']
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
    //findNestedDependencies: true,
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