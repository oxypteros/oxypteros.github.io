(() => {
  "use strict"
  document.querySelector(".pi")?.addEventListener("click", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey) {
      window.location.href = "/lab";
    }
  });
})();