'use strict';
console.log('Hello from the tail.');
/* Toast menu for mobile */
const toggleMenu = document.getElementById("toggleMenu");
  const rail = document.getElementById("rail");
  const toggleIcon = document.getElementById("toggleIcon");

  // Function to toggle the menu open/close
  const toggleRailMenu = () => {
    rail.classList.toggle("-translate-x-full");
    rail.classList.toggle("translate-x-0");

    // Change the button icon
    if (rail.classList.contains("-translate-x-full")) {
      toggleIcon.setAttribute("href", "#menu"); // Show menu icon
    } else {
      toggleIcon.setAttribute("href", "#close"); // Show close icon
    }
  };

  // Toggle the menu when the button is clicked
  toggleMenu.addEventListener("click", toggleRailMenu);

  // Close menu when clicking outside the rail
  document.addEventListener("click", (event) => {
    if (
      !rail.classList.contains("-translate-x-full") && // If the menu is open
      !rail.contains(event.target) && // And the click is outside the menu
      !toggleMenu.contains(event.target) // And it's not on the toggle button
    ) {
      toggleRailMenu(); // Close the menu
    }
  });

  // Close menu when pressing ESC key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !rail.classList.contains("-translate-x-full")) {
      toggleRailMenu(); // Close the menu if ESC is pressed and the menu is open
    }
  });

  
/* END Toast menu for mobile */