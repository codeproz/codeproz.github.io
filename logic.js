/*ye tic tac toke simple game hai.
Game DEVELOPED BY SAYYED SOHEL*/

let x = "x", o = "o";//yeh x aur o hai
let bari = 0;//x ki bari hai
let box1 = box2 = box3 = box4 = box5 = box6 = box7 = box8 = box9 = ""; //is me value store hoti
let lock1 = lock2 = lock3 = lock4 = lock5 = lock6 = lock7 = lock8 = lock9 = true;//ye input true karate
let kitteclick = 0;//ye all clicks count
let userx = usero = 0;//winer ke liye do user
let draw = 0;//koi bhi nahi jita to kya
temp = $('input[name=q]:checked').val();

barikiskihai();//first kon khelega


$("#box1").click(function () {

    if (lock1) {
        if (bari == 0) {
            box1 = x;
            bari++;
            $("#box1").text('X');

        } else {
            box1 = o;
            bari--;
            $("#box1").text('O');
            $("#box1").css("color", "blue");
        }

        kitteclick++;
        bot();
        lock1 = false;
        logic();
    }
});

$("#box2").click(function () {

    if (lock2) {

        if (bari == 0) {
            box2 = x;
            bari++;
            $("#box2").text('X');
        } else {
            box2 = o;
            bari--;
            $("#box2").text('O');
            $("#box2").css("color", "blue");
        }

        kitteclick++;
        bot();
        lock2 = false;
        logic();


    }

});

$("#box3").click(function () {
    if (lock3) {

        if (bari == 0) {
            box3 = x;
            bari++;
            $("#box3").text('X');
        } else {
            box3 = o;
            bari--;
            $("#box3").text('O');
            $("#box3").css("color", "blue");
        }

        kitteclick++;
        bot();
        lock3 = false;
        logic();



    }

});

$("#box4").click(function () {
    if (lock4) {

        if (bari == 0) {
            box4 = x;
            bari++;
            $("#box4").text('X');
        } else {
            box4 = o;
            bari--;
            $("#box4").text('O');
            $("#box4").css("color", "blue");
        }

        kitteclick++;
        bot();
        lock4 = false;
        logic();



    }

});

$("#box5").click(function () {
    if (lock5) {

        if (bari == 0) {
            box5 = x;
            bari++;
            $("#box5").text('X');
        } else {
            box5 = o;
            bari--;
            $("#box5").text('O');
            $("#box5").css("color", "blue");
        }

        kitteclick++;
        bot();
        lock5 = false;
        logic();



    }

});

$("#box6").click(function () {
    if (lock6) {

        if (bari == 0) {
            box6 = x;
            bari++;
            $("#box6").text('X');
        } else {
            box6 = o;
            bari--;
            $("#box6").text('O');
            $("#box6").css("color", "blue");
        }

        kitteclick++;
        bot();
        lock6 = false;
        logic();



    }

});
$("#box7").click(function () {
    if (lock7) {

        if (bari == 0) {
            box7 = x;
            bari++;
            $("#box7").text('X');
        } else {
            box7 = o;
            bari--;
            $("#box7").text('O');
            $("#box7").css("color", "blue");
        }

        kitteclick++;
        bot();
        lock7 = false;
        logic();



    }

});
$("#box8").click(function () {
    if (lock8) {

        if (bari == 0) {
            box8 = x;
            bari++;
            $("#box8").text('X');
        } else {
            box8 = o;
            bari--;
            $("#box8").text('O');
            $("#box8").css("color", "blue");
        }

        kitteclick++;
        bot();
        lock8 = false;
        logic();



    }

});

$("#box9").click(function () {
    if (lock9) {

        if (bari == 0) {
            box9 = x;
            bari++;
            $("#box9").text('X');
        } else {
            box9 = o;
            bari--;
            $("#box9").text('O');
            $("#box9").css("color", "blue");
        }

        kitteclick++;
        bot();
        lock9 = false;
        logic();


    }

});

//game pura reset
function reset() {
    barikiskihai();
    box1 = box2 = box3 = box4 = box5 = box6 = box7 = box8 = box9 = "";
    lock1 = lock2 = lock3 = lock4 = lock5 = lock6 = lock7 = lock8 = lock9 = true;
    kitteclick = 0;
    //userx aur usero,draw reset nahi karana hai
    //sabhi box me empty text
    if(temp=="bot"){
        bari=0;
    }
    $("#box1").text('');
    $("#box2").text('');
    $("#box3").text('');
    $("#box4").text('');
    $("#box5").text('');
    $("#box6").text('');
    $("#box7").text('');
    $("#box8").text('');
    $("#box9").text('');
    //reset colors
    $("#box1").css("color", "red");
    $("#box2").css("color", "red");
    $("#box3").css("color", "red");
    $("#box4").css("color", "red");
    $("#box5").css("color", "red");
    $("#box6").css("color", "red");
    $("#box7").css("color", "red");
    $("#box8").css("color", "red");
    $("#box9").css("color", "red");
    //reset opaciy
    $("#box1").css("opacity", "1");
    $("#box2").css("opacity", "1");
    $("#box3").css("opacity", "1");
    $("#box4").css("opacity", "1");
    $("#box5").css("opacity", "1");
    $("#box6").css("opacity", "1");
    $("#box7").css("opacity", "1");
    $("#box8").css("opacity", "1");
    $("#box9").css("opacity", "1");

}

//ye to main logic hai
function logic() {
    barikiskihai();

    if (box1 == x && box2 == x && box3 == x) {
        //123
        wingame(x);
        opbhai("#box1", "#box2", "#box3");

    } else if (box1 == x && box4 == x && box7 == x) {
        //147
        wingame(x);
        opbhai("#box1", "#box4", "#box7");

    } else if (box4 == x && box5 == x && box6 == x) {
        //456
        wingame(x);
        opbhai("#box4", "#box5", "#box6");

    } else if (box7 == x && box8 == x && box9 == x) {
        //789
        wingame(x);
        opbhai("#box7", "#box8", "#box9");

    } else if (box2 == x && box5 == x && box8 == x) {
        //258
        wingame(x);
        opbhai("#box2", "#box5", "#box8");

    } else if (box3 == x && box6 == x && box9 == x) {
        //369
        wingame(x);
        opbhai("#box3", "#box6", "#box9");

    } else if (box1 == x && box5 == x && box9 == x) {
        //159
        wingame(x);
        opbhai("#box1", "#box5", "#box9");

    } else if (box3 == x && box5 == x && box7 == x) {
        //357
        wingame(x);
        opbhai("#box3", "#box5", "#box7");



        //o
    } else if (box1 == o && box2 == o && box3 == o) {
        //123
        wingame(o);
        opbhai("#box1", "#box2", "#box3");

    } else if (box1 == o && box4 == o && box7 == o) {
        //147
        wingame(o);
        opbhai("#box1", "#box4", "#box7");

    } else if (box4 == o && box5 == o && box6 == o) {
        //456
        wingame(o);
        opbhai("#box4", "#box5", "#box6");

    } else if (box7 == o && box8 == o && box9 == o) {
        //789
        wingame(o);
        opbhai("#box7", "#box8", "#box9");

    } else if (box2 == o && box5 == o && box8 == o) {
        //258
        wingame(o);
        opbhai("#box2", "#box5", "#box8");

    } else if (box3 == o && box6 == o && box9 == o) {
        //369
        wingame(o);
        opbhai("#box3", "#box6", "#box9");

    } else if (box1 == o && box5 == o && box9 == o) {
        //159
        wingame(o);
        opbhai("#box1", "#box5", "#box9");

    } else if (box3 == o && box5 == o && box7 == o) {
        //357
        wingame(o);
        opbhai("#box3", "#box5", "#box7");

    } else {
        //agar sabhi false hue
        if (kitteclick == 9) {
            koibhinahi();
        }
    }
}

//is se Opacity change hoti hai game jitne ke baad
function opbhai(b1, b2, b3) {
    lock1 = lock2 = lock3 = lock4 = lock5 = lock6 = lock7 = lock8 = lock9 = false;

    $("#box1").css("opacity", "0.7");
    $("#box2").css("opacity", "0.7");
    $("#box3").css("opacity", "0.7");
    $("#box4").css("opacity", "0.7");
    $("#box5").css("opacity", "0.7");
    $("#box6").css("opacity", "0.7");
    $("#box7").css("opacity", "0.7");
    $("#box8").css("opacity", "0.7");
    $("#box9").css("opacity", "0.7");
    //jite hue ki Opacity karm hai karni
    $(b1).css("opacity", "1");
    $(b2).css("opacity", "1");
    $(b3).css("opacity", "1");
}

//ye x aur o ko color aur baari kis ki hai
function barikiskihai() {
    if (bari == 0) {
        $('#usr1').css("color", "red");
        $('#usr2').css("color", "black");
    } else {
        $('#usr2').css("color", "blue");
        $('#usr1').css("color", "black");
    }
}

//agar game jite
function wingame(winer) {

    if (winer == x) {
        userx++;
        $('#ux').text(userx);
    } else {
        usero++;
        $('#uo').text(usero);
    }
    setTimeout(reset, 1000);
}

//if harne ke baad
function koibhinahi() {
    draw++;
    $('#draw').text(draw);
    opbhai("", "", "");
    setTimeout(reset, 1000);
}

//bot function
function bot() {
   
    $("#bo").text(temp);
    if (temp == "bot") {
        if(bari == 1){

        lock1 = lock2 = lock3 = lock4 = lock5 = lock6 = lock7 = lock8 = lock9 = false;

        setTimeout(() => {


            if (box1 == "") {
                if (bari == 0) {
                    bari++;
                    box1 = x;
                    $("#box1").text('X');
                    logic();
                    lock1 = false;

                } else {
                    bari--;
                    box1 = o;
                    $("#box1").text('O');
                    $("#box1").css("color", "blue");
                    logic();
                    lock1 = false;


                }
            } else if (box2 == "") {

                if (bari == 0) {
                    bari++;
                    box2 = x;
                    $("#box2").text('X');
                    logic();
                    lock2 = false;

                } else {

                    bari--;
                    box2 = o;
                    $("#box2").text('O');
                    $("#box2").css("color", "blue");
                    logic();
                    lock2 = false;

                }

            } else if (box3 == "") {

                if (bari == 0) {
                    bari++;
                    box3 = x;
                    $("#box3").text('X');
                    logic();
                    lock3 = false;

                } else {
                    bari--;
                    box3 = o;
                    $("#box3").text('O');
                    $("#box3").css("color", "blue");
                    logic();
                    lock3 = false;

                }

            } else if (box4 == "") {

                if (bari == 0) {
                    bari++;
                    box4 = x;
                    $("#box4").text('X');
                    logic();
                    lock4 = false;

                } else {
                    bari--;
                    box4 = o;
                    $("#box4").text('O');
                    $("#box4").css("color", "blue");
                    logic();
                    lock4 = false;

                }

            } else if (box5 == "") {

                if (bari == 0) {
                    bari++;
                    box5 = x;
                    $("#box5").text('X');
                    logic();
                    lock5 = false;

                } else {
                    bari--;
                    box5 = o;
                    $("#box5").text('O');
                    $("#box5").css("color", "blue");
                    logic();
                    lock5 = false;

                }

            } else if (box6 == "") {

                if (bari == 0) {
                    bari++;
                    box6 = x;
                    $("#box6").text('X');
                    logic();
                    lock6 = false;

                } else {
                    bari--;
                    box6 = o;
                    $("#box6").text('O');
                    $("#box6").css("color", "blue");
                    logic();
                    lock6 = false;

                }

            } else if (box7 == "") {

                if (bari == 0) {
                    bari++;
                    box7 = x;
                    $("#box7").text('X');
                    logic();
                    lock7 = false;

                } else {
                    bari--;
                    box7 = o;
                    $("#box7").text('O');
                    $("#box7").css("color", "blue");
                    logic();
                    lock7 = false;

                }

            } else if (box8 == "") {

                if (bari == 0) {
                    bari++;
                    box8 = x;
                    $("#box8").text('X');
                    logic();
                    lock8 = false;

                } else {
                    bari--;
                    box8 = o;
                    $("#box8").text('O');
                    $("#box8").css("color", "blue");
                    logic();
                    lock8 = false;

                }

            } else if (box9 == "") {

                if (bari == 0) {
                    bari++;
                    box9 = x;
                    $("#box9").text('X');
                    logic();
                    lock9 = false;

                } else {
                    bari--;
                    box9 = o;
                    $("#box9").text('O');
                    $("#box9").css("color", "blue");
                    logic();
                    lock9 = false;

                }
            }

        }, 500);
    }else{

        dekhyaar();
        
    }



    }
}

function dekhyaar(){
    
    if (box1 == "") {
        lock1 = true

    } else if (box2 == "") {
        lock2 = true;

    }else if (box3 == "") {
        lock3 = true;

    }else if (box4 == "") {
        lock4 = true;

    }else if (box5 == "") {
        lock5 = true;

    }else if (box6 == "") {
        lock6 = true;

    }else if (box7 == "") {
        lock7 = true;

    }else if (box8 == "") {
        lock8 = true;

    }else if (box9 == "") {
        lock9 = true;

    }
}


