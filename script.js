  //
  const NavbarLinks = document.querySelector(".nav-links");

  document.querySelector("#burgir").onclick = () => {
    NavbarLinks.classList.toggle("active");
  };

  const burgir = document.querySelector("#burgir");

  document.addEventListener("click", function (e) {
    if (!burgir.contains(e.target) && !NavbarLinks.contains(e.target)) {
      NavbarLinks.classList.remove("active");
    }
  });
  //
  function scrollHeader() {
    const navbar = document.getElementById("navbar");
    if (this.scrollY >= 150) navbar.classList.add("scroll-header");
    else navbar.classList.remove("scroll-header");
  }
  window.addEventListener("scroll", scrollHeader);
  //
  const sections = document.querySelectorAll("section[id]");
  function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute("id");
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        const activeLink = document.querySelector(
          ".navbar .nav-links a[href*=" + sectionId + "]"
        );
        activeLink.classList.add("active-link");
        activeLink.style.backgroundColor = "white";
        activeLink.style.color = "transparent";
        activeLink.style.WebkitBackgroundClip = "text";
        activeLink.style.backgroundClip = "text";
      } else {
        const inactiveLink = document.querySelector(
          ".navbar .nav-links a[href*=" + sectionId + "]"
        );
        inactiveLink.style.backgroundColor = "";
        inactiveLink.style.color = "var(--primary)";
      }
    });
  }
  window.addEventListener("scroll", scrollActive);
  //
  window.addEventListener("scroll", reveal);
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  //
  // 
  // 
  // 
  // 
  // 
  function handleGetFormData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const zipCode = document.getElementById('zip-code').value;
    const status = document.getElementById('status').checked;

    const formData = {
      name: name,
      email: email,
      city: city,
      zipCode: zipCode,
      status: status,
    };

    return formData;
  }
  // ---------------------------------- //
  function isNumber(inputString) {
    for (let i = 0; i < inputString.length; i++) {
      if (isNaN(inputString[i])) {
        return false;
      }
    }
    return true;
  }
  // ---------------------------------- //
  function checkboxIsChecked() {
    const checkbox = document.getElementById("status");
    return checkbox.checked;
  }
  // ------------------------------------//
  function validateFormData(formData) {
    if (
      formData.name &&
      formData.email &&
      formData.city &&
      isNumber(formData.zipCode) &&
      checkboxIsChecked(formData.status)
    ) {
      return true;
    } else {
      return false;
    }
  }
  // ----------------------------------------//
  function submit() {
    const formData = handleGetFormData();
    if(validateFormData(formData)){
      document.getElementById('warning').textContent = "";
    }
    else{
      document.getElementById('warning').textContent = "Periksa form anda sekali lagi";
    }
  }

  document.querySelector('form').addEventListener("submit", event=>{
    event.preventDefault();
    submit();
  })