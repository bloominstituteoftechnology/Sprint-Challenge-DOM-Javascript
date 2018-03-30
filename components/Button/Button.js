
// function myFunction() {
//     var x = document.getElementById(".Button");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

// document.getElementById('x').style.visibility='hidden'; // hide

// class Hide {
//     constructor(element) {
//       this.element = element;
//       this.button = this.element.querySelector(".Button1");
  
//       this.button.addEventListener("click", () => {
//         this.hideContent();
//       });
//     }
  
//     hideContent() {
//     //   this.element.classList.toggle("Dropdown--active");
//     document.getElementById('Button1').style.visibility='hidden';
//     }
//   }
  
// //   let dropdowns = document.querySelectorAll(".Dropdown");
// //   dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));

class Hide {
    constructor(element) {
      this.element = element;
      this.button = this.element.querySelector(".Button");
  
      this.button.addEventListener("click", () => {
        this.hideContent();
      });
    }
  
    hideContent() {
      this.element.classList.toggle("Button");
    }
  }
  
  let hidden = document.querySelectorAll(".Button");
  hidden = Array.from(hidden).map(hidden => new Hide(hidden));