$(document).ready(function(){
	$('.spoiler-text').hide();
	$('.spoiler').click(function(){
		$(this).toggleClass("folded").toggleClass("unfolded").next().slideToggle();
	});

	$('.settings').click(function() {
		$('.sidebar-nav').toggle("slide");
	});
});