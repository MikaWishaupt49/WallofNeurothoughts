// tweede pagina

const canvas = document.getElementById('tekenbord');
const toolbar = document.getElementById('toolbar');

const ctx= canvas.getContext("2d"); //teken 2d

const canvasoffx = canvas.offsetLeft;
const canvasoffy = canvas.offsetTop;

canvas.width = window.innerWidth - canvasoffx;
canvas.height = window.innerHeight - canvasoffy;

let isverven = false;
let lineWidth = 5;
let startx;
let starty;

toolbar.addEventListener("click", e => {
if (e.target.id === "clear") {
  ctx.clearRect(0,0, canvas.width, canvas.height);
}


});

toolbar.addEventListener("change", e => {
  if(e.target.id ==="stroke") {
 ctx.strokeStyle = e.target.value;

  }
  if(e.target.id === 'lineWidth') {
    lineWidth = e.target.value;
  }
});


const draw = (e) => {
  if(!isverven) {
    return;
  }
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";

  ctx.lineTo(e.clientX - canvasoffx, e.clientY -canvasoffy);
  ctx.stroke();


}



canvas.addEventListener("mousedown", (e) => {
 isverven = true;
startx= e.clientX;
starty= e.clientY;

});

canvas.addEventListener("mouseup", e => {
isverven = false;
ctx.stroke();
ctx.beginPath();

});

canvas.addEventListener('mousemove',draw);


// bron: https://www.youtube.com/watch?v=mRDo-QXVUv8&ab_channel=JavaScriptAcademy
