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
/*
$(function(){
  var panalID= $(this).attr('data-panelid');

  $('.show-menu').on('click',function(){
    $('#'+panalID).slideDown();
  }, function(){
      $('#'+panalID).slideUp();
    });
});

$(function(){
  var panalID= $(this).attr('data-panelid');

  $('.show-menu').on('click',function(){
    $('#'+panalID).slideDown();
  }, function(){
      $('#'+panalID).slideUp();
    });
});

$('.show-menu').toggle(function(){
	$('#panel1').show();
}, function(){
	$('#panel1').hide();
});*/
