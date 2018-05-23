$(document).ready(function(){
    //click start to get the game started, hide the start button, and show the quiz
    $("#start").click(function(){
        $(".page2").toggle();
        $("#start").toggle();
    //one of the last things I'm doing is creating timer
        var count = 31;
        var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
        function timer(){
            count = count-1;
            if (count <= 0) {
                clearInterval(counter);
                $("#done").click();
                return;
            }
            $("#timer").html('Time Remaining: ' + count + ' Seconds');
         };
    });


    // have the timer show on load
  // $(".page2").load().timer();

    //time to define some variables
    var correctCounter = 0;
    var incorrectCounter = 0;
    var unansweredCounter = 0;

// create the answers checkers
    $("#done").click(function(){
        var val = $('input[name=q1]:checked').val();
        if (val) {
            if (val ==='steamboat') {
                correctCounter++;
            } else {
                incorrectCounter++;
            }
        } else {
            unansweredCounter++;
        }
        var val2 = $('input[name=q2]:checked').val();
        if (val2) {
            if (val2 ==='1-dol') {
                correctCounter++;
            } else {
                incorrectCounter++;
            }
        } else {
            unansweredCounter++;
        }
        var val3 = $('input[name=q3]:checked').val();
        if (val3) {
            if (val3 ==='tokyo') {
                correctCounter++;
            } else {
                incorrectCounter++;
            }
        } else {
            unansweredCounter++;
        }


    });
   
   /* $("input[name=q1]").click(function() {
        var val = $('input[name=q1]:checked').val();
        if (val === 'steamboat') {
            correctCounter++;
        } else {
            incorrectCounter++;
        } 

    });

    $("input[name=q2]").click(function() {
        var val = $('input[name=q2]:checked').val();
        if (val === '1-dol') {
            correctCounter++;
        } else {
            incorrectCounter++;
        } 

    });

    $("input[name=q3]").click(function() {
        var val = $('input[name=q3]:checked').val();
        if (val === 'tokyo') {
            correctCounter++;
        } else {
            incorrectCounter++;
        } 

    }); */


//need a reset function
 /*   function reset(){
        clearTimeout(timer);

    }; */
    //clicking done with hide the quiz and show the last page
    $("#done").click(function(){
        $(".page3").toggle();
        // how the fuck do I call this function in order to update the correctCounter that appears on last page?
        $(".page2").remove();
        $("#correct").append(correctCounter);
        $("#incorrect").append(incorrectCounter);
        console.log(unansweredCounter);
       // reset();
       $("#blank").append(unansweredCounter);
    });


});