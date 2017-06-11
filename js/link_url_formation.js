$(document).ready(function() {	
	$(document).on('click','.link-navbar',function(){
		location.reload();
		var a_href = $(this).attr('href');
		$('.link-navbar').attr('href',ABSOLUTE_URL + a_href);	
	}); 
	
})

