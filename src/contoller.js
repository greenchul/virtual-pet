(function exportController() {
  class Controller {
    constructor() {}
    renderPet() {
      const petDiv = document.getElementById("pet");
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
