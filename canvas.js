import {drawColor, eraserOn, squareOn, circleOn, lineWidth} from "./color.js"

window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas1");
    const context = canvas.getContext("2d");
    const leaveCanvas = document.querySelector("#canvasContainer")
    canvas.height = canvas.getBoundingClientRect().bottom - canvas.getBoundingClientRect().top; 
    canvas.width = canvas.width = canvas.getBoundingClientRect().right - canvas.getBoundingClientRect().left;
    
    let painting = false;
    let startPositionX;
    let startPositionY;
    function startPosition(e)
    {
        painting = true;
        if(eraserOn)
        {
            return;
        }else if(squareOn || circleOn )
        {
            startPositionX = e.clientX - canvas.getBoundingClientRect().left
            startPositionY = e.clientY - canvas.getBoundingClientRect().top 
        }
        else
        {
            draw(e);
        }
        
        
    }
    function endPosition()
    {
        painting = false;
        context.beginPath();
        
    }
    function draw(e)
    {
        if(!painting) return;
        context.lineWidth = lineWidth;
        context.lineCap = "round";
        console.log(startPositionX)     
        if(eraserOn)
        {
            context.lineTo(e.clientX - canvas.getBoundingClientRect().left , e.clientY - canvas.getBoundingClientRect().top);
            context.strokeStyle = "white"
        }else if (squareOn)
        {      
            context.fillRect(startPositionX, startPositionY,e.clientX - canvas.getBoundingClientRect().left -startPositionX, e.clientY - canvas.getBoundingClientRect().top - startPositionY)
        }else if (circleOn)
        {
            context.arc(startPositionX, startPositionY, e.clientX - canvas.getBoundingClientRect().left -startPositionX, 0, 2 * Math.PI)
            context.strokeStyle = drawColor;
        }
        else
        {
            context.lineTo(e.clientX - canvas.getBoundingClientRect().left , e.clientY - canvas.getBoundingClientRect().top);
            context.strokeStyle = drawColor;

        }
        context.stroke();
    }
    
    
    canvas.addEventListener("mousedown", startPosition)

    canvas.addEventListener("mouseup", endPosition)

    canvas.addEventListener("mousemove", draw)
    
    leaveCanvas.addEventListener("mouseover", () => {
        context.beginPath();
    })
})
