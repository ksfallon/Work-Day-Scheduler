buttonNine = document.querySelector('#btn9')
nineAmTask = document.querySelector("#text9");
allButtons = document.querySelector(".saveBtn")


var today = moment();
$("#currentDay").text(today.format('dddd, MMM Do'));

// PSEUDO CODE FOR TIME/COLOR CHANGE
// using Moment.js create a variable that equals current hour only

var hours = $(".hour")
var IDstring = []   

function changeTextColor() {
    
    var currentHourEl = moment().format("HH");
 
    $(".description").each(function() {

        var blockId = parseInt($(this).attr("id").split("-")[1])
        blockId
        if (blockId < currentHourEl){
            $(this).addClass("past")
    
        } else if (currentHourEl == blockId){
            $(this).removeClass("past")
            $(this).addClass("present")
    
        } else {
           $(this).removeClass("past")
           $(this).removeClass("present")
           $(this).addClass("future")
        }
    })
    console.log(currentHourEl)
};

changeTextColor()

// create an array of all of the ids(9,10,11,12,1,2,3,4,5) with the class "hour"
    // should i do parent(.row)child(class(.hour)(attr.id)append - not exactly but something like this?
    //maybe instead its a push?
    // create a for loop that creates this list:
    // for (var i = 0; i < 9; i++)
    // would length = 8 or 9?
 
//Now need to compare each thing in string to currentHourEl
    //run through for loop again? 
    // create a single variable for general items in list? 
// if time listed is the current hour: make background color red
// if time listed already happened, in the past of current time: make background color grey
// if time listed is in the future, hasn't happened in comparison to current time: make background color green
// Need to create an array, that grabs the ids from every hour



// for (var i = 0; i < 9; i++) {}

// function changeTextColor() {

// localStorage.setItem("current-Hour", currentHourEl);
//     var currentHourEl = localStorage.getItem("current-Hour");
//     var hourInput = $(this.parentNode).children('.hour').attr('id');

//     for (var i = 0; i < .length; i++) {}
//     if (currentHourEl == )

   
// };



// var eventList = []
// // check for an ID and use that to save to local storage - maybe make that a key
// function localSAllEvents(event) {
//     event.preventDefault();

//     console.log(event);



// }

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

