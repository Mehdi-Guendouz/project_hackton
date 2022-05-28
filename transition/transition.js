dictionnaire_amazi={
    'A': 'ⴰ',
    'B': 'ⴱ',
    'C': 'ⵛ',
    'D': 'ⴷ',
    'E': 'ⴻ', 
    'F': 'ⴼ', 
    'G': 'ⴳ', 
    'H': 'ⵀ', 
    'I': 'ⵉ', 
    'J': 'ⵊ', 
    'K': 'ⴽ', 
    'L': 'ⵍ', 
    'M': 'ⵎ', 
    'N': 'ⵏ', 
    'O': 'ⵄ', 
    'P': 'ⵃ', 
    'Q': 'ⵇ', 
    'R': 'ⵔ', 
    'S': 'ⵙ', 
    'T': 'ⵜ', 
    'U': 'ⵓ', 
    'V': 'ⴱ', 
    'W': 'ⵡ', 
    'X':'ⵅ' , 
    'Y': 'ⵢ',
    'Z':'ⵣ'
}

const keybordbtn = document.querySelectorAll(".keybordbtn")

const textplace = document.getElementById("text_place")
let text = ''
let j = 24

keybordbtn.forEach((element,index)=>{
    element.addEventListener("click",(e)=>{
        const btnclicked = e.currentTarget
        if(btnclicked.value === "space"){
                text += " "
        }/*else if (btnclicked.value === "delete"){
            text[(text.length) -1] = ""
            console.log(text)
        }*/
        else{
            const indexleter =  btnclicked.value
            text += dictionnaire_amazi[indexleter]
        }
        if((text.length+1) > j){
            text += "<br>"
            j +=28
            if(j > 24*7){
                return 0
            }
        }
        textplace.innerHTML = text
    })
})

function reset(){
    textplace.innerText =''
    text = ''
    j = 24
}