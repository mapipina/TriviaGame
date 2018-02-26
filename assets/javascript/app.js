$(document).ready(function(){
	//click start to get the game started, hide the start button, and show the quiz
    $("#start").click(function(){
        $(".page2").toggle();
        $("#start").toggle();
    });

    //time to define some variables
//need variable that defines the correct answers so that jQuery can match user input to what's in the object
    var answer1 = $("input[type=radio][name=q1]:checked").val();
    var answer2 = $("input[type=radio][name=q2]:checked").val();
    var answer3 = $("input[type=radio][name=q3]:checked").val();
    var correctCounter = 0;
    var incorrectCounter = 0;
    var unansweredCounter = 0;
// need an event listener to add checked to input selected
    var makeChecked = function(){
    	$("input").click()
    }

    //next step is to create function that checks to see if answer is correct, incorrect or unaswered & updates counter
    var tally = function () {
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

    };


    //clicking done with hide the quiz and show the last page
    $("#done").click(function(){
    	$(".page3").toggle();
    	// how the fuck do I call this function in order to update the correctCounter that appears on last page?
    	$("#done").toggle();
    	$(".page2").toggle();
    	tally();
    	$("#correct").append(correctCounter);
    });


});