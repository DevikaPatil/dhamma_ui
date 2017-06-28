$(document).ready(function() {	
	$(document).on('click','.link-navbar',function(){
		alert("inside linkurl formation");
		alert("before forming a_href" + a_href);
		var a_href = $(this).attr('href');
		alert("after forming a_href" + a_href);
		$(this).attr('href',ABSOLUTE_URL + a_href);
	}); 
	
})

