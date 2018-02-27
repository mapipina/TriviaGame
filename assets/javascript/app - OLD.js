$(document).ready(function(){
	//click start to get the game started, hide the start button, and show the quiz
    $("#start").click(function(){
        $(".page2").toggle();
        $("#start").toggle();
    });

    //one of the last things I'm doing is creating timer
    var count=15;
    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
    function timer(){
        count=count-1;
        if (count <= 0) {
            clearInterval(counter);
            $("#done").click();
            return;
        }
        $("#timer").html('Time Remaining: ' + count + ' Seconds');
     }
    // have the timer show on load
    //$(".page2").load()

    //time to define some variables
    var correctCounter = 0;
    var incorrectCounter = 0;
    var unansweredCounter = 0;
    //attempt two at creating event listener for checked
   /* $(".question").click(function(){
        $(this).find("input[type=radio]").prop("checked", "true");
    }) */
//need variable that defines the correct answers so that jQuery can match user input to what's in the object
  //  var oldanswer1 = $("input[type=radio][name=q1]:checked").val();
  //  var oldanswer2 = $("input[type=radio][name=q2]:checked").val();
  //  var oldanswer3 = $("input[type=radio][name=q3]:checked").val();

// need an event listener to add checked to input selected
   /* var answer1b = $("input[type=radio][name=q1]").click(function(){
        $("input[type=radio][name=q1]").prop("checked", true);
        answer1 = answer1b;
    }); */
   /* var answer = $("input[type=radio]").change(function(){
        var isChecked = $(this).is(":checked");
        $(isChecked).val() = isChecked;
        if (isChecked === 'steamboat' || '1-dol' || 'tokyo') {
            correctCounter++;
        }
    }); */

    // my 100th attempt at getting the counters correct
  /*  var answers = function (){
        for (var i = 1; i < 45; i++) {
            var radios = $('q' + i);
            for (var j = 0; j < radios.length; j++) {
                var radio = radios[j];
                if (radio.val() === 'steamboat' && radio.checked) {
                    correctCounter++;
                }
            }
            
        }
    }; */


    //next step is to create function that checks to see if answer is correct, incorrect or unaswered & updates counter
   /* var tally = function () {
    	
    	// have to create if statement that defines what to do when userSelect matches with object in answers
    	if (answer1 === 'steamboat') {
    		correctCounter++;
    	};
    	if (answer2 === '1-dol') {
    		correctCounter++;
    	};
    	if (answer3 === 'tokyo') {
    		correctCounter++;
    	}

    }; */
    $("input[name=q1]").click(function() {
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

    });
    
    //clicking done with hide the quiz and show the last page
    $("#done").click(function(){
    	$(".page3").toggle();
    	// how the fuck do I call this function in order to update the correctCounter that appears on last page?
    	$("#done").toggle();
    	$(".page2").toggle();
    	$("#correct").append(correctCounter);
        $("#incorrect").append(incorrectCounter);
        $("#blank").append(unansweredCounter);
    });


});