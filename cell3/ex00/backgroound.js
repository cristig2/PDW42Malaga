function cambiaColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let cuerpo = document.getElementById("body");
    let color = "rgb("+ red +", "+ green +", "+ green +")";
    cuerpo.style.background = color 
    console.log(color)
} 