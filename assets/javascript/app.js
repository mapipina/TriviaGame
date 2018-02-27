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

// create the answers checkers
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