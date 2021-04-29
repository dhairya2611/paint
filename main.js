var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var mouseevent="";


canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mouseevent="mousedown";
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseevent="mouseleave";
}canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    x=e.clientX-canvas.offsetLeft;
    y=e.clientY-canvas.offsetTop;
    if (mouseevent == "mousedown")
     { ctx.beginPath();
         ctx.strokeStyle = document.getElementById("color").value;
          ctx.lineWidth = document.getElementById("width").value;
           ctx.moveTo(lastX, lastY);
           ctx.lineTo(x, y); ctx.stroke();
     }
         lastX = x; lastY = y;
    }


function clearfunc(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
