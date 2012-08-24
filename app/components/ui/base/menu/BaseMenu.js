"use strict";

didgeridoo.components.register('ui.base.menu.BaseMenu', 
['ui.base.menu.BaseMenuItem'], 
function(BaseMenuItem) {
    
    var BaseMenu = function() {
        
        var _structure = new BaseMenuItem();
        
        
        var _addItem = function(parentItem, item) {
            didgeridoo.utils.extend(true, parentItem, item);
            
            return this;
        }
        
        var _removeItem = function(parentItem, item) {
            //remove item
            
            return this;
        }
        
        var _selectItem = function(parentItem, item) {
            //select item
            
            return this;
        }
        
        
        return {
            addItem: _addItem,
            removeItem: _removeItem,
            selectItem: _selectItem
        };
        
    };
    
    return BaseMenu;
    
});