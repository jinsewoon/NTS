$(function(){
	//탭메뉴
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});



  //.item css 적용(테마색)
  var itmeLength = $(".item").length;
  for( var i = 1; i < itmeLength +1; i++ ){
    var thisItem = $(".item:nth-of-type("+i+")");//인덱스
    var itmeColor = thisItem.attr("data-color");//데이타 컬러 값
    thisItem.css("border-color",""+itmeColor+""); //boder컬러 적용
    thisItem.css("box-shadow","5px 5px 0"+itmeColor+""); //box-shadow컬러 적용
    thisItem.css("border-color",""+itmeColor+""); //boder컬러 적용
    thisItem.find("strong").css("color",""+itmeColor+"");
    // thisItem.find(".bdBox > li::marker").css("color",""+itmeColor+"");
  }
});
