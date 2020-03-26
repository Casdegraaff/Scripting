// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// hier kun je op de canvas tekenen

spawnCircle();
function spawnCircle() {
    setTimeout(function(){

   
  



        var greenColors = ["#66ff33", "#ff0000", "#6600ff", "#660033", "#0000ff", "#ccffcc"];
        var rdx = Math.floor(Math.random() * 1536);
      
        
context.beginPath();
context.lineWidth = "6.9";
context.fillStyle = greenColors[rdc];
context.arc(rdx,rdy,rds,0,Math.PI*2);
context.stroke();
context.fill();

spawnCircle();
    }, 100);
}

