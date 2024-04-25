const body = document.querySelector("body");
const container = document.querySelector(".container");

const sizeBtn = document.createElement("button");
sizeBtn.textContent = "Grid Size";
sizeBtn.classList.add("gridSizeBtn");
body.insertBefore(sizeBtn, container);

const randomHexColor = () => {
    let hexColor = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + hexColor.slice(0,6);
};


for (let i = 0; i < 256; i++){
    const gridSq = document.createElement("div");
    gridSq.style.backgroundColor = randomHexColor();
    gridSq.style.opacity = 0.0;
    let opacityCount = 0;

    gridSq.addEventListener("mouseover", () =>{
        opacityCount += 1
        gridSq.style.opacity = opacityCount/10;
    });

    container.appendChild(gridSq);
}

sizeBtn.addEventListener("click", () => {
    let gridResize = prompt("How many squares would you like to be in each row?", "16");
    container.innerHTML = "";
    if (gridResize > 100) {
        alert("Sorry, that is too many. I can only handle 100x100");
    } else {
        let newGridSize = gridResize*gridResize;

        for (let i = 0; i < newGridSize; i++){
            const gridSq = document.createElement("div");
            gridSq.style.backgroundColor = randomHexColor();
            gridSq.style.opacity = 0.0;
            gridSq.style.width = 720/gridResize + "px";
            gridSq.style.height = 720/gridResize + "px";
            let opacityCount = 0;
        
            gridSq.addEventListener("mouseover", () =>{
                opacityCount += 1
                gridSq.style.opacity = opacityCount/10;
            });
        
            container.appendChild(gridSq);
        }
    }
});