"use strict";
define(function() {
	
	
	
	
    var moduleName = 'didgeridoo-tools',
    config,
    files,
    isRendered = false;
	
    var tokens = didgeridoo.observer.subscribe(moduleName + '.loaded', function(topic, module) {
        didgeridoo.observer.unsubscribe(tokens[0]);
        _init(module);
    });
	
    var _init = function(module) {
        config = module.originalConfig;
        files = config.files;
        
        $.ajax({
            url: config.url + files.html.main,
            success: function(data) {
                if(typeof config.renderTo !== 'undefined') {
                    $(config.renderTo).append(data);
                    _render(config);
                }
                
                didgeridoo.observer.publish(moduleName + '.ready');
            },
            error: function(jqXHR, status, errorThrown) {
                didgeridoo.logger.warn('Oops! Didgeridoo couldn\'t load the "' + config.id + '" module.\n'+
                    'Error details:\n  Status Text: ' + status + '\n  Error Thrown: ' + errorThrown);
            }
        });
		
        $('head').append('<link rel="stylesheet" href="' + config.url + files.css.main  + '">');
		
    };
	
	
	
    var _render = function(selector) {
	
        if(isRendered === true) return;
        
        var $panel = $(selector),
        listMarkup = '<li class="didgeridoo-tools-tool"><a>${name}</a></li>',
        groupMarkup = '<div id="didgeridoo-tools-group-${id}"><h3 class="didgeridoo-tools-group-header"><a class="didgeridoo-tools-group-header"><div class="icon" style="background-image:url(' + config.url + '${icon});"></div><div class="text" style="background-color:${color};">${name}</div></a></h3><div class="light-scrollbar"><ul class="didgeridoo-tools-list"></ul></div></div>';
	    
        var renderGroup = function(data) {
            var groupTemplate = $.template(null, groupMarkup),
            listTemplate = $.template(null, listMarkup);
		    
            $.tmpl(groupTemplate, data).appendTo($panel);
		    
		    
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
                        
                        $panel.accordion({
                            header: "> div > h3",
                            autoHeight: false,
                            collapsible: true,
                            change: function(ev, ui) {
                                ui.newContent.css('overflow', 'auto');
                            }
                        })
                        .sortable({
                            axis: "y",
                            handle: "h3"
                        });
                        
                        isRendered = true;
                        didgeridoo.observer.publish(moduleName + '.rendered');
                    }
                },
                error: function(xhr, textstatus) {
                    console.dir(xhr);
                }
            });
        };
	    
	    
        loadToolsFile(config.url + 'default.tools.json');
    };
	
    
    didgeridoo.observer.subscribe('layout.sidebar.panel.selected', function(topic, info) {
        if(info.name === moduleName) {
            _render(info.el);
        }
    });
    
    return {
        renderTo: _render
    };


}); //end of define