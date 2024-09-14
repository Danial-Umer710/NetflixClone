let allQuestion=document.querySelectorAll(".faqQuestion");


allQuestion.forEach((e,index)=>{
    e.addEventListener("click",()=>{
        console.log(index)
        e.nextElementSibling.classList.toggle("scale-y-100")
        e.nextElementSibling.classList.toggle("h-auto")
        e.nextElementSibling.classList.toggle("px-[20px]")
e.children[1].classList.toggle("rotate-45")
        

allQuestion.forEach((el,i)=>{
    if(i!=index){
        el.nextElementSibling.classList.remove("scale-y-100", "h-auto", "px-[20px]");
        el.children[1].classList.remove("rotate-45")
    }
})


    })
})