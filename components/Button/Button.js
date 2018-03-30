const target = document.querySelectorAll('.Button');

const hidden = e => {
    const targ = e.target;
    targ.classList.add('Button--Selected');
}

for (let i = 0; i < target.length; i++) {
    target[i].addEventListener('click', hidden);
}