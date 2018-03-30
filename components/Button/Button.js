// class Button {
//     constructor(element) {
//         this.element = element;
//         this.button = this.element.querySelector(".Button");

//         this.button.addEventListener("click", () => {
//             this.display
//         })
//     }
// }
function handleClick() {
    document.getElementById("Section--button").className = "hidden";
}

function handleClick() {
    document.getElementById('btn1').className = "hidden";
}

function handleClick() {
    document.getElementById('btn2').className = "hidden";
}
function handleClick() {
    document.getElementById('btn3').className = "hidden";
}

// function handleClick() {
//     document.getElementById('btn2').className = "hidden";
// }
// function handleClick() {
//     document.getElementById('btn3').className = "hidden";
// }



// var menuItems = document.querySelectorAll('.menu__item');
// menuItems[0].classList.add('hidden');

// Stack Overflow======
// document.getElementById('logoButton').onclick = function(event) {
//     document.getElementById('logo').className = "show";
//  }
 
//  document.getElementById('logo').onclick = function(event) {
//      document.getElementById('logo').className = "hidden";
//  }




//  DROPDOWN=========
// class Dropdown {
//     constructor(element) {
//       this.element = element;
//       this.button = this.element.querySelector(".Dropdown__button");
  
//       this.button.addEventListener("click", () => {
//         this.toggleContent();
//       });
//     }
  
//     toggleContent() {
//       this.element.classList.toggle("Dropdown--active");
//     }
//   }
  
//   let dropdowns = document.querySelectorAll(".Dropdown");
//   dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));