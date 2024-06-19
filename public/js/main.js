// The container function
$(document).ready(function () {
  // Get The elements.
  let progressBar = document.querySelectorAll(".progress-bar");
  let skillBar = $("#skills")[0];
  let imgProfileContainer = $(".imgProfile-container")[0];
  let aboutMe = $(".about-me")[0];
  let skillsHeader = $('#skillsHeader')[0];
  let form = $("form")[0];
  let userMessage = $("textarea")[0];
  let name = $("[type = 'text']")[0];
  let email = $("[type = 'email']")[0];
  let characterCounter = $('.counter')[0];
  let maxlength = userMessage.getAttribute('maxlength');

  /*  ------------------  Call textArea counter function everytime the page reloads    -------------------- */
  textareaCounter();

  /* ---------------------------------------  TextArea counter function ------------------------------------ */
 function textareaCounter() {
   characterCounter.innerText = `${userMessage.value.length} / ${maxlength}`; 
   if (userMessage.value.length == 220) {
     $('#counter-pop').fadeIn(100).fadeOut(4500);
   }
  }
  /*  ------------------  Call textArea counter function everytime the user hits the keyboard to write the message   -------------------- */
  userMessage.addEventListener('keyup', textareaCounter);

  /* ---------------------------------------  Typing function ------------------------------------ */
  new Typed(".personalData", {
    strings: [
      "",
      "my name is aya abdelghany",
      "i'm a web developer",
      "i'm a frontEnd developer with React",
    ],
    smattBackspace: true,
    typeSpeed: 110,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 500,
  });
  /* ---------------------------------------  Typing function End------------------------------------ */

  
  /* ---------------------------------------  Intersection Observer function ------------------------------------ */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting
          ? entry.target.classList.add("active")
          : entry.target.classList.remove("active");
      });
    },
    {
      threshold: 0.25,
    }
  );

  progressBar.forEach((bar) => {
    observer.observe(bar);
  });

  observer.observe(skillsHeader);
  observer.observe(aboutMe);
  observer.observe(skillBar);
  observer.observe(imgProfileContainer);

  /* ---------------------------------------  Intersection Oserver function End------------------------------------ */

  /*   ------------------------------------------   resivenig messages functions---------------------------------------------------*/

  // ------------------------>> Send Message function[2].
  


  // The end of onreload function
});
