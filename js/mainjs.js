var buttonShowForm = document.querySelector(".lead-form__start");

var openForm = document.querySelector(".lead-form__popup");
var form = document.querySelector("form");

var dateInCome = document.querySelector("[id=date-come]");

var dateOutCome  = document.querySelector("[id=date-out]");

var adult = openForm.querySelector("[name=adult]");
var children = openForm.querySelector("[name=children]");

var popupClose = document.querySelector(".map-navigation");


var isStorageSupport = true;
var storage = "";

try {
   storage = localStorage.getItem("adult");
   storage = localStorage.getItem("children");
 } catch (err) {
   isStorageSupport = false;
 }
                                      
                                      

buttonShowForm.addEventListener("click", function(evt) {
    evt.preventDefault();
    openForm.classList.toggle("lead-form__popup_show");
    popupClose.classList.remove("lead-form__popup_show");
    
    if(storage) {
        dateInCome.value = storage;
        dateOutCome.focus();
    } else {
        dateInCome.focus();
    }
});





form.addEventListener("submit"), function(evt) {
    
    if (!dateInCome.value || !dateOutCome.value){
        evt.preventDefault();
        console.log("Нужно ввести дату заезда и выезда");
    }  else {
        if (isStorageSupport) {
            localStorage.setItem("dateIn", "dateInCome")
            }
        
    }
}
