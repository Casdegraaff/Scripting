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


context.beginPath()
context.lineWidth = 5;
context.fillStyle = "brown";
context.moveTo(600,400);
context.lineTo(200,300);
context.lineTo(200,500);
context.lineTo(600,600);
context.closePath();
context.stroke();
context.fill();


context.beginPath()
context.lineWidth = 5;
context.fillStyle = "brown";
context.moveTo(600,600);
context.lineTo(600,400);
context.lineTo(800,300);
context.lineTo(800,500);
context.closePath();
context.stroke();
context.fill();

context.beginPath()
context.lineWidth = 5;
context.fillStyle = "red";
context.moveTo(600,400);
context.lineTo(200,300);
context.lineTo(500,250);
context.closePath();
context.stroke();
context.fill();


context.beginPath()
context.lineWidth = 5;
context.fillStyle = "red";
context.moveTo(600,400);
context.lineTo(800,300);
context.lineTo(500,250);
context.closePath();
context.stroke();
context.fill();


context.beginPath()
context.lineWidth = 5;
context.fillStyle = "blue";
context.moveTo(400,480);
context.lineTo(400,430);
context.lineTo(500,450);
context.lineTo(500,500);
context.closePath();
context.stroke();
context.fill();


