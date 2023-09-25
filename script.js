// theme-switcher.js

function toggleStylesheet() {
    const checkbox = document.getElementById("toggleStylesheet");
    const stylesheet = document.getElementById("stylesheet");

    // Check if the user has a saved theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");

    // Set the theme based on the saved preference or default to "style.css"
    stylesheet.href = savedTheme === "style1.css" ? "style1.css" : "style.css";

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            stylesheet.href = "style.css";
            localStorage.setItem("theme", "style.css"); // Save the theme preference
        } else {
            stylesheet.href = "style1.css";
            localStorage.setItem("theme", "style1.css"); // Save the theme preference
        }
    });
}

// Call the function to apply the theme
toggleStylesheet();
