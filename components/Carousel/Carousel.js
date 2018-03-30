class Carousel {
  /**
   * Creates an instance of Carousel.
   * @param {DOMNode} carousel
   * @memberof Carousel
   */
  constructor(carousel) {
    this.carousel = carousel
    this.items = this.getItems('Carousel__item')
    this.focus = this.items[0]
    this.focusClass = 'Carousel__item-focused'
    this.index = 0

    // find a better way to do this
    this.left = document.querySelector('.Carousel__arrow-left')
    this.right = document.querySelector('.Carousel__arrow-right')
    this.left.addEventListener('click', this.previous.bind(this))
    this.right.addEventListener('click', this.next.bind(this))
  }

  getItems(className) {
    return [...document.querySelectorAll(`.${className}`)]
  }

  next() {
    // if this is the last item in array
    if (this.index === this.items.length) {
      // set index to start
      this.index = 0
    }

    this.setFocus(this.items[this.index++])
  }

  previous() {
    // if this is first item in array
    if (!this.index) {
      this.index = this.items.length - 1
    }
    this.setFocus(this.items[this.index--])
  }

  setFocus(newFocus) {
    this.focus.classList.remove(this.focusClass)
    this.focus = newFocus

    this.focus.classList.add(this.focusClass)
  }
}

let carousels = document.querySelectorAll('.Carousel')
carousels = Array.from(carousels).map(carousel => new Carousel(carousel))
