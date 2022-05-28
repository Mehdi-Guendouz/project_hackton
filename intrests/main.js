const btn = document.querySelectorAll(".Btn_itrs")
const checkBox = document.querySelectorAll(".check_boxes")

btn.forEach((el,index)=>{
    el.addEventListener("click",(e)=>{
        const clasbtn = e.currentTarget.classList
        clasbtn.toggle("btn_hover")
        clasbtn.toggle("btn_chosen")
        const check = checkBox[index]
        if  (check.checked === true){
            check.checked = false
        }else{
            check.checked = true
        }
    })
})

