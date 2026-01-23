
var typed= new Typed(".text",{
    strings: ["FRONTEND DEVELOPER", "WEB DESIGN", "WEB DEVELOPER"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

// alert("hello");
 let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
    navbar.classList.toggle('active');
  }
   document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // page reload rokta hai

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    alert("Thank you " + name + "! Your message has been received.");

    // form clear karne ke liye
    document.getElementById("contactForm").reset();
  });
