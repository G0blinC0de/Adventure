
  
  // -- Event Listener Example --
  window.onload = function() {
    const shoutForm = function(event) {
      event.preventDefault();
      let phrase = document.getElementById("phrase").value;
      let shoutSpan = document.querySelector("span#shout");
      shoutSpan.innerText = phrase.toUpperCase();
    }
  
    let form = document.querySelector("form");
    form.addEventListener("submit", shoutForm);
    
    const reset = document.getElementById("reset"); 
    reset.addEventListener("click", function() {
      let shoutSpan = document.querySelector("span#shout");
      shoutSpan.innerText = "_____";
    });
    

  };
  

  // -- Shout Box --
  /* 
  window.onload = function() {
  let form = document.getElementById("shoutForm");
    form.onsubmit = function(event) {
      event.preventDefault();
       let phrase = document.getElementById("phrase").value;
      
      const shoutSpan = document.querySelector("span#shout");
  
      shoutSpan.innerText = phrase.toUpperCase();
        reset();
    };
      */

      // -- Adventure Mad Libs --

   /* let form = document.querySelector("form");
    form.onsubmit = function(event) {
      event.preventDefault();
    
      // in this section we get the value for each form input
      const person1Input = document.getElementById("person1Input").value;
      const person2Input = document.getElementById("person2Input").value;
      const animalInput= document.getElementById("animalInput").value;
      const exclamationInput = document.getElementById("exclamationInput").value;
      const verbInput = document.getElementById("verbInput").value;
      const nounInput = document.getElementById("nounInput").value;
      
      // then we set the story variables to the values we got from the form
      document.querySelector("span#person1a").innerText = person1Input;
      document.querySelector("span#person1b").innerText = person1Input;
      document.querySelector("span#person1c").innerText = person1Input;
      document.querySelector("span#person2a").innerText = person2Input;
      document.querySelector("span#person2b").innerText = person2Input;
      document.querySelector("span#animal").innerText = animalInput;
      document.querySelector("span#verb").innerText = verbInput;
      document.querySelector("span#noun").innerText = nounInput;
      document.querySelector("span#exclamation").innerText = exclamationInput;
      
      document.querySelector("div#story").removeAttribute("class");
  
      
    }; */

    // -- This Function Resets the phrase chatbox window 
      // -- after the submission has been logged
   /* };
  function reset() {
    document.getElementById("phrase").value = ""
  } */