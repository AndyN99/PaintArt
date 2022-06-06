
export let drawColor = "black"

const white = document.querySelector("#whiteBtn")
const black = document.querySelector("#blackBtn")
const gray = document.querySelector("#grayBtn")
const brown = document.querySelector("#brownBtn")
const red = document.querySelector("#redBtn")
const pink = document.querySelector("#pinkBtn")
const orange = document.querySelector("#orangeBtn")
const lightOrange = document.querySelector("#lightOrangeBtn")
const yellow = document.querySelector("#yellowBtn")
const lightYellow = document.querySelector("#lightYellowBtn")
const green = document.querySelector("#greenBtn")
const lightGreen = document.querySelector("#lightGreenBtn")
const blue = document.querySelector("#blueBtn")
const lightBlue = document.querySelector("#lightBlueBtn")
const purple = document.querySelector("#purpleBtn")
const lightPurple = document.querySelector("#lightPurpleBtn")
const selectColor = document.querySelector("#selectColor")
const rValue = document.querySelector("#redInput")
const gValue = document.querySelector("#greenInput")
const bValue = document.querySelector("#blueInput")
const rgbSumbit = document.querySelector("#rgbSumbit")
const rgbInputContainer = document.querySelector("#rgbInputContainer")
const eraser = document.querySelector("#eraser")
const pencil = document.querySelector("#pencil")
const square = document.querySelector("#square")
const circle = document.querySelector("#circle")
const lineWidthInput = document.querySelector("#lineWidthInput")
const lineWidthValue = document.querySelector("#lineWidthValue")
export let circleOn = false
export let eraserOn = false
export let squareOn = false
export let lineWidth = 25;
let updateWidthDisplay = false



function update(currentTime){

    window.requestAnimationFrame(update);
    if(updateWidthDisplay)
    {
        lineWidthValue.innerHTML = lineWidthInput.value;
        lineWidth = lineWidthInput.value;
    }
}
window.requestAnimationFrame(update);
lineWidthInput.addEventListener("mousedown", () => { 
    updateWidthDisplay = true;
})
lineWidthInput.addEventListener("mouseup", () => {
    updateWidthDisplay = false;
})


rgbSumbit.addEventListener("click", () =>
{
    rgbInputContainer.style.display = "none"
    let rgbValue = `rgb(${rValue.value}, ${gValue.value}, ${bValue.value})`
    changeColor(rgbValue)
    updateSelectColor()
    
})
function updateSelectColor()
{
    selectColor.style.backgroundColor = drawColor;
}

export function changeColor(color)
{
    console.log(color)
    drawColor = color;
}
pencil.addEventListener("click", () => 
{
    eraserOn = false;
    squareOn = false;
    circleOn = false;
})
square.addEventListener("click", () => {
    squareOn = true;
    eraserOn = false;
    circleOn = false;
})
circle.addEventListener("click", () => {
    circleOn = true;
    eraserOn = false;
    squareOn = false;
})
eraser.addEventListener("click", () => {
    eraserOn = true;
    squareOn = false;
    circleOn = false;
})
selectColor.addEventListener("click", () => {
    rgbInputContainer.style.display = "grid"
})

white.addEventListener("click", () => {
    changeColor("white")
    updateSelectColor()});
black.addEventListener("click", () => {
    changeColor("black")
    updateSelectColor()});
gray.addEventListener("click", () => {
    changeColor("gray")
    updateSelectColor()});
brown.addEventListener("click", () => {
    changeColor("brown")
    updateSelectColor()});
red.addEventListener("click", () => {
    changeColor("red")
    updateSelectColor()});
pink.addEventListener("click", () => {
    changeColor("pink")
    updateSelectColor()});
orange.addEventListener("click", () => {
    changeColor("orange")
    updateSelectColor()});
lightOrange.addEventListener("click", () => {
    changeColor("rgb(241, 191, 97)")
    updateSelectColor()});
yellow.addEventListener("click", () => {
    changeColor("yellow")
    updateSelectColor()});
lightYellow.addEventListener("click", () => {
    changeColor("lightyellow")
    updateSelectColor()});
green.addEventListener("click", () => {
    changeColor("green")
    updateSelectColor()});
lightGreen.addEventListener("click", () => {
    changeColor("lightgreen")
    updateSelectColor()});
blue.addEventListener("click", () => {
    changeColor("blue")
    updateSelectColor()});
lightBlue.addEventListener("click", () => {
    changeColor("lightblue")
    updateSelectColor()});
purple.addEventListener("click", () => {
    changeColor("purple")
    updateSelectColor()});
lightPurple.addEventListener("click", () => {
    changeColor("rgb(255, 116, 255)")
    updateSelectColor()});




