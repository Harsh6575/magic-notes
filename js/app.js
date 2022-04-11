showNotes();

let addbtn = document.getElementById('addbtn');
var counter = 0;
addbtn.addEventListener("click", function (e) {
    counter++;
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    if (addTxt.value == '') {
        alert('please enter something in notes');
    } else {
        notesObj.push(addTxt.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addTxt.value = "";
    }

    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let html = "";

    notesObj.forEach(function (elements, index) {
        html += `
            <div class="note--card border-primary mb-3 my-2 mx-2" style = "max-width: 18rem;" > 
            <div class="card-header text-primary border-primary">Note ${index + 1}:-</div>
            <div class="card-body text-p accordion-body ">
            <div class="form-floating">
            <p class="card-text">${elements}</p>
            </div>
            <button class="btn btn-danger my-3" id="${index}" onclick="DeleteNotes(this.id)">Delete Note</button>
        </div>
    </div > `;
    });

    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `
        <div class="alert alert-warning d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div>
          🤐 You never Entered a note. Please add note.😁 
        </div>
      </div>`;
    }
}

function DeleteNotes(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let searchTxt = document.getElementById('searchTxt');
searchTxt.addEventListener("input", function () {
    let inputval = searchTxt.value.toLowerCase();
    let inputval1 = searchTxt.value.toUpperCase();
    let inputval2 = searchTxt.value;

    let noteCards = document.getElementsByClassName('note--card');
    Array.from(noteCards).forEach(function (elements) {

        let cardTxt = elements.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputval) || cardTxt.includes(inputval1) || cardTxt.includes(inputval2)) {
            elements.style.display = "block";
        } else {
            elements.style.display = "none";
        }
    })
});

var input = document.getElementById("addTxt");

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        if (input.innerHTML = '') {
            alert('add something');
        }
        else {
            event.preventDefault();
            document.getElementById("addbtn").click();
        }
    }
});
