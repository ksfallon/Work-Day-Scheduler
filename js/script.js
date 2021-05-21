// gives the current day, Month and date for website header"
var today = moment();
$("#currentDay").text(today.format('dddd, MMM Do'));

var hours = $(".hour") 

function changeBackgroundColor() {
    
    // currentHourEl is the current time, only the hour, in miliary time (thats why H is capitalized)
    var currentHourEl = moment().format("HH");

    // this function takes all of the elements with class "description" and does something for each one
    // jquery way to do a for loop i think
    $(".description").each(function() {

        // blockId grads the ids from each element with ".description" (=this) splits the id by the "-" and
        // takes the number and turns it into an integer from a string (parseInt)
        var blockId = parseInt($(this).attr("id").split("-")[1])
        
        if (blockId < currentHourEl){
            // if blockId < currentHourEl, then add the class "past" to this specific element which will display
            // the color grey based on the css
            $(this).addClass("past")
    
        } else if (currentHourEl == blockId){
            // else if blockId equals currentHourEl, 1st remove class "past", then add class "present" which displays
            // the color red based on the css
            $(this).removeClass("past")
            $(this).addClass("present")
    
        } else {
           // if blockId is any other number(basically greater than currentHourEl), 1st remove classes "past"& "present"
           // then add class future which displays the color green based on the css
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }


    });
};

changeBackgroundColor()

// add an eventlistner(click) to all buttons with class "saveBtn"
$(".saveBtn").click(function(event) {
    event.preventDefault();
    // used this to refer to "saveBtn" to grab the parent which are the "row" divs
    var rowParent = $(this).parent();
    // from the rowParent's i want to grab the children with the class "description"
    var textChild = $(rowParent).children(".description")
    // from the all of the div's with ".description" I need to set their ids to a var
    var textID = ($(textChild).attr("id"))
    // from the all of the div's with ".description" I need to get the input values
    var eventText = ($(textChild).val());
    
    // I can set the textID and eventText as key, value pairs in localStorage
    localStorage.setItem(textID, eventText)

})

// grab values from localStorage and display them on webpage
function displayLocalStorage () {
    // i starts at 9 because of the work hours and is less than 18 bc of miliary time
    for(var i = 9; i < 18; i++) {
        //to get the specifc key from local storage I need to add "text-" and "i"
        var keyName = "text-" + i;
        // then i can plug in keyName to localStorage.getItem to get the values
        var displayTask = localStorage.getItem(keyName);
        // to make keyName a callable Id in jQuery I need to add "#" before it
        var keySelector = "#" + keyName;
        // now i can append the correct values(displayTask) to the correct keySelector
        // (or id) in HTML and have it display on the webpage
        $(keySelector).append(displayTask);
}
}

displayLocalStorage ();



