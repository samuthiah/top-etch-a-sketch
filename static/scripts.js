

// Grid is square so width = height
function createGrid(width = 16) {
    // creates variable for gridContainer, clears its content in prep for new grid
    const gridContainer = document.querySelector(".gridContainer");
    gridContainer.textContent = "";
    // iterates over width to create rows for grid and adds them to gridContainer
    for (i = 0; i < width; i++) {
        const newRow = document.createElement("div");
        newRow.classList.add("gridRow");
        gridContainer.appendChild(newRow);

        // iterates of width 
        for (j = 0; j < width; j++) {
            const newGridItem = document.createElement("div");
            newGridItem.classList.add("gridItem");
            newGridItem.addEventListener("mouseover", (e) => {
                newColor = "#" + randomColor();
                newGridItem.style.backgroundColor = newColor;
            })
            newRow.appendChild(newGridItem);
        }
    }
}

btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
    let newWidth = prompt("Enter a new size:");
while (newWidth > 100 || newWidth < 1 || (newWidth * 10) % 10 !== 0) {
        newWidth = prompt("Size must be a positive integer no larger than 100")
    }
    createGrid(newWidth);
})

function randomColor() {
    newColor = Math.floor(Math.random() * ((16 ** 6) - 1));
    newColor = newColor.toString(16);
    return newColor;
}

createGrid();
