let box = document.querySelector('.box')
let bctext = document.querySelector('.bctext')
let ctext = document.querySelector('.ctext')


function rango() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256) 
    return `rgb(${r}, ${g}, ${b})`
  }
  let button1 = document.querySelector('.digarang');

  button1.onclick = () =>{   
   box.style.backgroundColor = rango();
    ctext.style.color = rango()
    ctext.innerHTML = `color:${rango()}`
bctext.innerHTML = `Background color:${rango()}`
  };
