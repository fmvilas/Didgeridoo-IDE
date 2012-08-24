"use strict";
define(function() {

    
    var moduleName = 'didgeridoo-project-explorer',
        config,
        files;
		
    var tokens = didgeridoo.observer.subscribe(moduleName + '.loaded', function(topic, module) {
        didgeridoo.observer.unsubscribe(tokens[0]);
        _init(module);
    });
	
    var _init = function(module) {
        config = module.originalConfig;
        files = config.files;	
	
        $('head').append('<link rel="stylesheet" href="' + config.url + files.css.main  + '">');
        
        didgeridoo.observer.publish(moduleName + '.ready');
        
        new ProjectExplorer();
    };
	
	
    
    var ProjectExplorer = function() {
        
        var treePanel,
            isRendered = false;
        
        
        
        var __constructor = function() {
            
            Ext.define('FileSystem', {
                extend: 'Ext.data.Model',
                fields: [
                {
                    name: 'name',     
                    type: 'string'
                },

                {
                    name: 'modified',     
                    type: 'number'
                },

                {
                    name: 'size', 
                    type: 'number'
                }
                ]
            });

            var store = Ext.create('Ext.data.TreeStore', {
                model: 'FileSystem',
                proxy: {
                    type: 'ajax',
                    url: config.url + 'treegrid.json'
                },
                folderSort: true,
                sorters: [{
                    property: 'name',
                    direction: 'ASC'
                }]
            });

            treePanel = Ext.create('Ext.tree.Panel', {
                height: '100%',
                bodyBorder: false,
                border: false,
                autoScroll: true,
                rootVisible: false,
                store: store,
                multiSelect: true,
                lines: false,
                viewConfig: {
                    cls: 'light-scrollbar',
                    plugins:[
                        Ext.create('Ext.tree.plugin.TreeViewDragDrop', {
                            appendOnly: true
                        })
                    ]
                },
                columns: [{
                    xtype: 'treecolumn',
                    text: 'Name',
                    sortable: true,
                    menuDisabled: true,
                    dataIndex: 'name',
                    width: 200
                },{
                    xtype: 'templatecolumn',
                    text: 'Last Modified Date',
                    width: 130,
                    sortable: true,
                    menuDisabled: true,
                    dataIndex: 'modified',
                    align: 'center',
                    tpl: Ext.create('Ext.XTemplate', '{modified:this.formatDate}', {
                        formatDate: function(v) {
                            return moment(new Date(v)).format('HH:mm:ss YYYY-MM-DD');
                        }
                    })
                },{
                    xtype: 'templatecolumn',
                    text: 'Size',
                    width: 80,
                    dataIndex: 'size',
                    sortable: true,
                    menuDisabled: true,
                    tpl: Ext.create('Ext.XTemplate', '{size:this.formatSize}', {
                        formatSize: function(v) {
                            var times = 0,
                                symbols = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
                            
                            while(Math.floor(v / 1000) > 0) {
                                v = v / 1000;
                                times++;
                            }
                            
                            if(times > 0) {
                                v = v.toFixed(2);
                            }
                            
                            return v + ' ' + symbols[times];
                        }
                    })
                }]
            });
            
        };
        
        
        
        var _render = function(selector) {
            if( isRendered === true ) {
                _updateLayout();
                
                return;
            }
            
            treePanel.render(selector);
            
            isRendered = true;
            didgeridoo.observer.publish(moduleName + '.rendered');
        };
        
        
        
        var _updateLayout = function() {
            if(treePanel) {
                treePanel.doComponentLayout().doLayout();
            }
        };
        
        
        
        didgeridoo.observer.subscribe('layout.resized, layout.resizing', function() {
            _updateLayout();
        });
        
        didgeridoo.observer.subscribe('layout.sidebar.panel.selected', function(topic, info) {
            if(info.name === moduleName) {
                _render(info.el);
            }
        });
        
        
        
        __constructor();
        
        
        
        
        
        return {
            renderTo: _render
        };
        
    };
    
    
    
    
    
    return ProjectExplorer;
});