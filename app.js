function toggleMenu(){
    const menu = document.querySelector(".menulinks");
    const icon = document.querySelector(".hamburgericon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}



let darkmodebtn = document.querySelector(".darkmodebtn");
let mode = 1;


darkmodebtn.addEventListener("click",()=>{
   if(mode == 1){
       darkmodebtn.innerHTML = `<i class="ri-moon-line"></i>`;
        mode = 0;
    }
    else{
        darkmodebtn.innerHTML = `<i class="ri-moon-fill"></i>`;
        mode = 1;
    }
    document.body.classList.toggle("darkmode");
})