$(document).ready(function() {
	$('.img-path').attr('src', ABSOLUTE_URL + '/image/MAVA_East_Regions.gif');
	$(document).on('click','.link-navbar',function(){
		var a_href = $(this).attr('href');
		$('.link-navbar').attr('href',ABSOLUTE_URL + a_href);
	}); 
	
})

