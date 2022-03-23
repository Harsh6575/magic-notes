let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);

    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";

    notesObj.forEach(function (elements, index) {
        html += `
            <div class="card border-primary mb-3 my-2 mx-2" style = "max-width: 18rem;" > 
            <div class="card-header text-primary border-primary">Note ${index + 1}:-</div>
            <div class="card-body text-p accordion-body ">
            <div class="form-floating">
            <p class="card-text">${elements}</p>
            </div>
            <button href="#" class="btn btn-primary my-3" id="addbutton">Delete Note</button>
        </div>
    </div > `;
    });

    let notesElm = document.getElementById('notes');
    if(notes.length!=0){
        notesElm.innerHTML = html;
    }

}