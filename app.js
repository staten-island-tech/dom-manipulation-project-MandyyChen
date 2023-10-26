const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2"),
    //select the textbox
    //select ALL the h2s in one property
};
    

DOMSelectors.form.addEventListener("submit", function (event) {
event.preventDefault();

document
    .querySelector(".card")
    .insertAdjacentHTML(    
    "afterbegin", 
    `<div class="card" id="box">
     <h2 class="card-title"> ${DOMSelectors.firstName.value} </h2>
     <img src="Album.jpg" alt="Red" class="card-image">
     <button class="button"> Remove </button></div>`)

    DOMSelectors.h2s.forEach((el) => (el.textContent = DOMSelectors.firstName.value));
});


/*
    DOMSelectors.h2s.forEach(
        (el) => (el.textContext = DOMSelectors.firstName.value));
//const Album = makeAlbum()
    //addCard(Album)
});

     document
    .insertAdjacentHTML(` <input type="text" name="firstName" class="first-name"/>`
   
    ); */
