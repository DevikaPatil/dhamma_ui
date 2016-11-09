$(document).ready(function() {
	$(document).on('click','.link-navbar',function(){
		var a_href = $(this).attr('href');
		$('.link-navbar').attr('href',ABSOLUTE_URL + a_href);
	}); 
})

