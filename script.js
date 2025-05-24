function addGrid(sideLength) {
    const container = document.querySelector('#container');
    for (let rowNum = 0; rowNum < sideLength; rowNum++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let colNum = 0; colNum < sideLength; colNum++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            row.appendChild(grid);
        }
        container.appendChild(row);
    }
}

addGrid(16)