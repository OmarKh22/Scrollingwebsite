let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let mountains7 = document.getElementById("mountains7");
let nouvil = document.querySelector(".nouvil");
let main = document.querySelector(".main");

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value *4 + 'px';
    mountains3.style.top = value *2 + 'px';
    mountains4.style.top = value *1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.left = value*3  + 'px';
    boat.style.top = value + 'px';

    nouvil.style.fontSize = value  + 'px';
    if(scrollY >= 65){
        nouvil.style.fontSize = 65  + 'px';
        nouvil.style.position = 'fixed';
        if(scrollY >= 444){
            nouvil.style.display = 'none';
        }else{
            nouvil.style.display = 'block';

        }
        if(scrollY >= 100){
            main.style.background =" rgb(67 110 132 / 62%)";
        }else{
            main.style.background = 'linear-gradient(#5d0656,#160224)';
        }
    }
    
    
}