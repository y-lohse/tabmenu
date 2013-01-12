(function($){
	jQuery.fn.tabmenu = function(options){
		var settings = $.extend({
			'hiddenClass': 'hidden',
			'activeClass': 'active',
		}, options);
		
		return this.each(function(){
			var $this = $(this);
			
			$('.ui-tab').not(':first').addClass(settings.hiddenClass);
			$('.ui-tabmenu li a').first().addClass(settings.activeClass);
			
			$this.find('a.ui-tab-label').click(function(event){
				event.preventDefault();
				
				var $this = $(this);
				if (!$this.hasClass(settings.activeClass)){
					$('.'+settings.activeClass).removeClass(settings.activeClass);
					$this.addClass(settings.activeClass);
					
					$('.ui-tab').not('.'+settings.hiddenClass).addClass(settings.hiddenClass);
					var id = $this.attr('href').substring(1);
					$('#'+id).removeClass(settings.hiddenClass);
				}
			});
		});
	}
	
	$(function(){
		$('.ui-tabmenu').tabmenu();
	});
})(jQuery);