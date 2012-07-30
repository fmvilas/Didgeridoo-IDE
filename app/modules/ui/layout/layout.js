define(function() {
	
	var moduleName = 'didgeridoo-layout',
		$northPanel,
		$middleRow,
		$westPanel,
		//$eastPanel,
		$centerPanel,
		$centerPanelTabs;
	
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
		
		var windowResizeDebouncer;
		
		$northPanel = $('.ui-layout-north');
		$middleRow = $('.ui-layout-middle-row');
		$westPanel = $('.ui-layout-west');
		//$eastPanel = $('.ui-layout-east');
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
		
		
		didgeridoo.observer.subscribe('layout-west.resized', function(topics, ui) {
			layoutWestResize(ui);
		});
		
		didgeridoo.observer.subscribe('layout-west.resizing', function(topics, ui) {
			layoutWestResize(ui);
		});
		
		var layoutWestResize = function(ui) {
			$centerPanel.css('left', ui.originalElement[0].offsetWidth);
			$westPanel.css('height', 'auto');
		};
		
		/*didgeridoo.observer.subscribe('layout-east.resized', function(topics, ui) {
			layoutEastResize(ui);
		});
		
		didgeridoo.observer.subscribe('layout-east.resizing', function(topics, ui) {
			layoutEastResize(ui);
		});
		
		var layoutEastResize = function(ui) {
			$centerPanel.css('right', ui.originalElement[0].offsetWidth);
			$eastPanel.css('left', 'auto');
			$eastPanel.css('right', '0');
			$eastPanel.css('height', 'auto');
		};*/
			
		$westPanel.resizable({
			handles: 'e',
			minWidth: 200,
			stop: function(evt, ui) {
				didgeridoo.observer.publish('layout-west.resized', ui);
				didgeridoo.observer.publish('layout.resized', ui);
			},
			resize: function(evt, ui) {
				didgeridoo.observer.publish('layout-west.resizing', ui);
				didgeridoo.observer.publish('layout.resizing', ui);
			}
		});
		
		/*$eastPanel.resizable({
			handles: 'w',
			minWidth: 10,
			stop: function(evt, ui) {
				didgeridoo.observer.publish('layout-east.resized', ui);
				didgeridoo.observer.publish('layout.resized', ui);
				//$eastPanel.width( $middleRow.width() - ($centerPanel.position().left + $centerPanel.width()) );
			},
			resize: function(evt, ui) {
				didgeridoo.observer.publish('layout-east.resizing', ui);
				didgeridoo.observer.publish('layout.resizing', ui);
			}
		});*/
		
		
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
		
		/*$(window).bind('resize', function(evt) {
			clearTimeout(windowResizeDebouncer);
			var windowResizeDebouncer = setTimeout(function() {
				windowResized.call(this, evt);
			}, 2500);
		});
		
		var windowResized = function(evt) {
			didgeridoo.observer.publish('window.resize', evt);
		};*/
		
		didgeridoo.observer.publish(moduleName + '.ready');
		didgeridoo.observer.publish(moduleName + '.rendered');
	};
		
	return {
		getNorth: function() {
			return $northPanel;
		},
		getMiddleRow: function() {
			return $middleRow;
		},
		getWest: function() {
			return $westPanel;
		},
		/*getEast: function() {
			return $eastPanel;
		},*/
		getCenter: function() {
			return $centerPanel;
		},
		getCenterTabList: function() {
			return $centerPanelTabs;
		}
	};
	
});