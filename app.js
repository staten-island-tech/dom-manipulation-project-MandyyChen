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
    .insertAdjacentHTML(` <input type="text" name="firstName" class="first-name"/>`

    );
});
/*
    DOMSelectors.h2s.forEach(
        (el) => (el.textContext = DOMSelectors.firstName.value)
    );
});