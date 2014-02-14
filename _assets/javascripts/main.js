$(".full img").on("click", function() {
  $(this).toggleClass("zoom");
});

$('#nav-overflow').click(function() { // Toggle button for responsive menu
	if($('#navigation').hasClass('expand')) {
		$('.site-nav').height(80); // Shrink to collapsed height
		$('#navigation').removeClass('expand');
	} else {
		$('#navigation').addClass('expand');
		$('.site-nav').height($('#navigation').outerHeight()); // Expand to height of expanded menu
	}
});