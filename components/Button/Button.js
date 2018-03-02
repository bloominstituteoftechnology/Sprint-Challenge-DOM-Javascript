const elements = document.getElementsByClassName('Button');



Array.from(elements).forEach((i)=>{

i.addEventListener("click",()=>{
i.style.visibility="hidden";

});

});