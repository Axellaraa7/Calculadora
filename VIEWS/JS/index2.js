let arrayButton,display,operators;
let arrayOperators = [], arrayNums = new Map();

function setOperators(){
    operators = document.getElementsByClassName("operator");
    for(let i = 0; i<operators.length; i++){
        arrayOperators.push(operators[i].value);
    }
}

function equal(){
    let resultado = 0;
    
    for(let i=0;i<display.value.length;i++){
        if(arrayOperators.includes(display.value[i])){
            arrayNums.set(i,"display.value[i]");
        }
    }

    for(let [pos,operator] of arrayNums){
        switch(operator){
            case '/':
                resultado/=display.value.substr()
        }
    }

    console.log(resultado);
    console.log(arrayNums);
}

function funFigures(){
    let arrayImg = ["albert_einstein.jpg","arquimedes.jpg","blaise_pascal.jpg","gottfried_leibniz.jpg","isaac_newton.jpg","nikola_tesla.jpeg"];
    let arrayNames = ["Albert Einstein", "Arquimedes", "Blaise Pascal","Gottfried Leibniz","Isaac Newton","Nikola Tesla"];
    
    let figure = document.getElementById("matematicos");
    let linkBiography = document.getElementById("linkBiography");
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");
    let cont = 1;

    prev.addEventListener("click",()=>{
        let path = "url('../ASSETS/IMG/"+arrayImg[cont]+"')";
        linkBiography.textContent = arrayNames[cont];
        figure.style.backgroundImage = path;
        figure.title = arrayNames[cont];
        cont--;
        if(cont < 0) cont = arrayImg.length-1;
    },false);

    next.addEventListener("click",()=>{
        let path = "url('../ASSETS/IMG/"+arrayImg[cont]+"')";
        linkBiography.textContent = arrayNames[cont];
        figure.style.backgroundImage = path;
        figure.title = arrayNames[cont];
        cont++;
        if(cont >= arrayImg.length) cont = 0;
    },false);
}

function inicio(){
    funFigures();
    arrayButton = document.getElementsByClassName("buttonNumber");
    display = document.getElementById("display");
    display.value="";
    setOperators();
    for(let i=0; i<arrayButton.length;i++){
        if(arrayButton[i].value == '='){
            arrayButton[i].addEventListener("click",equal,false);
        }else{
            arrayButton[i].addEventListener("click",()=>{
                if(display.value == "" && arrayOperators.includes(arrayButton[i].value)){
                    alert("No puedes iniciar con un operador");
                }else if(display.value != "" && arrayOperators.includes(arrayButton[i].value) && arrayOperators.includes(display.value.substr(-1))){
                    alert("No puedes poner dos operadores juntos")
                }else{
                    display.value += arrayButton[i].value;
                }
            },false);
        }
    }
}

document.addEventListener("DOMContentLoaded",inicio,false);

