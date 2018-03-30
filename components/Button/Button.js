const buttons = document.querySelector('.Buttons');

const remove = (event) => {
  const child = event.target;
  const parent = event.target.parentNode
  parent.removeChild(event.target);
}

for(let i = 0; i < buttons.children.length; i++){
  buttons.children[i].addEventListener('click', remove);
}

console.log(buttons);

// class ButtonItems {
//     constructor(element) {
//         this.element = element;
//         this.element.addEventListener('click', () => {this.selected()})
//     }
//     selected() {
//         this.element.classList.add('Button-selected');
//     }
// }

// buttons = new ButtonItems(buttons);
// // buttons = Array.from(buttons).map(buttons => new ButtonItems(buttons));
// console.log(buttons);