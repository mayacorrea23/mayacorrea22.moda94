let body = document.querySelector("body");

let buttons = document.querySelectorAll(".tecido");

console.log(buttons);

let i;

for(i = 0; i < buttons.length; i++){

    let tecido = buttons[i]; 
    
    tecido.addEventListener("mouseenter", function(){
        tecido.classList.add("hover");
    });

    tecido.addEventListener("mouseleave", function(){
        tecido.classList.remove("hover");
    });

    tecido.addEventListener("click", function(){
        tecido.classList.add("clicked");
        tecido.classList.remove("pressed");
    });


}