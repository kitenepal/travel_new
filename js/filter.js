$(function(){
  $('.filter-group').hide();
  $('#filter-btn').on('click',function(){
    $('.filter-group').slideDown();
    $(this).attr("id", "filter-close");
  });
});
