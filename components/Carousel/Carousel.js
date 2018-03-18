class CarouselNode {
  constructor(item) {
    this.carouselItem = item;
    this.prev = null;
    this.next = null;
  }

  activate() {
    this.carouselItem.classList.add("Carousel__item-focused");
  }

  deactivate() {
    this.carouselItem.classList.remove("Carousel__item-focused");
  }

  isActive() {
    return this.carouselItem.classList.contains("Carousel__item-focused");
  }
}


class CarouselList {
  constructor(carousel) {
    this.carousel = carousel;
    this.head = null;
    this.tail = null;
  }

  add(item) {
    let carouselNode = new CarouselNode(item);
    if (this.head === null) {
      this.head = this.tail = carouselNode;
    } else {
      this.tail.next = carouselNode;
      carouselNode.prev = this.tail;
      this.tail = carouselNode;
    }
  }

  activeNode() {
    let currentNode = this.head;
    if (currentNode.isActive()) {
      return currentNode;
    }
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      if (currentNode.isActive()) {
        return currentNode;
      }
    }
  }
}


class Carousel {
  constructor(carousel) {
    this.carouselList = new CarouselList(carousel);
    Array.from(document.querySelectorAll(".Carousel__item")).forEach(item => {
      this.carouselList.add(item);
    });
    let leftArrow = document.querySelector(".Carousel__arrow-left");
    let rightArrow = document.querySelector(".Carousel__arrow-right");
    leftArrow.addEventListener("click", () => this.displayPrevious(this.carouselList));
    rightArrow.addEventListener("click", () => this.displayNext(this.carouselList));
  }

  displayPrevious(cList) {
    let displayedNode = cList.activeNode();
    if (displayedNode.prev !== null) {
      displayedNode.deactivate();
      displayedNode = displayedNode.prev;
      displayedNode.activate();
    }
  }

  displayNext(cList) {
    let displayedNode = cList.activeNode();
    if (displayedNode.next !== null) {
      displayedNode.deactivate();
      displayedNode = displayedNode.next;
      displayedNode.activate();
    }
  }
}


let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));