document.addEventListener("mousemove", function(event){
    event.preventDefault()

    document.getElementById("x").textContent = event.clientX;
    document.getElementById("y").textContent = event.clientY;

})