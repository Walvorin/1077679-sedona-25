

//var btnSearchForm = document.querySelector(".lead-form__start"); 
//var showForm = document.querySelector(".lead-form__popup");
//
//var map = document.querySelector(".map-navigation");
//var dateCome = showForm.querySelector("[name=date-come]");
//var dateOut = showForm.querySelector("[name=date-out]");
//var totalAdult = showForm.querySelector("[name=adult]");
//var totalChild = showForm.querySelector("[name=children]");
//
//var isStorageSupport = true;
//var storage1 = "";
//var storage2 = "";
//var storage3 = "";
//var storage4 = "";
//
//try {
//   storage1  = localStorage.getItem("dateCome");
//   storage2  = localStorage.getItem("dateOut");
//   storage3  = localStorage.getItem("totalAdult");
//   storage4  = localStorage.getItem("totalChild");
// } catch (err) {
//   isStorageSupport = false;
// }
//
//showForm.classList.add("form-close");
//
//btnSearchForm.addEventListener("click", function (evt) {
//    evt.preventDefault();
//    showForm.classList.toggle("form-show");
//  });
//
//
//
//window.addEventListener("keydown", function (evt) {
//    if (evt.keyCode === 27) {
//      evt.preventDefault();
//      if (showForm.classList.contains("form-close")) {
//        showForm.classList.remove("form-show");
//        showForm.classList.remove("enter-error");
//      }
//    }
//  });
//
//showForm.addEventListener("submit", function(evt){
//    evt.preventDefault();
//});






var btnSearchForm = document.querySelector(".lead-form__start"); 
var showForm = document.querySelector(".lead-form__popup");

var map = document.querySelector(".map-navigation");
var dateCome = showForm.querySelector("[name=date-come]");
var dateOut = showForm.querySelector("[name=date-out]");
var totalAdult = showForm.querySelector("[name=adult]");
var totalChild = showForm.querySelector("[name=children]");

var isStorageSupport = true;
var storage1 = "";
var storage2 = "";
var storage3 = "";
var storage4 = "";

try {
   storage1  = localStorage.getItem("dateCome");
   storage2  = localStorage.getItem("dateOut");
   storage3  = localStorage.getItem("totalAdult");
   storage4  = localStorage.getItem("totalChild");
 } catch (err) {
   isStorageSupport = false;
 }

showForm.classList.add("form-close");

btnSearchForm.addEventListener("click", function(evt){
    evt.preventDefault();
    showForm.classList.toggle("form-show");
    dateCome.focus();
    if (storage1) {
        dateCome.value = storage1;
        dateOut.focus();
    } else if (storage2) {
        dateOut.value = storage2;
        totalAdult.focus();   
    } else if (storage3) {
        totalAdult.value = storage3;
        totalChild.focus(); 
    } else if (storage4) {
        totalChild.value = storage4;
        totalChild.focus();
    };
});


showForm.addEventListener("submit", function(evt){
    if(!dateCome.value) {
        evt.preventDefault();
//        console.log("Вы забыли ввести поле Въезда");
        dateCome.classList.add("enter-error");
//        dateCome.focus();
    } else {
        localStorage.setItem("dateCome", dateCome.value);
        dateCome.classList.remove("enter-error");
    };
    if (!dateOut.value) {
        evt.preventDefault();
//        console.log("Вы забыли ввести поле Выезда");
        dateOut.classList.add("enter-error");
    } else {
        localStorage.setItem("dateOut", dateOut.value);
        dateOut.classList.remove("enter-error");
    };
    if (!totalAdult.value) {
        evt.preventDefault();
//        console.log("Вы забыли ввести поле Выезда");
        totalAdult.classList.add("enter-error");
//        dateOut.focus();
    } else {
        localStorage.setItem("totalAdult", totalAdult.value);
    };
    if (!totalChild.value) {
        evt.preventDefault();
//        console.log("Вы забыли ввести поле Выезда");
        totalChild.classList.add("enter-error");
//        dateOut.focus();
    } else {
        localStorage.setItem("totalChild", totalChild.value);
    };
    
});


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (showForm.classList.contains("form-close")) {
        showForm.classList.remove("form-show");
        showForm.classList.remove("enter-error");
      }
    }
  });