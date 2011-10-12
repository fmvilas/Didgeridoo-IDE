require.config({
    baseUrl: 'app',
    paths: {
    	//RequireJS plugins
    	text: 'libraries/require/plugins/text',
    	"order": 'libraries/require/plugins/order',
    	//Didgeridoo modules and libraries
    	didgeridoo: 'core/didgeridoo',
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min',
        jwerty: 'libraries/jwerty/jwerty',
        layout: 'libraries/layout/jquery.layout.min-1.2.0',
        sugar: 'libraries/sugar/sugar'
    },
    priority: ['jquery']
});

require([
'layout',
'jwerty',
'didgeridoo'
], function() {
	didgeridoo.start();
});