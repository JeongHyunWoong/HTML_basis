$(document).ready(function(){
    $("#dish li").click(function(){
        $(this).hide();
    });
    //#btn1을 눌렀을때 이런일이 벌어질 것이다.
    //#dish li들을 모두 보여준다.
    $("#btn1").click(function(){
        $("#dish li").show();
    });
    //#box1에 마우스를 올렸을때 이런일이 벌어질 것이다.
    //(방금마우스를올린)그것
    //"이제 마우스 치우세요."로 바꾼다.
    $("#box1").mouseenter(function(){
        $(this).text("이제 마우스 치우세요.")
    });
    //#box1에 마우스를 치웠을때 이런일이 벌어질 것이다.
    $("#box1").mouseleave(function(){
        $(this).text("마우스를 올려보세요.")
    });
    //#btn2를 눌렀을때 이런일이 벌어진다.
        //#box3가 서서히 사라진다.
    $("#btn2").click(function(){
        $("#box3").hide(1000);  //fadeOut(),slideUp()
    });
    $("#btn3").click(function(){
        $("#box3").show(1000);  //fadeIn(),slideDown()
    });
    $("#btn4").click(function(){
        $("#box3").text("람보르기니");
    });
    $("#btn5").click(function(){
        $("#box3").text("테슬라");
    });

    $("#btn5").mouseenter(function(){
        $("#box2").css("background-color","yellow");
    });
    $("#btn4").mouseenter(function(){
        $("#box2").css("background-color","green");
    });
    //방금 마우스를 올린 그것(.main)의 자식(.sub)가 나타난다.
    $(".main").mouseenter(function(){
        $(this).children(".sub").stop().show(1000);
    });
    //방금 마우스를 치운 그것(.main)의 자식(.sub)를 숨겨준다.
    $(".main").mouseleave(function(){
        $(this).children(".sub").stop().hide(1000);
    });
    //#btn6을 눌렀을때 이런일이 벌어질 것이다.
        //box4가 사라진다.
        //box4가 사라진후에 경고창(사라짐)을 띄운다.
    $("#btn6").click(function(){
        $("#box4").slideUp(3000, "linear", function(){
            alert("박스가 사라짐");
        }); 
    });

    $("#paral").html("ㅎㅇ");

    //name이 "car"인 input들을 눌렀을때 이런일이 벌어질 것이다.
        //방금눌린 그것의 값이 무엇이냐?
        //만약 그 값이 1이라면
            //#car_price를 보여준다.
        //그렇지 않다면
            //#car_price를 숨겨준다.
    $("input[name='car']").click(function(){
        var car = $(this).val();
        if(car == 1){
            $("#car_price").show();
        }else{
            $("#car_price").hide();
        }
    });

    //#pw1에서 키가 눌렸을때 이런일이 벌어질 것이다.
        //방금 키 누른그것의 value의 글자수를 len이라고 하자.
        //만약 len의 값이 0이라면(글자를 입력하지 않았다면)
            //#pw2를 잠근다.
        //그렇지 않다면(글자를 입력했다면)
            //#pw2를 풀어준다.
    $("#pw1").keyup(function(){
        var len = $(this).val().length;
        if(len == 0){
            $("#pw2").attr("disabled","disabled");
        }else{
            $("#pw2").removeAttr("disabled");
        }
    });

    //#pw2에서 키가 눌렸다가 떼어질때마다 이런일이 벌어질것이다.
        //#pw1의 값과 #pw2의 값을 알아내서
        //만약 그 두 값이 같다면
            //#pw_chk에 "비밀번호가 일치합니다."라는 글을 쓰기.
            //#pw_chk의 속성 중 style이라는 속성의 내용을 "color:green"으로 바꾸기.
        //그것이 아니라면(두 값이 다르다면)
            //#pw_chk에 "비밀번호가 틀립니다."라는 글을 쓰기.
            //#pw_chk의 속성 중 style이라는 속성의 내용을 "color:red"으로 바꾸기.
    $("#pw2").keyup(function(){
        var pw1 = $("#pw1").val();
        var pw2 = $("#pw2").val();
        if(pw1 == pw2){
            $("#pw_chk").text("비밀번호가 일치합니다.").css({
                color:"green",
                fontWeight:"normal"
            });
        }else{
            $("#pw_chk").text("비밀번호가 틀립니다.").css({
                color:"red",
                fontWeight:"bold"
            });
        }
    });

    //#btn7을 눌렀을때 이런일이 벌어질 것이다.
        //#list1의 안쪽에 마지막부분에 "<li>탕수육</li>"을 추가한다.
    var num=0;
    $("#btn7").click(function(){
        $("#list1").append("<input type='text' placeholder='참가자성명"+num+"'/>");
        num++;
    });
    $("#btn8").click(function(){
        $("#list1 input:last-of-type").remove();
    });

    $("#btn9").click(function(){
        $("#box5").removeClass("blue");
    });
    $("#btn10").click(function(){
        $("#box5").addClass("blue");
    });

    //브라우저의 크기가 바뀔때마다 이와같은 일을 할 것이다.
        //브라우저의 가로, 세로 크기를 알아내서
        //#para2에 내용으로 써 넣기.
    // $(window).resize(function(){
    //     var w = $(this).width();
    //     var h = $(this).height();
    //     $("#para2").text(w+","+h);
    // });
    // $(window).chk_win(function(){
    //     var h = $(window).height();
    //     $("#box7").height();
    // });
    // chk_win();
    // $(window).resize(function(){
    //     chk_win();
    // });
    $("#roha").parent().siblings();
    //#junha의 바로아랫동생 : #minyong
    $("#sunjae").children("#junha");
});
