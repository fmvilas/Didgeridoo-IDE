"use strict";
define(function() {
	
    var moduleName = 'didgeridoo-layout',
    $northPanel,
    $middleRow,
    $sidebar,
    $sidebarNav,
    $sidebarContainer,
    $centerPanel,
    $centerPanelTabs,
    sidebarIsResizing = false;
    
    var tokens = didgeridoo.observer.subscribe(moduleName + '.loaded', function(topic, module) {
        didgeridoo.observer.unsubscribe(tokens[0]);
        _init(module);
    });
	
    var _init = function(module) {
        var	config = module.originalConfig, 
        files = config.files;	
		
        $.ajax({
            url: config.url + files.html.layout,
            success: function(data) {
                $(config.renderTo).append(data);
                _render();
            },
            error: function(jqXHR, status, errorThrown) {
                didgeridoo.logger.warn('Oops! Didgeridoo couldn\'t load the "' + config.id + '" module.\n'+
                    'Error details:\n  Status Text: ' + status + '\n  Error Thrown: ' + errorThrown);
            }
        });
		
        $('head').append('<link rel="stylesheet" href="' + config.url + files.css.layout  + '">');
		
    };
	
    var _render = function() {
			
        $northPanel = $('.ui-layout-north');
        $middleRow = $('.ui-layout-middle-row');
        $sidebar = $('.ui-layout-sidebar');
        $sidebarNav = $('.ui-layout-sidebar-nav', $sidebar);
        $sidebarContainer = $('.container', $sidebar);
        $centerPanel = $('.ui-layout-center');
        $centerPanelTabs = $('.ui-layout-center-tab-list');
			
		
        $centerPanel.tabs({
            tabTemplate: '<li><a href="#{href}">#{label}</a> <span rel="#{href}" class="ui-icon ui-icon-close">Remove Tab</span></li>',
            show: function(ev, ui) {
                didgeridoo.observer.publish(moduleName + '.tab.show', ui.panel.id);
            }
        });
		
        $centerPanelTabs.on('click', '.ui-icon-close', function(ev) {
            var id = $(this).attr('rel').substr(1);
			
            didgeridoo.documents[id].close();
        }).sortable({
            axis: 'x',
            forceHelperSize: true
        });
		
		
        didgeridoo.observer.subscribe('layout-sidebar.resized', function(topics, ui) {
            layoutSidebarResize(ui);
        });
		
        didgeridoo.observer.subscribe('layout-sidebar.resizing', function(topics, ui) {
            layoutSidebarResize(ui);
        });
        
        didgeridoo.observer.subscribe('window.resize', function(topics, evt) {
            didgeridoo.observer.publish('layout.resized', evt);
        });
		
        var layoutSidebarResize = function(ui) {
            if(!$sidebar.hasClass('ui-layout-sidebar-opened')) {
                $centerPanel.css('left', $sidebar.outerWidth(true));
                $sidebar.css('height', 'auto');
            }
        };
			
        $sidebar.resizable({
            handles: 'e',
            minWidth: 200,
            stop: function(evt, ui) {
                $sidebar.data('width', $sidebar.css('width'));
                didgeridoo.observer.publish('layout-sidebar.resized', ui);
                didgeridoo.observer.publish('layout.resized', ui);
                sidebarIsResizing = false;
            },
            resize: function(evt, ui) {
                didgeridoo.observer.publish('layout-sidebar.resizing', ui);
                didgeridoo.observer.publish('layout.resizing', ui);
                sidebarIsResizing = true;
            }
        });
		
		
        /*
        ********************************************************
        * A little trick to debounce the Window's resize event *
        ********************************************************
        */
        var waitForFinalWindowResizeEvent = (function () {
            var timers = {};
            return function (callback, ms, uniqueId) {
                if (!uniqueId) {
                    uniqueId = "Don't call this twice without a uniqueId";
                }
                if (timers[uniqueId]) {
                    clearTimeout (timers[uniqueId]);
                }
                timers[uniqueId] = setTimeout(callback, ms);
            };
        })();
		
        $(window).resize(function (evt) {
            waitForFinalWindowResizeEvent(function(){
                didgeridoo.observer.publish('window.resize', evt);
            }, 500, "some unique string", evt);
        });
        /********************************************************/
        
        
		
        didgeridoo.observer.publish(moduleName + '.ready');
        didgeridoo.observer.publish(moduleName + '.rendered');
    };
        
    var _sidebar = function() {
            
        var _delay,
        $btnCollapse = $('.ui-layout-sidebar-nav-icon-collapse', $sidebarNav),
        sidebarIsExpanded = false;
        
        $sidebar.bind('mouseleave', function(ev) {
            if(!sidebarIsResizing && !sidebarIsExpanded) {
                _delay = setTimeout(function() {
                    _closeSidebar();
                    $('.ui-layout-sidebar-nav-icon').removeClass('ui-layout-sidebar-nav-icon-active');
                }, 1000);
            }
        })
        .bind('mouseenter', function(ev) {
            if(!sidebarIsExpanded) {
                clearTimeout(_delay);
            }
        });
        
        
        $btnCollapse.click(function() {
            if(sidebarIsExpanded) {
                _closeSidebar();
                        
                $('.ui-layout-sidebar-nav-icon-collapse').removeClass('ui-layout-sidebar-nav-icon-collapse-expanded');
                $('.ui-layout-sidebar-nav-icon').removeClass('ui-layout-sidebar-nav-icon-active');
            } else {
                var $openedPanels = $('.didgeridoo-panel-window:not(.didgeridoo-panel-window-hidden)', $sidebarContainer);
                
                if($openedPanels.length === 0) return;
                
                _openSidebar();
                        
                $('.ui-layout-sidebar-nav-icon-collapse').addClass('ui-layout-sidebar-nav-icon-collapse-expanded');
                
                var selectedPanel;
                $openedPanels.each(function(index, el) {
                    if( $(el).css('display') === 'block' ) {
                        selectedPanel = $(el).attr('id');
                    }
                });
                
                if(!selectedPanel) {
                    var $firstPanel;
                    
                    $firstPanel = $( $openedPanels.get(0) ).css('display', 'block');
                    selectedPanel = $firstPanel.attr('id');
                }
                
                _selectPanel(selectedPanel);
                $sidebar.removeClass('ui-layout-sidebar-collapsed')
                .removeClass('ui-layout-sidebar-opened')
                .addClass('ui-layout-sidebar-expanded');
                //$('.ui-layout-sidebar-nav-icon[name=' + selectedPanel + ']').addClass('ui-layout-sidebar-nav-icon-active');
            }
            
            didgeridoo.observer.publish('layout-sidebar.resized', null);
            didgeridoo.observer.publish('layout.resize', null);
            
            sidebarIsExpanded = !sidebarIsExpanded;
        });
        
        var _addPanel = function(moduleName) {
            didgeridoo.modules.load(moduleName, function(m) {
                $('#didgeridoo-panel-window-template').tmpl({
                    id: m.originalConfig.name,
                    title: m.originalConfig.title
                }).appendTo($sidebarContainer);
                
                var $panelWindow = $('#' + m.originalConfig.name);
                //m.renderTo( $('.didgeridoo-panel-window-content', $panelWindow) );
                
                $( '.didgeridoo-panel-window-close', $panelWindow ).click(function() {
                    _removePanel(m.originalConfig.id);
                });
                
                var icon = document.createElement('A');
                icon.classList.add('ui-layout-sidebar-nav-icon');
                icon.classList.add(m.originalConfig.iconClass);
                icon.setAttribute('name', m.originalConfig.name);
                icon.setAttribute('title', m.originalConfig.title);
                icon.addEventListener('click', function(ev) {
                    _selectPanel(icon.getAttribute('name'));
                });
                $sidebarNav.append(icon);
                
            });    
        };
        
        var _removePanel = function(moduleName) {
            var m = didgeridoo.modules.get(moduleName);
            
            _closeSidebar();
            $('#' + m.originalConfig.name, $sidebarContainer).addClass('didgeridoo-panel-window-hidden').css('display', 'none');
            $('.ui-layout-sidebar-nav-icon[name=' + m.originalConfig.name + ']', $sidebarNav).addClass('ui-layout-sidebar-nav-icon-hidden');
        };
        
        var _selectPanel = function(name) {
            var $panel = $('#' + name, $sidebarContainer),
                $icon = $('.ui-layout-sidebar-nav-icon[name=' + name + ']', $sidebarNav);
            $('.didgeridoo-panel-window', $sidebarContainer).css('display', 'none');
            $panel.css('display', 'block');
            $('.ui-layout-sidebar-nav-icon', $sidebarNav).removeClass('ui-layout-sidebar-nav-icon-active');
            $icon.addClass('ui-layout-sidebar-nav-icon-active');
            
            if(!sidebarIsExpanded) {
                _openSidebar();
            }
            
            didgeridoo.observer.publish('layout.sidebar.panel.selected', {
                'name': name,
                'icon': $icon.get(0),
                'el': $( '.didgeridoo-panel-window-content', $panel.get(0) ).get(0)
            });
        };
        
        var _openSidebar = function() {
            $sidebar.removeClass('ui-layout-sidebar-collapsed')
            .addClass('ui-layout-sidebar-opened');
            
            $sidebar.width($sidebar.data('width') || null);
            $sidebarContainer.css('display', 'block');
        };
        
        var _closeSidebar = function() {
            $sidebar.removeClass('ui-layout-sidebar-opened')
            .removeClass('ui-layout-sidebar-expanded')
            .addClass('ui-layout-sidebar-collapsed');
            
            $sidebar.css('width', '');
            
            $sidebarContainer.css('display', 'none');
            
            $('.ui-layout-sidebar-nav-icon-collapse').removeClass('ui-layout-sidebar-nav-icon-collapse-expanded');
            
            didgeridoo.observer.publish('layout-sidebar.resized', null);
            didgeridoo.observer.publish('layout.resize', null);
        };
            
        return {
            getPanel: function() {
                return $sidebar.get(0);
            },
            getPanelContainer: function() {
                return $sidebarContainer.get(0);
            },
            selectPanel: _selectPanel,
            addPanel: _addPanel,
            removePanel: _removePanel
        };
    };
    
    
    
    
    
    
    return {
        getNorthPanel: function() {
            return $northPanel.get(0);
        },
        getSideBar: _sidebar,
        getCenterPanel: function() {
            return $centerPanel.get(0);
        }
    };
	
});