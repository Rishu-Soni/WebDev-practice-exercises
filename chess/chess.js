const posToCoor = (position) => {      // Converts a position like "a3" to coordinates column and row like 1, 3
    let row = position.charCodeAt(1) - 96;
    let col = parseInt(position[2]);
    return [row, col];
}

const coortopos = ([row, col]) => {
    let position = String.fromCharCode(row + 96) + col; // Converts coordinates to position like "a3"
    return position;
}

const rookMovPattern = ([row, col]) => {
    let directions = [[row, 0], [0, col], [-row, 0], [0, -col]]; // Rook can move in straight lines horizontally and vertically

    directions.forEach(([dRow, dCol]) => {
        if (dRow > 0 && dCol == 0) {
            for (let i = (dRow + 1); i <= 8; i++) {
                document.querySelector('.' + coortopos([i, col])).classList.add("possibleMove");
            }
        }
        else if (dRow == 0 && dCol > 0) {
            for (let i = (dCol + 1); i <= 8; i++) {
                document.querySelector('.' + coortopos([row, i])).classList.add("possibleMove");
            }
        }
        else if (dRow < 0 && dCol == 0) {
            for (let i = (dRow + 1); i <= -1; i++) {
                document.querySelector('.' + coortopos([(i * -1), col])).classList.add("possibleMove");
            }
        }
        else if (dRow == 0 && dCol < 0) {
            for (let i = (dCol + 1); i <= -1; i++) {
                document.querySelector('.' + coortopos([row, (i * -1)])).classList.add("possibleMove");
            }
        }

    });
}
const bishopMovPattern = ([row, col]) => {
    let directions = [[row, col], [row, -col], [-row, col], [-row, -col]];
    directions.forEach(([dRow, dCol]) => {
        if (dRow > 0 && dCol > 0) {
            while(true) {
                if (dRow > 8 || dCol > 8) break;
                document.querySelector('.' + coortopos([dRow, dCol])).classList.add("possibleMove");
                dRow++;
                dCol++;
            }
        }
        else if (dRow == 0 && dCol > 0) {
            for (let i = (dCol + 1); i <= 8; i++) {
                document.querySelector('.' + coortopos([row, i])).classList.add("possibleMove");
            }
        }
        else if (dRow < 0 && dCol == 0) {
            for (let i = (dRow + 1); i <= -1; i++) {
                document.querySelector('.' + coortopos([(i * -1), col])).classList.add("possibleMove");
            }
        }
        else if (dRow == 0 && dCol < 0) {
            for (let i = (dCol + 1); i <= -1; i++) {
                document.querySelector('.' + coortopos([row, (i * -1)])).classList.add("possibleMove");
            }
        }

    });
}


const getClicked = (position) => {

    let DSelected = document.querySelectorAll(".DSelected");
    let LSelected = document.querySelectorAll(".LSelected");
    let possibleMove = document.querySelectorAll(".possibleMove");
    DSelected.forEach(element => {
        element.classList.remove("DSelected");
    });
    LSelected.forEach(element => {
        element.classList.remove("LSelected");
    });
    possibleMove.forEach(element => {
        element.classList.remove("possibleMove");
    });

    position = '.' + position;
    let clickfromCellDiv = document.querySelector(position);        // We got the cell user clicked on
    if (clickfromCellDiv.querySelector("img").classList.contains("darkp")) {           // If there is an piece in the cell
        clickfromCellDiv.querySelector("img").classList.add("DSelected");
    }
    if (clickfromCellDiv.querySelector("img").classList.contains("lightp")) {   // If the selected piece is light
        clickfromCellDiv.querySelector("img").classList.add("LSelected");
    }
    if (clickfromCellDiv.querySelector("img").classList.contains("rook")) { // If the clicked piece is a rook
        rookMovPattern(posToCoor(position)); // Get the movement pattern of the rook
    }


    console.log("Clicked on: " + posToCoor(position));
    console.log("Clicked on: " + coortopos(posToCoor(position)));

}