define(function() {

	var moduleName = 'didgeridoo-main-menu';
		
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
				_render();
			},
			error: function(jqXHR, status, errorThrown) {
				didgeridoo.logger.warn('Oops! Didgeridoo couldn\'t load the "' + config.id + '" module.\n'+
										'Error details:\n  Status Text: ' + status + '\n  Error Thrown: ' + errorThrown);
			}
		});
		
		$('head').append('<link rel="stylesheet" href="' + config.url + files.css.main  + '">');
		
	};
	
	
	var _render = function() {
	
		var $mainMenu = $("#didgeridoo-main-menu");
		
		$("li", $mainMenu).hover(function(){
		
			var $sub = $('ul:first', this),
				$parent = $(this).parent(),
				$me = $(this),
				$all = $('ul', $mainMenu);
		
		    if($parent.attr('id') != 'didgeridoo-main-menu') {
		        if($sub.length > 0) {
		            $sub.css('left', $parent.width())
		            	.css('top', $me.position().top);
		        }
		        
		        $sub.stop().css('display', 'block');
		    } else if($mainMenu.data('open') == true) {
		    	$all.css('display', 'none');
		        $sub.stop().css({
		        	'top': $me.position().top + 2,
		        	'border-top': 'none',
		        	'display': 'block'
		        });
		    } else {
		    	$sub.css({
		    		'top': $me.position().top + 2,
		    		'border-top': 'none'
		    	});
		    }
		    
		    $all.stop();
		    $me.addClass("hover");
		
		}, function(){
			
			var $sub = $('ul:first', this),
				$parent = $(this).parent(),
				$me = $(this);
				
			if($parent.attr('id') != 'didgeridoo-main-menu') {
			    $sub.css('display','none');
		    } else {
		    	$sub.animate({display:'block'}, 1000, function() {
		    		$(this).css('display', 'none');
		    		$mainMenu.data('open', false);
		    	});
		    }
		    
		    $me.removeClass("hover");
		
		});
		
		$('li', $mainMenu).click(function() {
			
			var $sub = $('ul:first', this),
				$parent = $(this).parent();
						
			if($parent.attr('id') == 'didgeridoo-main-menu') {
				$mainMenu.data('open', !$mainMenu.data('open'));
			}
					
			$sub.css('display', ($sub.css('display') == 'block') ? 'none' : 'block');
			
			return false;
	
		});
		
		$('ul li', $mainMenu).each(function() {
		    var $me = $(this);
		    if($me.data('hotkey')) {
		        $me.append("<span class='didgeridoo-main-menu-hotkey'>" + $me.data('hotkey') + "</span>");
		    }
		});
		
		    
		$('ul li:has(ul)', $mainMenu).append("<span class='didgeridoo-main-menu-open-icon'></span>");
		
		didgeridoo.observer.publish(moduleName + '.ready');
		didgeridoo.observer.publish(moduleName + '.rendered');
	};
	
	return {};
	
}); //end of define