var link = document.querySelector(".lead-form__start");
var hotelPopup = document.querySelector(".lead-form__popup");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    hotelPopup.classList.add("close");
    hotelPopup.classList.toggle("lead-form__popup_show");  
});


/*

var link = document.querySelector(".lead-form__start");
var hotelPopup = document.querySelector(".lead-form__popup");
var close = document.querySelector(".modal-close"); //Если есть кнопка закрыть
var login = hotelPopup.querySelector("[name="date-come"]");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    hotelPopup.classList.add("lead-form__popup_show");
    login.focus();
    console.log("Нажата кнопка регистрации в гостинице");
    
})

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    hotelPopup.classList.remove("modal-show")
})


*/

/*

var link = document.querySelector(".lead-form__start");
var hotelPopup = document.querySelector(".lead-form__popup");

var login = hotelPopup.querySelector("[name="date-come"]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    hotelPopup.classList.add("lead-form__popup_show");
    login.focus();
})

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    hotelPopup.classList.remove("lead-form__popup_show");

});


*/