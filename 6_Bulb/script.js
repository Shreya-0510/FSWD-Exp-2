let btn = document.querySelector('button');
let image = document.querySelector('img')
let flag = 0;
btn.addEventListener("click", function(){
    if(flag == 0){
        btn.innerHTML = "Off";
        flag = 1;
        image.src = "./on.png";
    }
    else{
        btn.innerHTML = "On";
        flag = 0;
        image.src = "./off.png";
    }    
})