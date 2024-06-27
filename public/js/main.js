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
      "my name Jane Doe",
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
