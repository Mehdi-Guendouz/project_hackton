const pictureTable =[
    "../img/pic_bejaia/pic1.jpg",
    "../img/pic_bejaia/pic2.jpg",
    "../img/pic_bejaia/pic3.jpg",
    "../img/pic_bejaia/pic4.jpg",
    "../img/pic_bejaia/pic5.jpg",
    "../img/pic_bejaia/pic6.jpg",
    "../img/pic_bejaia/pic7.HEIC",
    "../img/pic_bejaia/pic8.HEIC",
    "../img/pic_bejaia/pic9.heic",
    "../img/pic_bejaia/pic10.HEIC",
    "../img/pic_bejaia/pic11.HEIC",
    "../img/pic_bejaia/pic12.HEIC",
    "../img/pic_bejaia/pic13.HEIC",
    "../img/pic_bejaia/pic14.jpg",
    "../img/pic_bejaia/pic15.jpg"
]


const left = document.querySelector(".go-left")
const right = document.querySelector(".go-right")
const imgtab = document.querySelectorAll(".imgshow")
let index = 3


left.addEventListener("click",(e)=>{
    imgtab[0].src = pictureTable[index]
    imgtab[1].src = pictureTable[index+1]
    imgtab[2].src = pictureTable[index+2]
    index +=3
    if (index>=12){
        index = 3
    }
    console.log(index)
})

