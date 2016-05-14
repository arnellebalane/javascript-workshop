var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var center = {
    x: canvas.width / 2,
    y: canvas.height / 2
};


context.lineWidth = 3;
context.strokeStyle = '#333';

context.strokeRect(center.x - 50, center.y - 50, 100, 100);

context.beginPath();
context.moveTo(center.x - 150, center.y - 50);
context.lineTo(center.x - 100, center.y + 50);
context.lineTo(center.x - 200, center.y + 50);
context.closePath();
context.stroke();

context.beginPath();
context.arc(center.x + 150, center.y, 50, 0, Math.PI * 2);
context.stroke();

context.beginPath();
context.moveTo(center.x - 200, center.y + 100);
context.lineTo(center.x + 200, center.y + 100);
context.stroke();
