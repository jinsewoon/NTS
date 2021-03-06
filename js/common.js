$(function(){
  //aside 메뉴 fixed 활성화
  $(window).scroll(function(){
   var wScrollTop = $(window).scrollTop();//127(헤더 높이)보다 클때 메뉴바 따라내려오기
   if( wScrollTop > 70){
     $("#aside").addClass("fixed");
     $(".back_top").css("display","flex");
   }else{
     $("#aside").removeClass("fixed");
     $(".back_top").hide();
   }
 });
//scrollTop == 0로 이동
 $(".back_top").click(function(){
   $("html, body").animate({scrollTop:0}, 800);
   return false;
 });

 $(".space").mouseenter(function(){
  $("#dropMenu").removeClass("active");
  $(".bg").removeClass("active");
 });


  //서브메뉴 활성화
  $(".mainMenu > li ").mouseenter(function(){
    $(this).css("background","#206cb3")
    $("#dropMenu").addClass("active");
    $(".bg").addClass("active");
    var dataNum = $(this).index();
    var indexNum = dataNum + 1;
    $("#no"+indexNum+"").css("background","#f9f9f9");
    $(this).mouseleave(function(){
      $("#no"+indexNum+"").css("background","");
      $(".mainMenu > li ").css("background","");
      $("#dropMenu").removeClass("active");
      $(".bg").removeClass("active");
    });
  });
  //서브메뉴 호버시 li배경 색변경
  $(".submenu > li").mouseenter(function(){
    var subDataNum = $(this).parent().index();
    var subIndexNum = subDataNum + 1;
    $(this).parent().css("background","#f9f9f9");
    $(this).find("li").css("background","#f9f9f9");
    $("#hv"+subIndexNum+"").css("background","#206cb3");
          $(".bg").addClass("active");
  }).mouseleave(function(){
    $(".submenu").css("background","");
    $(this).find("li").css("background","");
    $(".mainMenuList").css("background","");
          $(".bg").removeClass("active");
  });


  $(".submenu").mouseover(function(){
    $(this).css("background","#f9f9f9");
    $(this).find(".innerMenu > li").css("background","#f9f9f9");
    $(".bg").addClass("active");
  }).mouseout(function(){
    $(this).css("background","");
    $(this).find(".innerMenu > li").css("background","");
    $(".bg").removeClass("active");
  });

  //3번째 서브메뉴 배경색
  $(".mainMenu > li:nth-child(3)").mouseenter(function(){
    $("#no3 .innerMenu > li").css("background","#f9f9f9");
  }).mouseleave(function(){
    $("#no3 .innerMenu > li").css("background","");
  })


  //서브메뉴 비활성화
  $("#dropMenu .innerWrap").mouseleave(function(){
    $("#dropMenu").removeClass("active");
    $(".bg").removeClass("active");
  }).mouseenter(function(){
    $(".bg").addClass("active");
    $("#dropMenu").addClass("active");
  });
  //.innerMenu의 드랍 애니메이션
  $(".submenu > li > a").click(function(){
    $(".sign").removeClass("on")
    if( $(this).next().hasClass("active") == false ){
      //.innerMenu 드랍
      $(".innerMenu").removeClass("active");
      $(this).next().addClass("active");
      //화살표 동작
      $(this).prev().addClass("on")
    }else{
      //.innerMenu 드랍
      $(".innerMenu").removeClass("active");
      $(this).next().removeClass("active");
      //화살표 동작
      $(this).prev().removeClass("on")
    }
    return false;
  });


  //box3 탭메뉴구성
  $('.box3 ul.tabs .tab-link').mouseover(function(){
    var tab_id = $(this).attr('data-tab');
    $('.box3 ul.tabs .tab-link').removeClass('current');
    $('.box3 .tab-content').removeClass('current');
    $(this).addClass('current');
    $(".box3 #"+tab_id).addClass('current');
    //more버튼  첫번째 탭에서만 보이기
    $('.box3 ul.tabs li:first-child').mouseover(function(){
      $(".box3 .moreBtn").show()
    });
    $(".box3 .moreBtn").hide()
  });

  //box5 탭메뉴구성
  $('.box5 ul.tabs .tab-link').mouseover(function(){
    var tab_id = $(this).attr('data-tab');
    $('.box5 ul.tabs .tab-link').removeClass('current');
    $('.box5 .tab-content').removeClass('current');
    $(this).addClass('current');
    $(".box5 #"+tab_id).addClass('current');
    //more버튼  첫번째 탭에서만 보이기
    $('.box5 ul.tabs li:not(first-child)').mouseover(function(){
      $(".box5 .moreBtn").show()
    });
    $(".box5 .moreBtn").hide()
  });

  //클릭시 more버튼 변화
  $(".moreBtn").click(function(){
    if( $(this).hasClass("on")  == false ){
      $(this).addClass("on");
      $(".content.box3").css("overflow","visible");
    }else{
      $(this).removeClass("on");
      $(".content.box3").css("overflow","hidden");
    }
    return false;
  });

  $(".dateS").click(function(){
    if( $(this).hasClass("current") == false ){
      var textAdd = $(this).text();
      var textP = $(this).find("p");
      $(".dateS").removeClass("current");
      $(this).addClass("current");
      $(".suffix").removeClass("on");
      $(this).children(".suffix").addClass("on");
      console.log($(this).index())
      var thisIndex = $(this).index();
      var thisIndexNum = thisIndex - 3;
      $(".list").removeClass("current");
      $("#li"+thisIndexNum+"").addClass("current");
    }
  });

  //aside 활성화
  $(".asideBtn").click(function(){
    $(this).fadeOut();
    $(".quickMenu").css("transform","translateX(12%)");
  });
  $(".asideClose").click(function(){
    $(".quickMenu").css("transform","translateX(200%)");
    $(".asideBtn").fadeIn("slow");
    return false;
  });
});// document ready
