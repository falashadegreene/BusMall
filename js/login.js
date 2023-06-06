"use strict";

// create form document

let forms = document.querySelector(".forms"),
  pwShowHide = document.querySelector(".eye-icon"),
  links = document.querySelector(".link");

// create function to show and hide password
pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach(password => {
      if(password.type === "password"){
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
     })
  })
})


// 
