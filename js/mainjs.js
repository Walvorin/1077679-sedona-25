var link = document.querySelector(".lead-form__start");

var searchHotel = document.querySelector(".lead-form__popup");
var form = document.querySelector("form");

var inCome = document.querySelector("[id=date-come]");

var outCome  = document.querySelector("[id=date-out]");

                                      
                                      

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    searchHotel.classList.toggle("lead-form__popup_show");
    inCome.focus();
});

form.addEventListener("submit"), function(evt) {
    
    if (!inCome.value || !outCome.value){
        evt.preventDefault();
        console.log("Нужно ввести дату заезда и выезда");
    }  
}
