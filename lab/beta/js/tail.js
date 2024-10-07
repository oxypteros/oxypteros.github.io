"use strict";
console.log("Hello from the tail!");
/* Top Nav Active Link*/
const topNavActiveLink = document.getElementById("topNavActiveLink");
if (topNavActiveLink) {
  topNavActiveLink.classList.toggle("text-gray-900");
  topNavActiveLink.classList.toggle("text-base");
}
/* Sidebar Nav Menu */
const toggleSidebarBtn = document.getElementById("toggleSidebar");
const leftDevSidebar = document.getElementById("leftDevSidebar");
const leftDevSidebarTop = document.getElementById("leftDevSidebarTop");
const leftDevSidebarBottom = document.getElementById("leftDevSidebarBottom");
const sidebarSecLink = document.getElementById("sidebarSecLink");

// Function to update the active state of sidebarSecLink
function updateSidebarSecLink() {
  if (sidebarSecLink) {
    sidebarSecLink.classList.add("border-dev-500");
    sidebarSecLink.classList.remove("border-gray-200");
    sidebarSecLink.classList.add("font-normal");
  }
}

// Call this function to activate sidebarSecLink regardless of button
updateSidebarSecLink();

if (toggleSidebarBtn) {
  const toggleBtnIcn = document
    .getElementById("toggleBtnIcn")
    .querySelector("use");
  let btnIcnToc, btnIcnHam;
  let isTocOpen = false;

  function toggleTocState() {
    isTocOpen = !isTocOpen;
    leftDevSidebarTop.classList.toggle("-translate-x-full");
    leftDevSidebar.classList.toggle("-translate-x-full");
    leftDevSidebarBottom.classList.toggle("-translate-x-full");
    toggleSidebarBtn.setAttribute("aria-expanded", isTocOpen.toString());
    // Change Btn Icons and inert state
    if (isTocOpen) {
      let btnIcn = toggleBtnIcn.getAttribute("xlink:href");
      if (btnIcn === "#list-tree") {
        btnIcnToc = btnIcn;
      }
      if (btnIcn === "#menu") {
        btnIcnHam = btnIcn;
      }

      toggleBtnIcn.setAttribute("xlink:href", "#close");
      document.querySelector("article").setAttribute("inert", "");
    } else {
      if (btnIcnHam) {
        toggleBtnIcn.setAttribute("xlink:href", "#menu");
      }
      if (btnIcnToc) {
        toggleBtnIcn.setAttribute("xlink:href", "#list-tree");
      }

      document.querySelector("article").removeAttribute("inert");
    }
  }

  // Toc Nav Menu Button
  toggleSidebarBtn.addEventListener("click", toggleTocState);

  // 4. Toc Nav Menu Esc - close the menu and return focus to the button
  document.addEventListener("keydown", (e) => {
    if (isTocOpen && e.key === "Escape") {
      toggleTocState();
      toggleSidebarBtn.focus(); // Return focus to the button
    }
  });

  // 5. Optional: Trap focus within the sidebar when it is open
  document.addEventListener("keydown", (e) => {
    if (isTocOpen && e.key === "Tab") {
      const focusableElements = leftDevSidebar.querySelectorAll("a, button");
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      // If Shift+Tab, focus last element (loop back)
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }

      // If Tab, focus first element (loop back)
      if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  });

  // 6. Close the menu when clicking outside of the sidebar
  document.addEventListener("click", (e) => {
    if (
      isTocOpen &&
      !leftDevSidebar.contains(e.target) &&
      !toggleSidebarBtn.contains(e.target)
    ) {
      toggleTocState();
    }
  });
}