$(document).ready(() => {
   // Getting references to our form and input
   const signUpForm = $("form.signup");
   const emailInput = $("input#email-input");
   const passwordInput = $("input#password-input");
   const nameInput = $("input#name-input");
   const sfxRight = new Audio("assets/sfx/correct.wav");
   const sfxWrong = new Audio("assets/sfx/incorrect.wav");


   // When the signup button is clicked, we validate the email and password are not blank
   signUpForm.on("submit", (event) => {
      event.preventDefault();
      const userData = {
         email: emailInput.val().trim(),
         password: passwordInput.val().trim(),
         name: nameInput.val().trim()
      };

      if (!userData.email || !userData.password || !userData.name) {
         sfxWrong.play();
         alert("Please fill out all the fields!");
         return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.email, userData.password, userData.name);
      emailInput.val("");
      passwordInput.val("");
      nameInput.val("");

      sfxRight.play();
   });

   // Does a post to the signup route. If successful, we are redirected to the members page
   // Otherwise we log any errors
   function signUpUser(email, password, name) {
      $.post("/api/signup", {
         email: email,
         password: password,
         name: name
      })
         .then((data) => {
            window.location.replace("/members");
            console.log(data);
            // If there's an error, handle it by throwing up a bootstrap alert
         })
         .catch(handleLoginErr);
   }

   function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
   }
});
