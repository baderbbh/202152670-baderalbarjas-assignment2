const themeToggle = document.getElementById("theme-toggle");

function updateThemeButton(isDarkMode) {
  if (isDarkMode) {
    themeToggle.textContent = "Light mode";
    themeToggle.setAttribute("aria-label", "Switch to light mode");
  } else {
    themeToggle.textContent = "Dark mode";
    themeToggle.setAttribute("aria-label", "Switch to dark mode");
  }
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  updateThemeButton(true);
}

themeToggle.addEventListener("click", function () {
  const isDarkMode = document.body.classList.toggle("dark-theme");

  if (isDarkMode) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  updateThemeButton(isDarkMode);
});
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  formStatus.textContent = "Thank you! Your message has been submitted successfully.";

  contactForm.reset();
});
document.querySelectorAll(".project-details-btn").forEach(function (button) {
  const details = document.getElementById(
    button.getAttribute("aria-controls")
  );
  const projectName = button.dataset.project;


  if (!details) {
    return;
  }

  button.addEventListener("click", function () {
    const showDetails = details.hidden;

    details.hidden = !showDetails;
    button.setAttribute("aria-expanded", String(showDetails));
    button.textContent = `${showDetails ? "Hide" : "Show"} ${projectName} details`;
  });
});