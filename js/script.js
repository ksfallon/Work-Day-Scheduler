buttonNine = document.querySelector('#btn9')
nineAmTask = document.querySelector("#text9");
allButtons = document.querySelector(".saveBtn")

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
    })
};

changeBackgroundColor()

// var eventText = ($(".description").attr("id"))
// console.log("should give ID", eventText);


    $(".saveBtn").click(function(event) {
        event.preventDefault();
        
        var localstorageSearches = JSON.parse(localStorage.getItem('calendarHistory')) || [];
        
        var rowParent = $(this).parent();
        var textChild = $(rowParent).children(".description")
        var textID = ($(textChild).attr("id"))
        var eventText = ($(textChild).val());
        var eventHistory = [textID, eventText]

        localstorageSearches.push(eventHistory);

        localStorage.setItem('calendarHistory', JSON.stringify(localstorageSearches))
        console.log("will thiswork:", localstorageSearches);

})

function displayLocalStorage () {
    var displayTasks = JSON.parse(localStorage.getItem('calendarHistory'));
    console.log("local storage", displayTasks);
    // I need to take the key which are each text area's ID and append the value (the input) that text area
    $.each(displayTasks, function(key, value) {
        if (key == ($("textarea").attr("id"))) {
            ($("textarea").attr("id")).append(value);
        }
    })


//     // $("#calendarHistory").append(displayTask);
}
displayLocalStorage ();

// check for an ID and use that to save to local storage - maybe make that a key
// function localStorageNineAm(event) {
//     event.preventDefault();
//     var taskLocal = nineAmTask.value
//     localStorage.setItem("text9", taskLocal);
//     console.log("text9", taskLocal);
// }
// function displayLocalStorage () {
//     var displayTask = localStorage.getItem("text9");
//     $("#text9").append(displayTask);
// }
// displayLocalStorage ();

// buttonNine.addEventListener('click', localStorageNineAm);

