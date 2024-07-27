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
            const newColumn = document.createElement("div");
            newColumn.classList.add("gridItem");
            newRow.appendChild(newColumn);
        }
    }
}

createGrid();
