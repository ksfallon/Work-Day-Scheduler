buttonNine = document.querySelector('#btn9')
nineAmTask = document.querySelector("#text9");
buttonTen = document.querySelector('#btn10')


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

