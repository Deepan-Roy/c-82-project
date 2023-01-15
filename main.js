canvas =document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouse_event="empty";
var lx,ly;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
    mouse_event="mouseDown";
}

canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouse_event="mouseUP";
}

canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouse_event="mouseleave";

canvas.addEventListener("mousemove",mymousemove);
}
function mymousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouse_event=="mouseDown"){
    console.log("Current position of x ="+current_position_of_mouse_x+"current position of y ="+current_position_of_mouse_y)

        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI)
        ctx.stroke();
    }
    lx=x;
    ly=y;
}