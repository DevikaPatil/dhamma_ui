$(document).ready(function() {	
	$(document).on('click','.link-navbar',function(){	
		var a_href = $(this).attr('href');		
		$(this).attr('href',ABSOLUTE_URL + a_href);
	}); 
	
})

$(window).bind("pageshow", function(event) {
 if (event.originalEvent.persisted) {
  window.location.reload() 
  }
});

