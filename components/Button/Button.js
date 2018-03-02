
let button = document.querySelectorAll(".Button");


// loop through the div class button
button.forEach((elements) => {
    // after loop assign each element with eventListener 
    elements.addEventListener("click", () => {
        // use toggle to assign class in html 
        elements.classList.toggle("Button--hide")
    });
});


 


// my attempt at trying to make a class 

// class Button {
//     constructor(element) {
//       this.element = element.querySelector(".Button");;
//      
  
//       this.element.addEventListener("click", () => {
//         this.remove();
//       });
//     }
  
//     remove() {
//       this.element.classList.toggle("Button--hide");
//     }
//   }
  
//   let button = document.querySelectorAll(".Button");
//   button = Array.from(button).map(buttons => new Button(buttons));

// could not get all the kinks worked out we love to make this work 














/*const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");

box1.addEventListener("click", (event) => {
  if(event.color === "red") {
    console.log("red");
  }

  if(event.color === "green") {
    console.log("green");
  }
});

box2.addEventListener("click", (event) => {
  event.color = "green";
});

box3.addEventListener("click", (event) => {
  event.color = "red";
}); */


/*
 class Traveler {
  constructor(element) {
    this.element = element;
    this.distance = 10;

    this.element.addEventListener("mousedown", () => {
      this.travelAway();
    });
  }

  travelAway() {
    const element = this.element;
    let distance = this.distance;
    this.interval = window.setInterval(() => {
      distance += 1;
      element.style.marginLeft = `${distance}px`;
    }, 10);
  }
}

let travelers = document.getElementsByClassName("block");
travelers = Array.from(travelers).map(traveler => {
  return new Traveler(traveler);
}); */