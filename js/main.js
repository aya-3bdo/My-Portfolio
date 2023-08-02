// The container function
$(document).ready(function () {
  let progressBar = document.querySelectorAll(".progress-bar");
  let skillBar = document.querySelector(".skills-bars");
  let imgProfileContainer = $(".imgProfile-container")[0];
  let aboutMe = $(".about-me")[0];
  let mySkills = $(".skills-slice")[0];
  let skillsHeader = mySkills.firstElementChild.firstElementChild;
  let form = document.getElementsByTagName("form")[0];
  let userMessage = document.getElementsByTagName("textarea")[0];
  let name = document.querySelector('[type="text"]');
  let email = document.querySelector('[type="email"]');

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

  
  /* ---------------------------------------  Intersection Oserver function ------------------------------------ */
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

  // ------------------------>> Form Validation function [1].
  
  form.addEventListener("submit", (e) => {
    let fieldsSatisfied = true;
    if (!fieldsSatisfied) {
      e.preventDefault();
    }

    if (name.value === "" || name.value.length < 2) {
      $("#name-pop").fadeIn(500, function () {
        $("#name-pop").fadeOut(5500);
      });
      fieldsSatisfied = false;
    } else if (userMessage.value.length < 10 || userMessage.value === "") {
      $("#msg-pop").fadeIn(500, function () {
        $("#msg-pop").fadeOut(5500);
      });
      fieldsSatisfied = false;
    } else {
      sendMessage();
    }
  });

  // ------------------------>> Send Message function[2].
  
  function sendMessage() {
    let templateParams = {
      name: name.value,
      userMessage: userMessage.value,
      email: email.value,
    };

    const serviceID = "service_si3gfut";
    const templateID = "template_st8ov1q";
    const publicKey = "HlNRXzIkao7BJc09s";

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((res) => {
        console.log(res);
        res.status === 200 || res.text === "OK"
          ? alert("message has beent sent successfully")
          : alert(
              "OOPS! message hasn't beent sent .. You can text me on Telegram or Linledin or try again later."
            );
      })
      .catch((err) => console.log(err));
  }

  // The end of onreload function
});
