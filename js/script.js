const showToggle = document.querySelector(".show"),
   createPass = document.querySelector("#create"),
   confirmPass = document.querySelector("#confirm"),
   alertIcon = document.querySelector(".error-icon"),
   alertText = document.querySelector(".text");

// ========== SHOW HIDDEN PASSWORD ==========
showToggle.addEventListener("click", () => {
   if (createPass.type === "password" && confirmPass.type === "password") {
      createPass.type = "text";
      confirmPass.type = "text";
      showToggle.classList.replace("fa-eye-slash", "fa-eye");
      showToggle.style.color = "#4070f4";
   } else {
      createPass.type = "password";
      confirmPass.type = "password";
      showToggle.classList.replace("fa-eye", "fa-eye-slash");
      showToggle.style.color = "#a6a6a6";
   }
});

// ========== LENGTH PASSWORD VALIDATION ==========
createPass.addEventListener("input", () => {
   let createValue = createPass.value.trim();

   if (createValue == "") {
      alertText.innerText = "Enter atleast 8 character";
      alertIcon.style.display = "none";
   } else if (createValue.length < 8) {
      alertText.innerText = "Password too short";
      alertIcon.style.display = "block";
      alertIcon.style.color = "#d93025"; //merah
      alertIcon.classList.replace("fa-check-circle", "fa-exclamation-circle");
   } else {
      alertText.innerText = "Re-Type Password";
      alertIcon.style.display = "none";
   }
});

// ========== CONFIRM PASSWORD VALIDATION ==========
confirmPass.addEventListener("input", () => {
   let createValue = createPass.value.trim();
   let confirmValue = confirmPass.value.trim();

   if (confirmValue === createValue && createValue.length >= 8) {
      alertText.innerText = "Very Good";
      alertIcon.style.display = "block";
      alertIcon.style.color = "#32CD32"; //hijau
      alertIcon.classList.replace("fa-exclamation-circle", "fa-check-circle");
   } else if (createValue.length < 8) {
      alertText.innerText = "Password too short";
      alertIcon.style.display = "block";
      alertIcon.style.color = "#d93025"; //merah
      alertIcon.classList.replace("fa-check-circle", "fa-exclamation-circle");
   } else if (confirmValue !== createValue) {
      alertText.innerText = "Password didn't matched";
      alertIcon.style.display = "block";
      alertIcon.style.color = "#d93025"; //merah
      alertIcon.classList.replace("fa-check-circle", "fa-exclamation-circle");
   }
});
