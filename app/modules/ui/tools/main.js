"use strict";
define(function() {
	
	
	
	
	var moduleName = 'didgeridoo-tools';
	
	var tokens = didgeridoo.observer.subscribe(moduleName + '.loaded', function(topic, module) {
		didgeridoo.observer.unsubscribe(tokens[0]);
		_init(module);
	});
	
	var _init = function(module) {
		var	config = module.originalConfig, 
			files = config.files;	
		
		$.ajax({
			url: config.url + files.html.main,
			success: function(data) {
				$(config.renderTo).append(data);
				_render(config);
			},
			error: function(jqXHR, status, errorThrown) {
				didgeridoo.logger.warn('Oops! Didgeridoo couldn\'t load the "' + config.id + '" module.\n'+
										'Error details:\n  Status Text: ' + status + '\n  Error Thrown: ' + errorThrown);
			}
		});
		
		$('head').append('<link rel="stylesheet" href="' + config.url + files.css.main  + '">');
		
	};
	
	
	
	var _render = function(config) {
		
		var d = didgeridoo,
			stop = false,
	    	$toolPanel = $('#didgeridoo-tools'),
	    	listMarkup = '<li class="didgeridoo-tools-tool"><a>${name}</a></li>',
	    	groupMarkup = '<div id="didgeridoo-tools-group-${id}"><h3 class="didgeridoo-tools-group-header"><a class="didgeridoo-tools-group-header"><div class="icon" style="background-image:url(' + config.url + '${icon});"></div><div class="text" style="background-color:${color};">${name}</div></a></h3><div class="light-scrollbar"><ul class="didgeridoo-tools-list"></ul></div></div>';
	    
	    $('#didgeridoo-tools .didgeridoo-panel-window-header').click(function() {
	    	if($toolPanel.hasClass('didgeridoo-panel-window-collapsed')) {
		    	$toolPanel.removeClass('didgeridoo-panel-window-collapsed');
		    } else {
		    	$toolPanel.addClass('didgeridoo-panel-window-collapsed');
		    }
	    });
	    
	    $( "#didgeridoo-tools h3" ).click(function( event ) {
	        if ( stop ) {
	            event.stopImmediatePropagation();
	            event.preventDefault();
	            stop = false;
	        }
	    });
	    //Close button behavior for the Tools panel window
	    $('.didgeridoo-panel-window-close', $toolPanel).live('click', function(e) {
	        $window = $(this).parents('.didgeridoo-panel-window');
	
	        if($window) {
	            $window.fadeOut(200);
	        }
	
	        return false;
	    });
	    
	    
	    
	    
	    
	    var renderGroup = function(data) {
		    var groupTemplate = $.template(null, groupMarkup),
		    	tools = $('.didgeridoo-panel-window-content', $toolPanel),
		    	listTemplate = $.template(null, listMarkup);
		    
		    $.tmpl(groupTemplate, data).appendTo(tools);
		    
		    
		    var g = $('.didgeridoo-tools-list', '#didgeridoo-tools-group-' + data.id);
		    $.tmpl(listTemplate, data.tools).appendTo(g).click(function() {
			    var html = $(this).data().tmplItem.data.html;
			    
			    didgeridoo.observer.publish( moduleName + '.tool.select', html );
		    });
	    };
	    
	    
	    
	    var loadToolsFile = function(file) {
		    $.ajax({
		    	url: file,
			    dataType: 'json',
			    success: function(data) {
				    if(data && data.groups) {
					    for(var i = 0; i < data.groups.length; i++ ) {
						    renderGroup(data.groups[i]);
					    }
					    
					    $( ".didgeridoo-panel-window-content", $toolPanel )
					    .accordion({
					        header: "> div > h3",
					        autoHeight: false,
					        collapsible: true,
					        change: function(ev, ui) {
						        ui.newContent.css('overflow', 'auto');
					        }
					    })
					    .sortable({
					        axis: "y",
					        handle: "h3",
					        stop: function() {
					            stop = true;
					        }
					    });
				    }
			    },
			    error: function(xhr, textstatus) {
				    console.dir(xhr);
			    }
		    });
	    };
	    
	    
	    loadToolsFile(config.url + 'default.tools.json');
	    
	    /*if(didgeridoo.modules.get('ui/designer')) {    		
	    	loadToolsFile(pathToModule + 'default.tools.json');
		} else {
			didgeridoo.modules.load('ui/designer', '#ui-layout-center', function() {
				loadToolsFile(pathToModule + 'default.tools.json');
			});
		}*/
		
		didgeridoo.observer.publish(moduleName + '.ready');
		didgeridoo.observer.publish(moduleName + '.rendered');
	};
	
	
	
	return {};


}); //end of define