// Welcome message
window.addEventListener("load", function () {
    console.log("Welcome to GDG on Campus RIT Hassan!");
});

// Navigation click interaction
document.querySelectorAll("nav a").forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("Navigating to: " + link.textContent);
    });
});

// Interactive button
document.querySelector(".btn").addEventListener("click", function() {
    alert("Welcome to the GDG RIT Hassan Community!");
});

