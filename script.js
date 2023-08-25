//your JS code here. If required.
let div = document.getElementById("sizeInfo");
let h1 = div.firstElementChild;

window.addEventListener("resize",()=>{
     h1.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
})
h1.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`