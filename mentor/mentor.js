const listNmb = document.querySelectorAll(".list_num")


listNmb.forEach((ele,index)=>{
    ele.addEventListener("click",(e)=>{
        const listselected = e.currentTarget.classList
        listselected.add("list_selected")
        for(let j=0;j<5;j++){
            if(j!== index){
                const listsNonselected = listNmb[j]
                listsNonselected.classList.remove("list_selected")
            }
        }
    })
})
