$(function(){
  $('.luncher').hide();
});
$(window).scroll( () => {
	var windowTop = $(window).scrollTop();
	windowTop > 100 ? $('.luncher').show() : $('.luncher').hide();
});
$('.luncher').on('click', function(e){
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

$(function(){
  $('.show-menu').on('mouseover',function(){
    var panalID = $(this).attr('data-panelid');
    $('#'+panalID).slideDown();
  });
  $('.show-menu').on('mouseleave',function(){
    var panalID = $(this).attr('data-panelid');
    $('#'+panalID).slideUp();
  });
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	$('#main-image .row').css({
		'transform'	: 'translate(0%, '+ wScroll/7 +'% )'
	});
});
