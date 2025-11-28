 function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
const form = document.getElementById("searchForm");
if (form){
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const dest = document.getElementById("destination").value;
  const check = document.getElementById("checkIn").value;
  const guests = document.getElementById("guests").value;

  if (!dest || !check || !guests) {
    alert("Please fill out all fields 🐰✨");
    return;
  }

  alert(`Searching cozy stays in ${dest} 🌸\nCheck-In: ${check}\nGuests: ${guests} 🧸`);
  });
}

// Highlight active nav link
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop(); // e.g. "deals.html"
  const navLinks = document.querySelectorAll(".nav_links a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage ||(currentPage === "" && link.getAttribute("href") === "explore.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active")
    }
  });
});

const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

   
    if (!fullname || !email || !password) {
      alert("Please fill out all fields 🐰✨");
      return;
    }
    if (!isValidEmail(email)) { // 
    alert("Please enter a valid email address for signup.");
    return;
  }

    if (!isValidEmail(email)) {
    alert("Please enter a valid email address for signin.");
    return;
  }

    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ name, email, password })
      });

      const result = await response.json();
      alert(result.message);
    } catch (err) {
      alert("Something went wrong ❌");
    }
  });
}

const signInForm = document.getElementById("signinForm");
if (signInForm) {
  signInForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Please enter both email and password 🐰✨");
      return;
    }
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    try {
      const response = await fetch("/signin", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email, password })
      });

      const result = await response.json();
      alert("Successfully signed in!");
    } catch (err) {
      alert("Something went wrong ❌");
    }
  });
}
const popup = document.getElementById("popup");
const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");

if (openBtn && popup && closeBtn)
openBtn.addEventListener("click", () => {
  popup.style.display = "flex";
  popup.setAttribute("aria-hidden", "false");
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
  popup.setAttribute("aria-hidden", "true");
});

