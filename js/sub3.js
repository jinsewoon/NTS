$(function(){
  //박스높이 정렬
  var methodLength = $(".method").length;
  for( var i = 1; i < methodLength +1; i++ ){
    var thisRight = $(".method:nth-of-type("+i+") > .right");//인덱스
    var rightH = thisRight.height();//높이 값
    // console.log(rightH); 각각의 높이
    thisRight.prevAll(".left").css("height",""+rightH+"");
    thisRight.prevAll(".arrow").css("height",""+rightH+"");
  }
});
