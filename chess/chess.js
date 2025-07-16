const posToCoor = (position) => {      // Converts a position like `a3` to coordinates column and row like 1, 3
    let row = position.charCodeAt(1) - 96;
    let col = parseInt(position[2]);
    return [row, col];
}
const coortopos = ([row, col]) => {
    let position = String.fromCharCode(row + 96) + String(col); // Converts coordinates to position like `a3`
    return position;
}

const rookMovPattern = ([row, col]) => {
    let directions = [[row, 0], [0, col], [-row, 0], [0, -col]]; // Rook can move in straight lines horizontally and vertically

    directions.forEach(([dRow, dCol]) => {
        if (dRow > 0 && dCol == 0) {
            checkPosibilitycount = 0;
            for (let i = (dRow + 1); i <= 8; i++) {
                if (document.querySelector('.' + coortopos([i, col])).querySelector(`img`) && document.querySelector('.' + coortopos([i, col])).querySelector(`img`).classList.contains(currentSide())) {
                    return;
                }
                else if (checkPosibilitycount > 0) return;
                else if (document.querySelector('.' + coortopos([i, col])).querySelector(`img`) && document.querySelector('.' + coortopos([i, col])).querySelector(`img`).classList.contains(oppSide())) {
                    checkPosibilitycount++;
                }
                document.querySelector('.' + coortopos([i, col])).classList.add(`possibleMove`);
            }
        }
        else if (dRow == 0 && dCol > 0) {
            checkPosibilitycount = 0;
            for (let i = (dCol + 1); i <= 8; i++) {
                if (document.querySelector('.' + coortopos([row, i])).querySelector(`img`) && document.querySelector('.' + coortopos([row, i])).querySelector(`img`).classList.contains(currentSide())) {
                    return;
                }
                else if (checkPosibilitycount > 0) return;
                else if (document.querySelector('.' + coortopos([row, i])).querySelector(`img`) && document.querySelector('.' + coortopos([row, i])).querySelector(`img`).classList.contains(oppSide())) {
                    checkPosibilitycount++;
                }
                document.querySelector('.' + coortopos([row, i])).classList.add(`possibleMove`);
            }
        }
        else if (dRow < 0 && dCol == 0) {
            checkPosibilitycount = 0;
            for (let i = (dRow + 1); i <= -1; i++) {
                if (document.querySelector('.' + coortopos([(i * -1), col])).querySelector(`img`) && document.querySelector('.' + coortopos([(i * -1), col])).querySelector(`img`).classList.contains(currentSide())) {
                    return;
                }
                else if (checkPosibilitycount > 0) return;
                else if (document.querySelector('.' + coortopos([(i * -1), col])).querySelector(`img`) && document.querySelector('.' + coortopos([(i * -1), col])).querySelector(`img`).classList.contains(oppSide())) {
                    checkPosibilitycount++;
                }
                document.querySelector('.' + coortopos([(i * -1), col])).classList.add(`possibleMove`);
            }
        }
        else if (dRow == 0 && dCol < 0) {
            checkPosibilitycount = 0;
            for (let i = (dCol + 1); i <= -1; i++) {
                if (document.querySelector('.' + coortopos([row, (i * -1)])).querySelector(`img`) && document.querySelector('.' + coortopos([row, (i * -1)])).querySelector(`img`).classList.contains(currentSide())) {
                    return;
                }
                else if (checkPosibilitycount > 0) return;
                else if (document.querySelector('.' + coortopos([row, (i * -1)])).querySelector(`img`) && document.querySelector('.' + coortopos([row, (i * -1)])).querySelector(`img`).classList.contains(oppSide())) {
                    checkPosibilitycount++;
                }
                document.querySelector('.' + coortopos([row, (i * -1)])).classList.add(`possibleMove`);
            }
        }

    });
}
const bishopMovPattern = ([row, col]) => {
    let directions = [[row, col], [row, -col], [-row, col], [-row, -col]];
    directions.forEach(([dRow, dCol]) => {
        if (dRow > 0 && dCol > 0) {
            checkPosibilitycount = 0;
            while (true) {
                dRow++;
                dCol++;
                if (dRow > 8 || dCol > 8) break;

                if (document.querySelector('.' + coortopos([dRow, dCol])).querySelector(`img`) && document.querySelector('.' + coortopos([dRow, dCol])).querySelector(`img`).classList.contains(currentSide())) {
                    return;
                }
                else if (checkPosibilitycount > 0) return;
                else if (document.querySelector('.' + coortopos([dRow, dCol])).querySelector(`img`) && document.querySelector('.' + coortopos([dRow, dCol])).querySelector(`img`).classList.contains(oppSide())) {
                    checkPosibilitycount++;
                }
                document.querySelector('.' + coortopos([dRow, dCol])).classList.add(`possibleMove`);
            }
        }
        else if (dRow > 0 && dCol < 0) {
            dCol = dCol * -1;
            checkPosibilitycount = 0;
            while (true) {
                dRow++;
                dCol--;
                if (dRow > 8 || dCol < 1) break;

                if (document.querySelector('.' + coortopos([dRow, dCol])).querySelector(`img`) && document.querySelector('.' + coortopos([dRow, dCol])).querySelector(`img`).classList.contains(currentSide())) {
                    return;
                }
                else if (checkPosibilitycount > 0) return;
                else if (document.querySelector('.' + coortopos([dRow, dCol])).querySelector(`img`) && document.querySelector('.' + coortopos([dRow, dCol])).querySelector(`img`).classList.contains(oppSide())) {
                    checkPosibilitycount++;
                }

                document.querySelector('.' + coortopos([dRow, dCol])).classList.add(`possibleMove`);
            }
        }
        else if (dRow < 0 && dCol > 0) {
            dRow = dRow * -1;
            checkPosibilitycount = 0;
            while (true) {
                dRow--;
                dCol++;
                if (dRow < 1 || dCol > 8) break;

                if (document.querySelector('.' + coortopos([dRow, dCol])).querySelector(`img`) && document.querySelector('.' + coortopos([dRow, dCol])).querySelector(`img`).classList.contains(currentSide())) {
                    return;
                }
                else if (checkPosibilitycount > 0) return;
                else if (document.querySelector('.' + coortopos([dRow, dCol])).querySelector(`img`) && document.querySelector('.' + coortopos([dRow, dCol])).querySelector(`img`).classList.contains(oppSide())) {
                    checkPosibilitycount++;
                }

                document.querySelector('.' + coortopos([dRow, dCol])).classList.add(`possibleMove`);
            }
        }
        else if (dRow < 0 && dCol < 0) {
            dRow = dRow * -1;
            dCol = dCol * -1;
            checkPosibilitycount = 0;
            while (true) {
                dRow--;
                dCol--;
                if (dRow < 1 || dCol < 1) break;

                if (document.querySelector('.' + coortopos([dRow, dCol])).querySelector(`img`) && document.querySelector('.' + coortopos([dRow, dCol])).querySelector(`img`).classList.contains(currentSide())) {
                    return;
                }
                else if (checkPosibilitycount > 0) return;
                else if (document.querySelector('.' + coortopos([dRow, dCol])).querySelector(`img`) && document.querySelector('.' + coortopos([dRow, dCol])).querySelector(`img`).classList.contains(oppSide())) {
                    checkPosibilitycount++;
                }

                document.querySelector('.' + coortopos([dRow, dCol])).classList.add(`possibleMove`);
            }
        }

    });
}
const knightMovPattern = ([row, col]) => {
    let directions = [[2, 1], [2, -1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [1, -2], [-1, -2]];
    directions.forEach(([dRow, dCol]) => {
        if ((row + dRow) < 1 || (row + dRow) > 8 || (col + dCol) < 1 || (col + dCol) > 8) { // If the move is out of bounds, skip it
            return;
        }

        if (document.querySelector('.' + coortopos([(row + dRow), (col + dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([(row + dRow), (col + dCol)])).querySelector(`img`).classList.contains(currentSide())) {
            return;
        }

        document.querySelector('.' + coortopos([(row + dRow), (col + dCol)])).classList.add(`possibleMove`);
    });
}
const kingMovPattern = ([row, col]) => {
    let directions = [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]];
    directions.forEach(([dRow, dCol]) => {
        if ((row + dRow) < 1 || (row + dRow) > 8 || (col + dCol) < 1 || (col + dCol) > 8) return; // If the move is out of bounds, skip it
        if (document.querySelector('.' + coortopos([(row + dRow), (col + dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([(row + dRow), (col + dCol)])).querySelector(`img`).classList.contains(currentSide())) {
            return; // If the cell already has a piece of the same side, skip it
        }
        document.querySelector('.' + coortopos([(row + dRow), (col + dCol)])).classList.add(`possibleMove`);
    });
}
const pawnMovPattern = ([row, col]) => {

    if (clickfromCellDiv.querySelector(`img`).classList.contains(`darkp`)) {
        if (document.querySelector('.' + coortopos([row + 1, col - 1])).querySelector(`img`) && document.querySelector('.' + coortopos([row + 1, col - 1])).querySelector(`img`).classList.contains(oppSide())) {
            document.querySelector('.' + coortopos([row + 1, col - 1])).classList.add(`possibleMove`);
        }
        if (document.querySelector('.' + coortopos([row - 1, col - 1])).querySelector(`img`) && document.querySelector('.' + coortopos([row - 1, col - 1])).querySelector(`img`).classList.contains(oppSide())) {
            document.querySelector('.' + coortopos([row - 1, col - 1])).classList.add(`possibleMove`);
        }
        if (col == 7) { // If the pawn is on its starting position

            if (document.querySelector('.' + coortopos([row, col - 1])).querySelector(`img`)) {
                return;
            }

            if (document.querySelector('.' + coortopos([row, col - 2])).querySelector(`img`)) {
                document.querySelector('.' + coortopos([row, col - 1])).classList.add(`possibleMove`);
                return;
            }

            document.querySelector('.' + coortopos([row, col - 1])).classList.add(`possibleMove`);
            document.querySelector('.' + coortopos([row, col - 2])).classList.add(`possibleMove`);
        }
        // else if (col == 1) {

        // }
        else {

            if (document.querySelector('.' + coortopos([row, col - 1])).querySelector(`img`)) {
                return;
            }

            document.querySelector('.' + coortopos([row, col - 1])).classList.add(`possibleMove`);
        }

    }
    else if (clickfromCellDiv.querySelector(`img`).classList.contains(`lightp`)) {
        if (document.querySelector('.' + coortopos([row + 1, col + 1])).querySelector(`img`) && document.querySelector('.' + coortopos([row + 1, col + 1])).querySelector(`img`).classList.contains(oppSide())) {
            document.querySelector('.' + coortopos([row + 1, col + 1])).classList.add(`possibleMove`);
        }
        if (document.querySelector('.' + coortopos([row - 1, col + 1])).querySelector(`img`) && document.querySelector('.' + coortopos([row - 1, col + 1])).querySelector(`img`).classList.contains(oppSide())) {
            document.querySelector('.' + coortopos([row - 1, col + 1])).classList.add(`possibleMove`);
        }
        if (col == 2) { // If the pawn is on its starting position

            if (document.querySelector('.' + coortopos([row, col + 1])).querySelector(`img`)) {
                return;
            }
            if (document.querySelector('.' + coortopos([row, col + 2])).querySelector(`img`)) {
                document.querySelector('.' + coortopos([row, col + 1])).classList.add(`possibleMove`);
                return;
            }

            document.querySelector('.' + coortopos([row, col + 1])).classList.add(`possibleMove`);
            document.querySelector('.' + coortopos([row, col + 2])).classList.add(`possibleMove`);
        }
        // else if (col == 8) {

        // }
        else {
            if (document.querySelector('.' + coortopos([row, col + 1])).querySelector(`img`)) {
                return;
            }
            document.querySelector('.' + coortopos([row, col + 1])).classList.add(`possibleMove`);
        }
    }

}

const isKingInCheck = (kingpos) => {
    let directionRook = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let directionBishop = [[1, 1], [-1, 1], [1, -1], [-1, -1]];
    let directionsKnight = [[2, 1], [2, -1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [1, -2], [-1, -2]];
    let directionsKing = [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]];
    let [row, col] = posToCoor(`.` + kingpos);
    row = parseInt(row);
    col = parseInt(col);
    let cell = null;
    let temp = 0;
    let tempcountforking;
    console.log(row, col);
    console.log(kingpos);
    let tempRow = 0;
    let tempCol = 0;

    if (kingcolor == "darkp") {
        if ((col - 1) < 3 || (row - 1) < 1 || (row + 1) > 8) return;
        cell = document.querySelector('.' + String(coortopos([(row + 1), (col - 1)])));
        console.log(String(coortopos([(row + 1), (col - 1)])));
        // cell.classList.add("backg");
        if (cell.querySelector('img') && cell.querySelector('img').classList.contains(".lightp")) {
            console.log("check by pawn [-1, +1 ]");
            temp = 1;
            return true;
        }
        cell = document.querySelector('.' + coortopos([(row - 1), (col - 1)]));
        // cell.classList.add("backg");
        if (cell.querySelector('img') && cell.querySelector('img').classList.contains(".lightp")) {
            console.log("check by pawn [-1, -1 ]");
            temp = 1;
            return true;
        }
    }
    if (kingcolor == "lightp") {
        if ((col + 1) < 1 || (row - 1) < 1 || (row + 1) > 8) return;
        cell = document.querySelector('.' + coortopos([(row + 1), (col + 1)]));
        // cell.classList.add("backg");
        if (cell.querySelector('img') && cell.querySelector('img').classList.contains(".darkp")) {
            console.log("check by pawn [+1, +1 ]");
            temp = 1;
            return true;
        }
        cell = document.querySelector('.' + coortopos([(row - 1), (col + 1)]));
        // cell.classList.add("backg");
        if (cell.querySelector('img') && cell.querySelector('img').classList.contains(".darkp")) {
            console.log("check by pawn [+1, -1 ]");
            temp = 1;
            return true;
        }
    }
    directionRook.forEach(([dRow, dCol]) => {
        tempRow = row;
        tempCol = col;
        for (let i = 0; i < 8; i++) {
            console.log("rishu");
            tempRow += dRow;
            tempCol += dCol;
            if (tempRow < 1 || tempRow > 8 || tempCol < 1 || tempCol > 8) return; // Out of bounds
            cell = document.querySelector('.' + coortopos([tempRow, tempCol]));
            cell.classList.add("backg");
            if (cell.querySelector(`img`) && cell.querySelector(`img`).classList.contains(`rook`) && cell.querySelector(`img`).classList.contains(kingOppColor)) {
                console.log("check by rook");
                temp = 1;
                return true
            }
            if (cell.querySelector(`img`) && cell.querySelector(`img`).classList.contains(`queen`) && cell.querySelector(`img`).classList.contains(kingOppColor)) {
                console.log("check by queen as rook");
                temp = 1;
                return true;
            }
            if (cell.querySelector(`img`)) return; // Blocked by another piece

        }
    });
    directionBishop.forEach(([dRow, dCol]) => {
        tempcountforking = 0;
        tempRow = row;
        tempCol = col;
        while (tempcountforking < 8) {
            tempRow += dRow;
            tempCol += dCol;
            if (tempRow < 1 || tempRow > 8 || tempCol < 1 || tempCol > 8) break; // Out of bounds
            cell = document.querySelector('.' + coortopos([tempRow, tempCol]));
            cell.classList.add("backg");
            if (cell.querySelector(`img`) && cell.querySelector(`img`).classList.contains(`bishop`) && cell.querySelector(`img`).classList.contains(kingOppColor)) {
                console.log("check by bishop");
                temp = 1;
                return true;
            }
            if (cell.querySelector(`img`) && cell.querySelector(`img`).classList.contains(`queen`) && cell.querySelector(`img`).classList.contains(kingOppColor)) {
                console.log("check by queen as bishop");
                temp = 1;
                return true;
            }
            if (cell.querySelector(`img`)) break; // Blocked by another piece
            tempcountforking++;
        }

    });
    directionsKnight.forEach(([dRow, dCol]) => {
        if ((row + dRow) < 1 || (row + dRow) > 8 || (col + dCol) < 1 || (col + dCol) > 8) return; // If the move is out of bounds, skip it
        cell = document.querySelector('.' + coortopos([(row + dRow), (col + dCol)]));
        cell.classList.add("backg");
        if (cell.querySelector(`img`) && cell.querySelector(`img`).classList.contains(`knight`) && cell.querySelector(`img`).classList.contains(kingOppColor)) {
            console.log("check by knight");
            temp = 1;
            return true;
        }
    });
    directionsKing.forEach(([dRow, dCol]) => {
        if ((row + dRow) < 1 || (row + dRow) > 8 || (col + dCol) < 1 || (col + dCol) > 8) return; // If the move is out of bounds, skip it
        cell = document.querySelector('.' + coortopos([(row + dRow), (col + dCol)]));
        if (cell.querySelector(`img`) && cell.querySelector(`img`).classList.contains(`king`) && cell.querySelector(`img`).classList.contains(kingOppColor)) {
            console.log("check by king");
            temp = 1;
            return true;
        }
    });

    if (temp == 1) return true;
}
const posblMovOFClickPiece = (position) => {
    if (clickfromCellDiv.querySelector(`img`).classList.contains(`rook`)) {
        rookMovPattern(posToCoor(position));
    }
    if (clickfromCellDiv.querySelector(`img`).classList.contains(`bishop`)) {
        bishopMovPattern(posToCoor(position));
    }
    if (clickfromCellDiv.querySelector(`img`).classList.contains(`knight`)) {
        knightMovPattern(posToCoor(position));
    }
    if (clickfromCellDiv.querySelector(`img`).classList.contains(`queen`)) {
        rookMovPattern(posToCoor(position));
        bishopMovPattern(posToCoor(position));
    }
    if (clickfromCellDiv.querySelector(`img`).classList.contains(`king`)) {
        kingMovPattern(posToCoor(position));
    }
    if (clickfromCellDiv.querySelector(`img`).classList.contains(`pawn`)) {
        pawnMovPattern(posToCoor(position));
    }
}
const deselectall = () => {
    let selectedDark = document.querySelectorAll(`.selectedDark`);
    let selectedLight = document.querySelectorAll(`.selectedLight`);
    let possibleMove = document.querySelectorAll(`.possibleMove`);
    selectedDark.forEach(element => {
        element.classList.remove(`selectedDark`);
    });
    selectedLight.forEach(element => {
        element.classList.remove(`selectedLight`);
    });
    possibleMove.forEach(element => {
        element.classList.remove(`possibleMove`);
    });
}

const oppSide = () => {
    if (clickfromCellDiv.querySelector(`img`) && clickfromCellDiv.querySelector(`img`).classList.contains(`darkp`)) {
        return `lightp`;
    } else if (clickfromCellDiv.querySelector(`img`) && clickfromCellDiv.querySelector(`img`).classList.contains(`lightp`)) {
        return `darkp`;
    }
}
const currentSide = () => {
    if (clickfromCellDiv.querySelector(`img`).classList.contains(`darkp`))
        return `darkp`;
    else if (clickfromCellDiv.querySelector(`img`).classList.contains(`lightp`))
        return `lightp`;
}
const getOppSide = (piece) => {
    if (piece) {
        if (piece.classList.contains("darkp") || (piece.querySelector('img') && piece.querySelector('img').classList.contains("darkp"))) {
            return "lightp";
        }
        if ((piece && piece.classList.contains("lightp")) || (piece.querySelector('img') && piece.querySelector('img').classList.contains("lightp"))) {
            return "darkp";
        }
    }
}
const getCurSide = (piece) => {
    if (piece) {
        if ((piece && piece.classList.contains("darkp")) || (piece.querySelector('img') && piece.querySelector('img').classList.contains("darkp"))) {
            return "darkp";
        }
        if ((piece && piece.classList.contains("lightp")) || (piece.querySelector('img') && piece.querySelector('img').classList.contains("lightp"))) {
            return "lightp";
        }
    }
}

const getClicked = (position) => {

    clickfromCellDiv = document.querySelector(position);        // We got the cell user clicked on

    let kings = document.querySelectorAll(`.king`);
    kings.forEach(king => {
        if (king.classList.contains(currentSide())) {
            kingpos = king.parentElement.id;
            kingcolor = getCurSide(king);
        }
    });
    if (isKingInCheck(kingpos)) {
        console.warn("King is in check!");
    }
    else {
        console.warn("king is safe")
    }

    console.log(kingcolor);


    if (clickfromCellDiv.classList.contains(`possibleMove`) && preClickedCell) {   // Moving piece and Turn rotation
        let imgToMove = preClickedCell.firstElementChild;
        if (imgToMove) {
            clickfromCellDiv.innerHTML = ``;
            preClickedCell.innerHTML = ``;
            clickfromCellDiv.appendChild(imgToMove); // Move the piece to the clicked cell
            deselectall();
            if (oppSide() === `lightp` || oppSide() === `darkp`) {
                document.querySelectorAll(`.` + oppSide()).forEach(opoSide => {
                    opoSide.classList.remove(`inactive`);
                });
                document.querySelectorAll(`.` + currentSide()).forEach(opoSide => {
                    opoSide.classList.add(`inactive`);
                });
            }
        }
    }
    else {  // Deselect all if clicked in other area
        deselectall();
    }
    if (clickfromCellDiv.querySelector(`img`) && clickfromCellDiv.querySelector(`img`).classList.contains(`inactive`)) {
        console.warn("Its not your TURN");
        return;
    }
    else {
        if (clickfromCellDiv.querySelector(`img`) && clickfromCellDiv.querySelector(`img`).classList.contains(`darkp`)) {           // If there is an piece in the cell
            clickfromCellDiv.querySelector(`img`).classList.add(`selectedDark`);
        }
        if (clickfromCellDiv.querySelector(`img`) && clickfromCellDiv.querySelector(`img`).classList.contains(`lightp`)) {   // If the selected piece is light
            clickfromCellDiv.querySelector(`img`).classList.add(`selectedLight`);
        }
        if (clickfromCellDiv.querySelector(`img`)) {
            posblMovOFClickPiece(position);

        }
        preClickedCell = clickfromCellDiv;
    }
}
var preClickedCell = null;
var clickfromCellDiv = null;
var checkPosibilitycount = 0;
var kingpos = null;
var kingcolor = null;
var kingOppColor = null;
// var kingInCheck = false;
document.querySelectorAll(`.darkp`).forEach(opoSide => {
    opoSide.classList.add(`inactive`);
});