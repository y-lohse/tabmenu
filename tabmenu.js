(function($){
	$(function(){
		if ($('.ui-tab').length === 0) return;
		
		$('.ui-tab').not(':first').addClass('visuallyhidden');
		$('.ui-tabmenu li a').first().addClass('active');
		
		$('.ui-tabmenu li a').click(function(event){
			event.preventDefault();
			
			var $this = $(this);
			if (!$this.hasClass('active')){
				$('.ui-tabmenu li a.active').removeClass('active');
				$this.addClass('active');
				
				$('.ui-tab').not('.visuallyhidden').addClass('visuallyhidden');
				var id = $this.attr('href').substring(1);
				$('#' + id).removeClass('visuallyhidden');
			}
		});
	});
})(jQuery);