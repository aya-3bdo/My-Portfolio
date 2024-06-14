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
  let characterCounter = $(".counter")[0];
  let txtAreaMaxlength = userMessage.getAttribute("maxlength");

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

  /* ---------------------------------------  Intersection Observer function End  ------------------------------------ */

  /*   ------------------------------------------   recieving messages functions  ---------------------------------------------------*/

  // <<-----------------------------------------  ## Form Validation function [1] ##  ----------------------------------------->>

  form.addEventListener("submit", (e) => {
    if (!navigator.onLine) {
      alert("Please, check your internet connection.");
    }
    try {
      sendMessage();
    } catch (error) {
      alert(
        "OOPS! Your message hasn't been sent .. You can text me on Telegram or Linkedin or try again later."
      );
      console.log(error);
    }
  });

  // <<<-----------------------------------------  ## Send Message function[2] ##  ----------------------------------------->>>

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
          alert("Your message has been sent successfully");
          name.value = null;
          userMessage.value = null;
          email.value = null;
          characterCounter.innerText = "0/250";
        } else {
          throw "Something went wrong while sending the message.";
        }
      });
  }

  /*  ------------------  Call textArea counter function everytime the page reloads    -------------------- */
  // textareaCounter();

  /* ---------------------------------------  TextArea counter function ------------------------------------ */
  function textareaCounter() {
    characterCounter.innerText = `${userMessage.value.length} / ${txtAreaMaxlength}`;
  }
  /*  ------------------  Call textArea counter function everytime the user hits the keyboard to write the message   -------------------- */
  userMessage.addEventListener("keyup", textareaCounter);

  onload = () => {
    characterCounter.innerText = "0/250";
    userMessage.value = null;
    name.value = null;
    email.value = null;
  };

  // The end of onreload function
});
