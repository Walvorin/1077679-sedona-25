

var btnSearchForm = document.querySelector(".lead-form__start"); 
var showForm = document.querySelector("form.lead-form__popup");

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

btnSearchForm.addEventListener("click", function (evt) {
    evt.preventDefault();
    showForm.classList.toggle("form-show");
    if (storage1) {
        dateCome.value = storage1;
        dateOut.focus();
    } else {
        dateCome.focus();
    }
    
  });


//showForm.addEventListener("submit", function(evt){
//    if (!dateCome.value || !dateOut.value || !totalAdult.value || !totalChild.value) {
//        evt.preventDefault();
//        dateCome.classList.remove("modal-error");
//        dateCome.offsetWidth = dateCome.offsetWidth;
//        
//        dateOut.classList.remove("modal-error");
//        dateOut.offsetWidth = dateOut.offsetWidth;
//        
//        totalAdult.classList.remove("modal-error");
//        totalAdult.offsetWidth = totalAdult.offsetWidth;
//        
//        totalChild.classList.remove("modal-error");
//        totalChild.offsetWidth = totalChild.offsetWidth;
//        
//        
//        dateCome.classList.add("modal-error");
//        
//        dateOut.classList.add("modal-error");
//        
//        totalAdult.classList.add("modal-error");
//        
//        totalChild.classList.add("modal-error");
//        
//    } else {
//        if (isStorageSupport){
//            localStorage.setItem("dateCome", dateCome.value);
//            localStorage.setItem("dateOut", dateOut.value);
//            localStorage.setItem("totalAdult", dateCome.value);
//            localStorage.setItem("totalChild", totalChild.value);
//            }
//        
//    }
//});

showForm.addEventListener("submit", function(evt){
    if(!dateCome.value) {
        evt.preventDefault();
//        console.log("Вы забыли ввести поле Въезда");
        dateCome.classList.remove("enter-error");
        dateCome.offsetWidth = dateCome.offsetWidth;
        dateCome.classList.add("enter-error");
        dateCome.focus();
    } else {
        localStorage.setItem("dateCome", dateCome.value);
        dateCome.classList.remove("enter-error");
    };
    if (!dateOut.value) {
        evt.preventDefault();
//        console.log("Вы забыли ввести поле Выезда");
        dateOut.classList.remove("enter-error");
        dateOut.offsetWidth = dateOut.offsetWidth;
        dateOut.classList.add("enter-error");
        dateOut.focus();
    } else {
        localStorage.setItem("dateOut", dateOut.value);
        dateOut.classList.remove("enter-error");
    };
    if (!totalAdult.value) {
        evt.preventDefault();
//        console.log("Вы забыли ввести поле Выезда");
        totalAdult.classList.remove("enter-error");
        totalAdult.offsetWidth = totalAdult.offsetWidth;
        totalAdult.classList.add("enter-error");
        totalAdult.focus();
    } else {
        localStorage.setItem("totalAdult", totalAdult.value);
        totalAdult.classList.remove("enter-error");
    };
    if (!totalChild.value) {
        evt.preventDefault();
//        console.log("Вы забыли ввести поле Выезда");
        totalChild.classList.remove("enter-error");
        totalChild.offsetWidth = totalChild.offsetWidth;
        totalChild.classList.add("enter-error");
        totalChild.focus();
    } else {
        localStorage.setItem("totalChild", totalChild.value);
        totalChild.classList.remove("enter-error");
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
//btnSearchForm.addEventListener("click", function(evt){
//    evt.preventDefault();
//    showForm.classList.toggle("form-show");
//    dateCome.focus();
//    if (storage1) {
//        dateCome.value = storage1;
//        dateOut.focus();
//    } else if (storage2) {
//        dateOut.value = storage2;
//        totalAdult.focus();   
//    } else if (storage3) {
//        totalAdult.value = storage3;
//        totalChild.focus(); 
//    } else if (storage4) {
//        totalChild.value = storage4;
//        totalChild.focus();
//    };
//});
//
//
//showForm.addEventListener("submit", function(evt){
//    if(!dateCome.value) {
//        evt.preventDefault();
////        console.log("Вы забыли ввести поле Въезда");
//        dateCome.classList.add("enter-error");
////        dateCome.focus();
//    } else {
//        localStorage.setItem("dateCome", dateCome.value);
//        dateCome.classList.remove("enter-error");
//    };
//    if (!dateOut.value) {
//        evt.preventDefault();
////        console.log("Вы забыли ввести поле Выезда");
//        dateOut.classList.add("enter-error");
//    } else {
//        localStorage.setItem("dateOut", dateOut.value);
//        dateOut.classList.remove("enter-error");
//    };
//    if (!totalAdult.value) {
//        evt.preventDefault();
////        console.log("Вы забыли ввести поле Выезда");
//        totalAdult.classList.add("enter-error");
////        dateOut.focus();
//    } else {
//        localStorage.setItem("totalAdult", totalAdult.value);
//    };
//    if (!totalChild.value) {
//        evt.preventDefault();
////        console.log("Вы забыли ввести поле Выезда");
//        totalChild.classList.add("enter-error");
////        dateOut.focus();
//    } else {
//        localStorage.setItem("totalChild", totalChild.value);
//    };
//    
//});
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