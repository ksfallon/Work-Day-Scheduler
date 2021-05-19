// function localStorageNineAm(event) {
//     event.preventDefault();

//     var taskInput = $(this.parentNode).children('.time-event').attr('id');
//     var taskLocal = $(this.parentNode).children('.time-event').val();

//     localStorage.setItem(taskInput, taskLocal);
//     console.log(taskInput, taskLocal);
// }

// buttonNine.addEventListener('click', localStorageNineAm);

// buttonTen.addEventListener('click', localStorageNineAm);

Array.from(hours).forEach(hour => {
    IDstring = hour.id,
    eventHour;
    if (IDstring) {
        eventHour = parseInt(IDstring);
    }
    if (eventHour){
        if (eventHour === currentHourEl) {
            setColor(hour, "red");
        }
    }
} )
