const d = document,w = window;

export default function menuHamburguer(){
  d.addEventListener("click",(e)=>{
    if(w.innerWidth <= 1200){
      if(e.target.id === "navHeader"){
        console.log("true");
        let nav = document.querySelector(".ulNavCalc");
        console.log(nav);
        nav.classList.toggle("displayBlock");
      }
    }
  },false);
}