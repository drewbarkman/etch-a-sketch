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
    addHover()
}

function removeGrid() {
    const container = document.querySelector('#container');
    const gridRows = document.querySelectorAll('.row');
    gridRows.forEach((row) => container.removeChild(row))
}


function addHover() {
    const gridItems = document.querySelectorAll('.grid')
    gridItems.forEach((item) => {
        item.style.opacity = 0;
        item.addEventListener('mouseenter', () => {
            const current_val = +item.style.opacity;
            if (current_val < 1) {item.style.opacity = current_val + 0.1;};
            item.classList.add('hover');
        });
        item.addEventListener('mouseleave', () => {
            setTimeout(() => {item.classList.remove('hover');}, 100)
        })
    })
}

addGrid(16);

const resizeButton = document.querySelector('#resize-button');
resizeButton.addEventListener('click', () => {
    let requestedNum = prompt('Please input the length of the new grid (0-100)');
    try {
            requestedNum = Math.floor(+requestedNum);
    } catch(err) {
        alert('Incorrect input, please try again.');
        return;
    }
    if (requestedNum > 100 || requestedNum < 0) {
        alert('Not within bounds, please try again.');
        return;
    }
    removeGrid();
    addGrid(requestedNum);
})