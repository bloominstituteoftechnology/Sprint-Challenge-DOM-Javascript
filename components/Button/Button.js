class Button {
	constructor(element) {
		this.element = element;
		this.element.addEventListener("click", () => this.hideButton());

	}

	hideButton() {
		this.element.classList.add("Button--hide");
	}
}

let buttons = document.querySelectorAll(".Button");
buttons = Array.from(buttons).map((button) => new Button(button));