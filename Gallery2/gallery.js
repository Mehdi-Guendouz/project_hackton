const pictureTable =[
    "../img/pic_bejaia/g1-1.jpg",
    "../img/pic_bejaia/g2-1.jpg",
    "../img/pic_bejaia/g2-2.jpg",
    "../img/pic_bejaia/g2-3.jpeg",
    "../img/pic_bejaia/g3-1.png",
    "../img/pic_bejaia/g3-3.jpeg",
    "../img/pic_bejaia/g4-2.jpg"
]


const left = document.querySelector(".go-left")
const right = document.querySelector(".go-right")
const imgtab = document.querySelectorAll(".imgshow")
const hidepar = document.querySelector(".paragraphe")
const hidtitre = document.querySelector(".titre")
const hideone = document.querySelector(".hide_one")
let index = 3
let traque =0


left.addEventListener("click",(e)=>{
    imgtab[0].src = pictureTable[index]
    index++
    imgtab[1].src = pictureTable[index]
    index++
    if (index>=6){
        index = 0
    }
    imgtab[2].src = pictureTable[index]
    hidepar.classList.add("hide_p")
    hidtitre.classList.add("hide_p")
    hideone.classList.add("imgs_container")
    hideone.classList.remove("hide_one")
})


right.addEventListener("click",(e)=>{
    if (index<0){
        index = 6
    }
    imgtab[0].src = pictureTable[index]
    index--
    if (index<0){
        index = 6
    }
    imgtab[1].src = pictureTable[index]
    index--
    if (index<0){
        index = 6
    }
    imgtab[2].src = pictureTable[index]
    hidepar.classList.add("hide_p")
    hidtitre.classList.add("hide_p")
    hideone.classList.add("imgs_container")
    hideone.classList.remove("hide_one")
})
