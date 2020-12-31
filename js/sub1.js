//sub1
$(function(){
  $(".numbering > li > a").click(function(){
    if( $(this).hasClass("on")  == false ){
      $(".numbering > li > a").removeClass("on");
      $(this).addClass("on");
    }else{
      $(this).removeClass("on");
    }
    return false;
  });
});
