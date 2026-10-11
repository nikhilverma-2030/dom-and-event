const heading = document.getElementById("heading");
const nameinput = document.getElementById("input-name");
const greetBtn = document.getElementById("greet-btn");
const boxes = document.querySelectorAll(".box-color");

// Greet button functionality
greetBtn.addEventListener("click",function(){
    const name = nameinput.value.trim();

    if(name !== ""){
        heading.textContent = "Hello, "+name;
    }
    else{
        heading.textContent = "Hello";
    }
});

// Change box color on click
boxes.forEach(function (box) {
    box.addEventListener("click", function () {
        const color = box.dataset.color;
        box.style.backgroundColor = color;

        if (color === "yellow") {
            box.style.color = "black";
        } else {
            box.style.color = "white";
        }
    });
});