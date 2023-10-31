const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2"),
    button: document.querySelector(".button"),
    imgs: document.querySelectorAll("img"),
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


//clearFields()
DOMSelectors.button.addEventListener("click", function (clear) {
    clear.preventDefault();
    function clearfields(){
    DOMSelectors.h2s.forEach((el) => (el.textcontent = ""));

}
clearfields();
});
//const Album = makeAlbum()
//addCard(Album)

//addRemoveButtons

function remove(){
    let butns = document.querySelector("button");
    butns.forEach((button)=>button.addEventListener("click", function (event) {
        console.log(event.target.parentElement);
      })
   );
}

remove();
