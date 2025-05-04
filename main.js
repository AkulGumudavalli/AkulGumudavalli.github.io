const rect = document.getElementById("rectangleright")

function move(){
    rect.classList.add("moved");
    console.log("moved")
    document.removeEventListener("click",move);
}
document.addEventListener("click",move);