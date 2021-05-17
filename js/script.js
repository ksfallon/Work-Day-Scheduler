buttonNine = document.querySelector('#btn-nine')
nineAmTask = document.querySelector("#nine-am");


function localStorageNineAm(event) {
    event.preventDefault();

    var eventNine = nineAmTask.value;

    var localnineAm = JSON.parse(localStorage.getItem("nineAM")) || [];
    localnineAm.push(eventNine)
    localStorage.setItem("nineAM", JSON.stringify(localnineAm));
    console.log("nineAM", localnineAm);
}

buttonNine.addEventListener('click', localStorageNineAm);