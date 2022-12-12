$(document).ready(function(){
    //#ham을 눌렀을때 이런일이 벌어질 것이다.
        //#backdrop을 서서히 나타나게하자.
        //#menu의 스타일중 right라는 속성의 값을 0으로 만들자.
    $("#ham").click(function(){
        $("#backdrop").fadeIn();
        $("#menu").css("right","0");
        $("body").css("overflow","hidden");
    });
    $("#close,#backdrop").click(function(){
        $("#backdrop").fadeOut();
        $("#menu").css("right","-300px");
        $("body").css("overflow","auto");
    });
    $(".main").click(function(){
        $(this).children(".sub").slideToggle();
        $(this).siblings().children(".sub").slideUp(); //매우어려움
    });
    $(".main").click(function(){
        var visi = $(this).children(".sub").is(":visible");
        if(visi){
            $(this).children(".sub").slideUp();
            $(this).children("a").children("i").removeClass("rev");
        }else{
            $(this).children(".sub").slideDown();
            $(this).children("a").children("i").addClass("rev");
        }
        $(this).siblings().children(".sub").slideUp();
        $(this).siblings().children("a").children("i").removeClass("rev");
    });
});