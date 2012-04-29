(function() {

	require.config({
	    baseUrl: 'app',
	    paths: {
	    	//RequireJS plugins
	    	text: 'libraries/require/plugins/text',
	    	"order": 'libraries/require/plugins/order',
	    	//Didgeridoo modules and libraries
	    	didgeridoo: 'core/didgeridoo',
	        jquery: 'libraries/jquery/jquery.min'
	    },
	    priority: ['jquery']
	});
	
	require([
	'didgeridoo'
	], function() {
		d.libraries.load('jqueryui');
		_buildUI();
	});
	
	
	
	
	/* _buildUI
	 *
	 * Constructs the Didgeridoo User Interface.
	 */
	var _buildUI = function() {
		d.modules.load('ui/layout', 'body', function() {
			d.modules.load('ui/main-menu', '#ui-layout-north');
			d.modules.load('ui/properties', '#ui-layout-east .container');
			d.modules.load('ui/kendoui', 'body', function() {
				d.modules.load('ui/tools', '#ui-layout-west > .container', function() {
					d.modules.load('ui/project-explorer', '#ui-layout-west .container');
				});
			});
			d.modules.load('ui/visual-editor', '#ui-layout-center');
		});
		
		$(window).bind('resize', function(evt) {
			d.observer.publish('window.resize', evt);
		});
	};
	
})();