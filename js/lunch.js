$(function(){
  $('.luncher').hide();
});
$(window).scroll( () => {
	var windowTop = $(window).scrollTop();
	windowTop > 70 ? $('.luncher').show() : $('.luncher').hide();
});
$('.luncher').on('click', function(e){
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
