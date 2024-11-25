const azul = document.getElementById('azul');
const rojo = document.getElementById('rojo');
const verde = document.getElementById('verde');
const amarillo = document.getElementById('amarillo');

//estilos
azul.style.backgroundColor = 'blue';
azul.style.width = '200px';
azul.style.height = '200px';

rojo.style.backgroundColor = 'red';
rojo.style.width = '200px';
rojo.style.height = '200px';

verde.style.backgroundColor = 'green';
verde.style.width = '200px';
verde.style.height = '200px';

amarillo.style.backgroundColor = 'yellow';
amarillo.style.width = '200px';
amarillo.style.height = '200px';

//evento click pintar elemento negro

azul.addEventListener('click', () =>{
    azul.style.backgroundColor = 'black'
});

rojo.addEventListener('click', () =>{
    rojo.style.backgroundColor = 'black'
});

verde.addEventListener('click', () =>{
    verde.style.backgroundColor = 'black'
});

amarillo.addEventListener('click', () =>{
    amarillo.style.backgroundColor = 'black'
});

//evento key para guardar colores


const divKey = document.getElementById('key');
divKey.style.width = '200px'
divKey.style.height = '200px'
divKey.style.backgroundColor = 'white'
divKey.style.border = '2px solid black'

let colorActual = 'white';

document.addEventListener('keydown', (event) => {
    const divKey = document.getElementById('key');
    if(event.key === "a"){
        colorActual = "pink";
    }else if(event.key === "s"){
        colorActual = "orange";
    }else if(event.key === "d"){
        colorActual = "skyblue";
    }
    divKey.style.backgroundColor = colorActual;

if (event.key === "q" || event.key === "w" || event.key === "e") {
    let nuevoDiv = document.createElement("div");
    nuevoDiv.style.width = "200px";
    nuevoDiv.style.height = "200px";
    nuevoDiv.style.margin = "20px auto";
    nuevoDiv.style.border = "2px solid black";

    if (event.key === "q"){
        nuevoDiv.style.backgroundColor = "purple";
    }else if (event.key === "w"){
        nuevoDiv.style.backgroundColor = "gray";
    }else if(event.key === "e"){
        nuevoDiv.style.backgroundColor = "brown";
    }
    document.body.appendChild(nuevoDiv);
    }

});




