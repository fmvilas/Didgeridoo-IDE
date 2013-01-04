"use strict";

didgeridoo.components.register('ui.base.menu.BaseMenuItem', function() {

    var BaseMenuItem = function() {

        var _id,
            _caption,
            _title,
            _icon,
            _hotkey,
            _enabled,
            _separator;

        __constructor(arguments);

        var __constructor = function(args) {
            didgeridoo.utils.assert(
                args.length === 2,
                'Error creando BaseMenuItem. Debe especificar id y caption'
                );

            didgeridoo.utils.assert(
                typeof args[0] === 'string' &&
                typeof args[1] === 'string' &&
                args[0].trim().length > 0,
                'Error creando BaseMenuItem. Los argumentos no coinciden. Deben ser string y string e id no puede estar vacio'
                );

            _id = args[0];
            _caption = args[1];
            _title = '';
            _icon = null;
            _hotkey = null;
            _enabled = true;
            _separator = _caption === '-';
        };



        var _getId = function() {
            return _id;
        };

        var _setId = function(value) {
            _id = id;

            return this;
        };
        
        var _getCaption = function() {
            return _caption;
        };

        var _setCaption = function(value) {
            _caption = value;

            return this;
        };
        
        var _getTitle = function() {
            return _title;
        };

        var _setTitle = function(value) {
            _title = value;

            return this;
        };
        
        var _getIcon = function() {
            return _icon;
        };

        var _setIcon = function(value) {
            _icon = value;

            return this;
        };
        
        var _getHotkey = function() {
            return _hotkey;
        };

        var _setHotkey = function(value) {
            _hotkey = value;

            return this;
        };
        
        var _isEnabled = function() {
            if(typeof arguments[0] === 'boolean') {
                _enabled = arguments[0];
                return this;
            } else {
                return _enabled;
            }
        };

        var _isSeparator = function() {
            if(typeof arguments[0] === 'boolean') {
                _separator = arguments[0];
                return this;
            } else {
                return _separator;
            }
        };
        
        var _toDOMElement = function() {
            var _disabledClass = 'didgeridoo-ui-base-menu-item-disabled',
                _separatorClass = 'didgeridoo-ui-base-menu-item-separator',
                _element,
                _anchor;
            
            _element = document.createElement('LI');
            _anchor = document.createElement('A');
            _anchor.parentNode = _element;
            
            _element.setAttribute('id', _id);
            _anchor.innerHTML = _caption;
            _anchor.setAttribute('title', _title);
            _anchor.setAttribute('data-hotkey', _hotkey.toString());
            _anchor.classList.add(_icon);
            if(!_enabled) { _anchor.classList.add(_disabledClass); }
            if(_separator) { _anchor.classList.add(_separatorClass); }
            
            return _element;
        };
        
        var _toHTML = function() {
            return _toDOMElement().outerHTML;
        };
        
        var _toObject = function() {
            return {
                "id": _id,
                "caption": _caption,
                "title": _title,
                "icon": _icon,
                "hotkey": _hotkey,
                "enabled": _enabled,
                "separator": _separator
            };
        };


        return {
            getId: _getId,
            setId: _setId,
            getCaption: _getCaption,
            setCaption: _setCaption,
            getTitle: _getTitle,
            setTitle: _setTitle,
            getIcon: _getIcon,
            setIcon: _setIcon,
            getHotkey: _getHotkey,
            setHotkey: _setHotkey,
            isEnabled: _isEnabled, //getter and setter
            isSeparator: _isSeparator, //getter and setter
            toDOMElement: _toDOMElement,
            toHTML: _toHTML,
            toObject: _toObject
        };

    };

    return BaseMenuItem;

});