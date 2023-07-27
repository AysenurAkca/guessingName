let number = Math.floor(Math.random()*100)+1;
let guessInput = document.querySelector("#guess");
let msg = document.querySelector(".msg");
let btn = document.querySelector(".btn")


btn.addEventListener("click", (e) =>{
    e.preventDefault();
    let i = 5;
    while(i>0){
        
        if(number> Number(guessInput.value)){
            msg.innerHTML= "Please, enter higher number";
        } else if (number< Number(guessInput.value)) {
            msg.innerHTML= "Please, enter lower number";
        }  else {
            msg.innerHTML= "Yaaayyyy!";

        }
       
        if (i === 0){
            msg.innerHTML = "You are a looser";
            break;
        }
        i--;
        console.log(i)
    }
    console.log(number)
} );




