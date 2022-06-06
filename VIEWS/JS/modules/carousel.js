const d = document;
const urls = [
  "./ASSETS/DATA/cientificos.json",
  "./ASSETS/DATA/cientificos.json",
  "./ASSETS/DATA/cientificos.json"
];

export function loadCarousels (){
  const figures = d.querySelectorAll(".figureCarousel");
  figures.forEach( async (figure,index) => {
    let response = await fetch(urls[index]),
    data = await response.json();
    timingCarousel(figure, data);
  });

}

const timingCarousel = (figure,data) => {
  let cont = 0;
  const interval = setInterval(()=>{
    let link = figure.children[0],
      img = link.children[0],
      figcaption = link.children[1];
    
    link.classList.add("fadeIn");
    setTimeout(()=>{
      // console.log("TimeOut");
      img.setAttribute("alt",data.cientificos[cont].name);
      figcaption.textContent = data.cientificos[cont].name;
      link.setAttribute("href",data.cientificos[cont].bio);
      img.setAttribute("src",data.cientificos[cont].img);
      link.classList.remove("fadeIn");
      cont++;
      if(cont >= data.cientificos.length) cont = 0;
    },400);
  },5000);

  //clearInterval(interval);
}