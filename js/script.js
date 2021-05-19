buttonNine = document.querySelector('#btn9')
nineAmTask = document.querySelector("#text9");
buttonTen = document.querySelector('#btn10')


var today = moment();
$("#currentDay").text(today.format('dddd, MMM do'));

// PSEUDO CODE FOR TIME/COLOR CHANGE
// using Moment.js create a variable that equals current hour only
var currentHourEl = moment().format('h');
// create a list of all of the ids(9,10,11,12,1,2,3,4,5) with the class "hour"
    // should i do parent(.row)child(class(.hour)(attr.id)append - not exactly but something like this?
    // create a for loop that creates this array
    // would length = 8 or 9?
var hours = $(".hour")
var IDstring = ""    
//Now need to compare each thing in string to currentHourEl
    //run through for loop again? 
    // create a single variable for general items in list? 
// if time listed is the current hour: make background color red
// if time listed already happened, in the past of current time: make background color grey
// if time listed is in the future, hasn't happened in comparison to current time: make background color green
// Need to create an array, that grabs the ids from every hour



// for (var i = 0; i < array.length; i++) {}
console.log(currentHourEl);
// function changeTextColor() {

// localStorage.setItem("current-Hour", currentHourEl);
//     var currentHourEl = localStorage.getItem("current-Hour");
//     var hourInput = $(this.parentNode).children('.hour').attr('id');

//     for (var i = 0; i < .length; i++) {}
//     if (currentHourEl == )

   
// };



function localStorageNineAm(event) {
    event.preventDefault();

    var taskLocal = nineAmTask.value

    localStorage.setItem("text9", taskLocal);
    console.log("text9", taskLocal);

}

function displayLocalStorage () {
    var displayTask = localStorage.getItem("text9");
    $("#text9").append(displayTask);
}

displayLocalStorage ();


buttonNine.addEventListener('click', localStorageNineAm);

