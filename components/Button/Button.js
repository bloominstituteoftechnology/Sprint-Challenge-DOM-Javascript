const buttons = [...document.querySelectorAll('.Button')]

const makeButtDissapear = e => (e.target.style.display = 'none')
buttons.map(butt => butt.addEventListener('click', makeButtDissapear))
