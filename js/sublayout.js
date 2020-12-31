$(function(){
  $(".lnbBd > li").click(function(){
    if( $(this).find(".innerMenu").hasClass("active")  == false ){
      $(".lnbBd > li").removeClass("on").find(".more").attr("src","../img/sub/ico_plus.png");
      $(".innerMenu").removeClass("active");
      $(this).addClass("on");
      $(this).find(".innerMenu").addClass("active");
      $(this).find(".more").attr("src","../img/sub/ico_minus.png");
      // $(".more").attr("src","../img/sub/ico_plus.png");
    }else{
      $(".lnbBd > li").removeClass("on");
      $(this).removeClass("on");
      $(this).find(".innerMenu").removeClass("active");
      $(this).find(".more").attr("src","../img/sub/ico_plus.png");
      $(".more").attr("src","../img/sub/ico_plus.png");
    }
    return false;
  });
});
