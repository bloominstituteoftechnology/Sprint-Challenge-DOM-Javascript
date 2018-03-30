class Button {
    constructor(element) {
        this.element = element
        this.element.addEventListener('click', (event) => {
          if (event.select()) {
              this.deselect(event)
              event.stopPropagation()
          }
        })
    }

    select() {
        this.element.classList.add('Button--selected')
    }

    deselect() {
        this.element.classList.remove('Button--selected')
    }
}

let buttons = document.querySelector('.Button')
buttons = Array.from(buttons).map(button => new Button(button))