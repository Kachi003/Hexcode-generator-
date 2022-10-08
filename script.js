let characters=["A","B","C","D","E","F","1","2","3","4","5","6","7","8","9"];

let Body=document.querySelector(".body");
let number=document.querySelector(".hexxy");

function generate(){
    let hexcode="";
    for(let i=0;i<6;i++){
        let Num=Math.floor(Math.random()*characters.length)
        
        let index=characters[Num];
        
        hexcode+=index;
        
        console.log(hexcode);
    }
    
    Body.style.background="#"+hexcode;
    number.innerHTML=hexcode;
    
}