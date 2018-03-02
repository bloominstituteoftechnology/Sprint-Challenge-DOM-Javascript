class Button {
    costructor(element) {
        this.element = element;
        this.button = this.element.querySelectorAll(".Buttons__box");

        this.button.addEventListener("click", () => {
            this.goAway();
        });
    }

    goAway() {
        this.element.visibility = "hidden";
    }
}