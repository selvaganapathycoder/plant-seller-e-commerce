function subscribe() {
    const emailInput = document.getElementById("email");
    if (emailInput.value.trim() === "") {
      alert("Please enter your email.");
    } else {
      alert(`Subscribed with ${emailInput.value}`);
      emailInput.value = "";
    }
  }

document.getElementById("login-button").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default anchor behavior
  window.location.href = "login.html"; // Redirect to the login page
});

document.querySelector('a[href="#footer"]').addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default anchor behavior
  document.getElementById('footer').scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the footer
});

document.querySelector('a[href="#products"]').addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default anchor behavior
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
});