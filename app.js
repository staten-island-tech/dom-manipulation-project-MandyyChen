const DOMSelectors = {
    form: document.querySelector("#form"),
    titleName: document.getElementById("title-name"),
    captionText: document.getElementById("caption-text"),
    imageLink: document.getElementById("image-link"),
    box: document.querySelector("#box"),
    card: document.querySelector(".card"),
    button: document.getElementById("btn"),
    //select the textbox
    //select ALL the h2s in one property
};
    

function addcard(){
    DOMSelectors.box.insertAdjacentHTML("afterend",
        `<div class="card" id="box">
        <h1 class="title-name"> ${DOMSelectors.titleName.value} </h1>
        <img src= "${DOMSelectors.imageLink.value}" alt="image" class="card-image">
        <h3 class="caption-text"> ${DOMSelectors.captionText.value} </h3>
        <button class="remove"> Remove </button>
        </div>`);
}

function removecard(){
    document.querySelectorAll(".remove").forEach((button) => {
       button.addEventListener("click", function(event){
           event.target.parentElement.remove();
       });
    });
}

function clearFields() {
   DOMSelectors.titleName.value ="";
   DOMSelectors.imageLink.value="";
   DOMSelectors.captionText.value="";
}

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    addcard();
    removecard();
    clearFields();
    });
    