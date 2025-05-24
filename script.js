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

const gridItems = document.querySelectorAll('.grid')

gridItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
        setTimeout(() => {item.classList.remove('hover');}, 100)
    })
})