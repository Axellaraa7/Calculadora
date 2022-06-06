const d = document;
const urls = [
  "./ASSETS/DATA/cientificos.json",
  "./ASSETS/DATA/ciencias.json",
  "./ASSETS/DATA/lenguajes.json"
];

export function loadCarousels (){
  const figures = d.querySelectorAll(".figureCarousel");
  figures.forEach( async (figure,index) => {
    let response = await fetch(urls[index]),
    data = await response.json();
    timingCarousel(figure, data.data);
  });

}

const timingCarousel = (figure,data) => {
  let cont = 0, 
  link = figure.children[0],
  img = link.children[0],
  figcaption = link.children[1];

  img.setAttribute("src",data[cont].img);
  img.setAttribute("alt",data[cont].name);
  figcaption.textContent = data[cont].name;
  link.setAttribute("href",data[cont].bio);
  link.classList.remove("fadeIn");

  const interval = setInterval(()=>{ 
    link.classList.add("fadeIn");
    setTimeout( () => {
      // console.log("TimeOut");
      cont++;
      if(cont >= data.length) cont = 0;
      img.setAttribute("src",data[cont].img);
      img.setAttribute("alt",data[cont].name);
      figcaption.textContent = data[cont].name;
      link.setAttribute("href",data[cont].bio);
      link.classList.remove("fadeIn");
    },400);
  },4000);
  //clearInterval(interval);
}

/* const domElements = [
    {
      domElement: img,
      attrs: ["src","alt"],
      datas: [
        data.cientificos[cont].img,
        data.cientificos[cont].name
      ]
    },{
      domElement: figcaption,
      attrs: ["textContent"],
      datas: [data.cientificos[cont].name]
    },{
      domElement: link,
      attrs: ["href"],
      datas: [data.cientificos[cont].bio]
    }
  ]  */
/* const setAttributes = (domElementsObj) =>{
  domElementsObj.forEach(element =>{
    let { domElement, attrs, cont, datas } = element;
    attrs.forEach( (attr,index) =>{
      if(attr === "textContent") domElement.textContent = datas;
      else domElement.setAttribute(attr,datas[index]);
    })
  })
} */
