$(document).ready(function(){
  $('.img-show').hide();
  $('.col-sm-4 .inlarge-img').on('click',function(){
    var imgLoc = $(this).attr('src');
    $('#display-image').attr({'src':imgLoc});
    $('.img-show').fadeIn();


  });
  $('#close-image').on('click',function(){
    $('.img-show').fadeOut();
  });
});

/*$(document).ready(function(){

    $("#next").click(function(){
        if ($(".col-sm-4 img:visible").next().length != 0)
            $(".col-sm-4 img:visible").next().alert(attr('src')).prev().hide();
        else {
            $(".col-sm-4 img:visible").hide();
            $(".col-sm-4 img:first").show();
        }
        return false;
    });

    $("#prev").click(function(){
        if ($(".col-sm-4 img:visible").prev().length != 0)
            $(".col-sm-4 img:visible").prev().show().next().hide();
        else {
            $(".col-sm-4 img:visible").hide();
            $(".col-sm-4 img:last").show();
        }
        return false;
    });
});
*/
