class Carousel {
    constructor(el) {
      this.element = el;
      this.items = document.querySelectorAll('.Carousel__item')
      this.rightButton = document.querySelectorAll('.Carousel__arrow-right')
      this.leftButton = document.querySelectorAll('.Carousel__arrow-left')
      this.index = 0;
      this.rightButton.addEventListener('click', () => { this.clickRight() })
      this.leftButton.addEventListener('click', () => { this.clickLeft() })  
    }

    clickRight() {
        if (this.index + 1 === this.items.length) {
            return;
        }

        const index = this.index;
        this.items[index].classList.remove('Carousel__item-focused');
        this.items[index + 1].classList.add('Carousel__item-focused');
        this.index++;

    }

    clickLeft() {
        if (this.index === 0) {
            return;
        }

        const index = this.index;
        this.items[index].classList.remove('Carousel__item-focused');
        this.items[index - 1].classList.add('Carousel__item-focused');
        this.index--

    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousel).map(carousel => new Carousel(carousel));