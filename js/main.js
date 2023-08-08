// The container function
$(document).ready(function () {
  // Get The elements.
  let progressBar = document.querySelectorAll(".progress-bar");
  let skillBar = $("#skills")[0];
  let imgProfileContainer = $(".imgProfile-container")[0];
  let aboutMe = $(".about-me")[0];
  let skillsHeader = $("#skillsHeader")[0];
  let form = $("form")[0];
  let userMessage = $("textarea")[0];
  let name = $("[type = 'text']")[0];
  let email = $("[type = 'email']")[0];
  let characterCounter = $(".counter")[0];
  let txtAreaMaxlength = userMessage.getAttribute("maxlength");

  /*  ------------------  Call textArea counter function everytime the page reloads    -------------------- */
  textareaCounter();

  /* ---------------------------------------  TextArea counter function ------------------------------------ */
  function textareaCounter() {
    characterCounter.innerText = `${userMessage.value.length} / ${txtAreaMaxlength}`;
    if (userMessage.value.length == 220) {
      $("#counter-pop").fadeIn(100).fadeOut(4500);
    }
  }
  /*  ------------------  Call textArea counter function everytime the user hits the keyboard to write the message   -------------------- */
  userMessage.addEventListener("keyup", textareaCounter);

  /* ---------------------------------------  Typing function of  the personal Data ------------------------------------ */
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

  // ------------------------>> Form Validation function [1].

  form.addEventListener("submit", (e) => {
    let fieldsSatisfied = true;
    if (!fieldsSatisfied) {
      e.preventDefault();
    }

    if (name.value === "" || name.value.length <= 2 || name.value === null) {
      $("#name-pop").fadeIn(500, function () {
        $("#name-pop").fadeOut(5500);
      });
      fieldsSatisfied = false;
    } else if (
      userMessage.value.length < 10 ||
      userMessage.value === "" ||
      userMessage.value === null
    ) {
      $("#msg-pop").fadeIn(500, function () {
        $("#msg-pop").fadeOut(5500);
      });
      fieldsSatisfied = false;
    } else {
      try {
        sendMessage();
      } catch (error) {
        alert(
          "OOPS! message hasn't beent sent .. You can text me on Telegram or Linkedin or try again later."
        );
        console.log(error);
      }
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
        if (res.status === 200 || res.text === "OK") {
          alert("message has beent sent successfully");
        } else {
          throw "Something went wrong while sending the message.";
        }
      });
  }

  // The end of onreload function
});
