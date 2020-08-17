const rgbArray = 255;

function createMatrix() {
    const mainDiv = document.getElementById('grid');
    let grid = '';
    for (let i = 0; i <= rgbArray; i++) {
        let row = '<div class="row">';
        for (let j = 0; j <= rgbArray; j++) {
            row = row + `<div class="box" title="RGB (0, ${i}, ${j})" style="background-color:rgb(0, ${i}, ${j})"></div>`;
        }
        grid = grid + row + '</div>';
    }
    mainDiv.innerHTML = grid;
}

createMatrix();
