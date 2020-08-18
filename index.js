const rgbcolor = 255;

function  createMatrix() {
    const mainDiv = document.getElementById('grid');

    for (let i = 0; i <= rgbcolor; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j <= rgbcolor; j++) {
            const cell = document.createElement('div');
            cell.classList.add('box');
            cell.setAttribute('id', `${i}_${j}`);
            cell.style.backgroundColor =  `rgb(0, ${i}, ${j} )`;

            cell.addEventListener("mouseover",()=>{
                document.getElementById(`${i}_${j}`).innerHTML = (`RGB (0, ${i}, ${j})`);
            });
            row.appendChild(cell);
        }
        mainDiv.appendChild(row);
    }
}

createMatrix();