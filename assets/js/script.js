

// function pintar(){
//     ele.style.backgroundColor = 'yellow'
//     }
//     const ele = document.getElementById("ele1")
//     ele.addEventListener("click", pintar);

//2.2

const ele = document.getElementById('ele1')
// ele.addEventListener('click', (pintar) =>{
//         ele.style.backgroundColor = 'yellow'
// });

//2.3

const pintar = (color ='green') => ele.style.backgroundColor = color;
pintar();
ele.addEventListener('click', () => pintar('yellow'));
