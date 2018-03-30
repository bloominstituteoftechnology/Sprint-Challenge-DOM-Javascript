
let button = document.querySelectorAll('.Button');
button = Array.from(button).map((item) => {
    item.addEventListener('click', (e) => {
       console.log('hi')
    })
})