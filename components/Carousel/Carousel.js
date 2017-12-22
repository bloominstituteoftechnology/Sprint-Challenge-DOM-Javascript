class Carousel {
    constructor (element) {
        this.element = element

        // collects carousel items
        this.items = element.querySelectorAll('Carousel__item')
        this.items = Array.from(this.items)

        // set default position
        this.element.classList.add('Carousel__item-focused')
        this.current = this.items[0]

        let right = element.querySelector("Carousel__arrow-right")
        let left = element.querySelector("Carousel__arrow-right")
        // create a counter to compare with Array.length (++ upon changeRight __ upon changeLeft)
        let counter = 0
        }
        
        // add eventlistener (click) --> "Carousel arrow right" -- changeRight        
        this.element.addEventListener('click', (event) => {
            if(event.right) {
                changeRight();
            } // Ran out of time but I may have realized why the links class was created in the Tabs work you did
              // Also seems I haven't quite worked out the kinks using listeners
        } )

        // add eventlistener (click) --> "Carousel arrow left" -- changeLeft
        this.element.addEventListener('click', (event) => {
            if(event.left) {
                changeLeft()
            }
    }
}

    changeRight() {
        counter++;
        this.element.classList.remove(this.current)
        if(counter > this.items.length) {
            this.current = this.items[0];
            counter = 0
        } else {
            this.current = this.items[counter - 1]
        }
        this.element.classList.add(this.current)
        // upon click change focus from this.items.current --> this.items.next (next item in the array)
        // if counter > array.length --> change to array[0]

    }


    changeLeft() {
        counter--;
        this.element.classList.remove(this.current)
        if(counter < 0) {
            this.current = this.items[this.items.length - 1];
            counter = this.items.length - 1
        } else {
            this.current = this.items[counter - 1]
        }
        this.element.classList.add(this.current)
        // upon click change focus from this.items.current --> this.items.next (next item in the array)
        // if counter > array.length --> change to array[array.length - 1]

}


let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));