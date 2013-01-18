(function($){
	$.fn.tabmenu = function(options){
		var settings = $.extend({
			'hiddenClass': 'hidden',
			'activeClass': 'active',
		}, options);
		
		return this.each(function(){
			var $container = $(this);
			
			$container.find('.ux-tab').not(':first').addClass(settings.hiddenClass);
			$container.find('a.ux-tab-label').first().addClass(settings.activeClass);
			
			$container.find('a.ux-tab-label').click(function(event){
				event.preventDefault();
				
				var $this = $(this);
				if (!$this.hasClass(settings.activeClass)){
					$container.find('a.'+settings.activeClass).removeClass(settings.activeClass);
					$this.addClass(settings.activeClass);
					
					$container.find('.ux-tab').not('.'+settings.hiddenClass).addClass(settings.hiddenClass);
					var id = $this.attr('href').substring(1);
					$('#'+id).removeClass(settings.hiddenClass);
				}
			});
		});
	}
})(jQuery);