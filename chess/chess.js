var preClickedCell = null;
var clickfromCellDiv = null;
var checkPosibilitycount = 0;
var kingpos = null;
var kingcolor = null;
var kingOppColor = null;
document.querySelectorAll(`.darkp`).forEach(opoSide => {
    opoSide.classList.add(`inactive`);
});

const posToCoor = (position) => {
    let row = position.charCodeAt(1) - 96;
    let col = parseInt(position[2]);
    return [row, col];
}
const coortopos = ([row, col]) => {
    let position = String.fromCharCode(row + 96) + String(col);
    return position;
}

const rookMovPattern = ([row, col]) => {
    let directions = [[row, 0], [0, col], [-row, 0], [0, -col]];

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
            for (let i = 0; i < 8; i++) {
                dRow++;
                dCol++;
                if (dRow > 8 || dCol > 8) continue;

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
            for (let i = 0; i < 8; i++) {
                dRow++;
                dCol--;
                if (dRow > 8 || dCol < 1) continue;

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
            for (let i = 0; i < 8; i++) {
                dRow--;
                dCol++;
                if (dRow < 1 || dCol > 8) continue;

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
            for (let i = 0; i < 8; i++) {
                dRow--;
                dCol--;
                if (dRow < 1 || dCol < 1) continue;

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
        if ((row + dRow) < 1 || (row + dRow) > 8 || (col + dCol) < 1 || (col + dCol) > 8) {
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
    let directionKnight = [[2, 1], [2, -1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [1, -2], [-1, -2]];
    let tempRow;
    let tempCol;

    // manipulating the possibleMove of king
    for (let [dRow, dCol] of directions) {
        tempRow = row + dRow;
        tempCol = col + dCol;
        if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(kingcolor)) continue;
        if (tempRow < 1 || tempRow > 8 || tempCol < 1 || tempCol > 8) continue;
        if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(currentSide())) continue;

        // Is rook there
        if ((dRow == 1 && dCol == 1) || (dRow == -1 && dCol == 1) || (dRow == -1 && dCol == -1) || (dRow == 1 && dCol == -1)) {

            // if rook is in the cell itself
            if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`rook`)) {
                document.querySelector('.' + coortopos([row, tempCol])) ? document.querySelector('.' + coortopos([row, tempCol])).classList.add(`impossibleMove`) : null;
                document.querySelector('.' + coortopos([row - dRow, tempCol])) ? document.querySelector('.' + coortopos([row - dRow, tempCol])).classList.add(`impossibleMove`) : null;
                document.querySelector('.' + coortopos([tempRow, col])) ? document.querySelector('.' + coortopos([tempRow, col])).classList.add(`impossibleMove`) : null;
                document.querySelector('.' + coortopos([tempRow - dCol, col])) ? document.querySelector('.' + coortopos([tempRow - dCol, col])).classList.add(`impossibleMove`) : null;
            }

            // if rook is in the same row
            for (let i = 0; i < 6; i++) {
                tempRow += dRow;
                if (tempRow < 1 || tempRow > 8 || tempCol < 1 || tempCol > 8) return;
                if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(kingcolor)) {
                    return;
                }
                if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`rook`)) {
                    for (let j = row + dRow; j > row - (2 * dRow); j -= dRow) {
                        document.querySelector('.' + coortopos([j, tempCol])).classList.add(`impossibleMove`);
                    }
                    return;
                }
                if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`)) {
                    return;
                }
            }

            tempRow = row + dRow;
            // if rook is in the same column
            for (let i = 0; i < 6; i++) {
                tempCol += dCol;
                if (tempRow < 1 || tempRow > 8 || tempCol < 1 || tempCol > 8) return;
                if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(kingcolor)) {
                    return;
                }
                if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`rook`)) {
                    for (let j = col + dCol; j > col - (2 * dCol); j - dCol) {
                        document.querySelector('.' + coortopos([tempRow, j])).classList.add(`impossibleMove`);
                    }
                }
                if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`)) {
                    return;
                }
            }
        }
        // Is bishop there
        if ((dRow == 0 && dCol == 1) || (dRow == 1 && dCol == 0) || (dRow == 0 && dCol == -1) || (dRow == -1 && dCol == 0)) {
            tempCol = col + dCol;
            // if bishop is in the cell itself
            if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`bishop`)) {
                if (dCol == 0) {
                    if (row + 1 < 1 || row + 1 > 8 || tempCol < 1 || tempCol > 8 || row - 1 < 1 || row - 1 > 8 || tempCol < 1 || tempCol > 8) continue;
                    document.querySelector('.' + coortopos([row + 1, tempCol])) ? document.querySelector('.' + coortopos([row + 1, tempCol])).classList.add(`impossibleMove`) : null;
                    document.querySelector('.' + coortopos([row - 1, tempCol])) ? document.querySelector('.' + coortopos([row - 1, tempCol])).classList.add(`impossibleMove`) : null;
                }
                if (dRow == 0) {
                    if (tempRow < 1 || tempRow > 8 || col + 1 < 1 || col + 1 > 8 || tempRow < 1 || tempRow > 8 || col - 1 < 1 || col - 1 > 8) continue;
                    document.querySelector('.' + coortopos([tempRow, col + 1])) ? document.querySelector('.' + coortopos([tempRow, col + 1])).classList.add(`impossibleMove`) : null;
                    document.querySelector('.' + coortopos([tempRow, col - 1])) ? document.querySelector('.' + coortopos([tempRow, col - 1])).classList.add(`impossibleMove`) : null;
                }
            }
            // if bishop is in the Collumn + i side
            if (dCol == 0) {
                for (let i = 1; i <= 6; i++) {
                    if (tempRow + (i * dRow) < 1 || tempRow + (i * dRow) > 8 || tempCol + i < 1 || tempCol + i > 8) return;
                    if (document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + i])) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + i])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + i])).querySelector(`img`).classList.contains(kingcolor)) {
                        return;
                    }
                    if (document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + 1])) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + i])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + i])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol + i])).querySelector(`img`).classList.contains(`bishop`)) {
                        document.querySelector('.' + coortopos([tempRow, tempCol])) ? document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`) : null;
                        document.querySelector('.' + coortopos([tempRow - dRow, tempCol - 1])) ? document.querySelector('.' + coortopos([tempRow - dRow, tempCol - 1])).classList.add(`impossibleMove`) : null;
                        return;
                    }
                    if (document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + i])) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + i])).querySelector(`img`)) {
                        return;
                    }
                }
                for (let i = 1; i <= 6; i++) {
                    if (tempRow + (i * dRow) < 1 || tempRow + (i * dRow) > 8 || tempCol - i < 1 || tempCol - i > 8) return;
                    if (document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - i])) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - i])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - i])).querySelector(`img`).classList.contains(kingcolor)) {
                        return;
                    }
                    if (document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - i])) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - i])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - i])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`bishop`)) {
                        document.querySelector('.' + coortopos([tempRow, tempCol])) ? document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`) : null;
                        document.querySelector('.' + coortopos([tempRow - dRow, tempCol + 1])) ? document.querySelector('.' + coortopos([tempRow - dRow, tempCol + 1])).classList.add(`impossibleMove`) : null;
                        return;
                    }
                    if (document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - i])) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - i])).querySelector(`img`)) {
                        return;
                    }
                }
            }
            // if bishop is in the Row + i side
            if (dRow == 0) {
                for (let i = 1; i <= 6; i++) {
                    if (tempRow + i < 1 || tempRow + i > 8 || tempCol + (i * dCol) < 1 || tempCol + (i * dCol) > 8) return;
                    if (document.querySelector('.' + coortopos([tempRow + i, tempCol + (i * dCol)])) && document.querySelector('.' + coortopos([tempRow + i, tempCol + (i * dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + i, tempCol + (i * dCol)])).querySelector(`img`).classList.contains(kingcolor)) {
                        return;
                    }
                    if (document.querySelector('.' + coortopos([tempRow + i, tempCol + (i * dCol)])) && document.querySelector('.' + coortopos([tempRow + i, tempCol + (i * dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + i, tempCol + (i * dCol)])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`bishop`)) {
                        document.querySelector('.' + coortopos([tempRow, tempCol])) ? document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`) : null;
                        document.querySelector('.' + coortopos([tempRow - 1, tempCol - dCol])) ? document.querySelector('.' + coortopos([tempRow - 1, tempCol - dCol])).classList.add(`impossibleMove`) : null;
                        return;
                    }
                    if (document.querySelector('.' + coortopos([tempRow + i, tempCol + (i * dCol)]))) {
                        return;
                    }
                }
                for (let i = 1; i <= 6; i++) {
                    if (tempRow - i < 1 || tempRow - i > 8 || tempCol - (i * dCol) < 1 || tempCol - (i * dCol) > 8) return;
                    if (document.querySelector('.' + coortopos([tempRow - i, tempCol - (i * dCol)])) && document.querySelector('.' + coortopos([tempRow - i, tempCol - (i * dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow - i, tempCol - (i * dCol)])).querySelector(`img`).classList.contains(kingcolor)) {
                        return;
                    }
                    if (document.querySelector('.' + coortopos([tempRow - i, tempCol - (i * dCol)])) && document.querySelector('.' + coortopos([tempRow - i, tempCol - (i * dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow - i, tempCol - (i * dCol)])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`bishop`)) {
                        document.querySelector('.' + coortopos([tempRow, tempCol])) ? document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`) : null;
                        document.querySelector('.' + coortopos([tempRow + 1, tempCol + dCol])) ? document.querySelector('.' + coortopos([tempRow + 1, tempCol + dCol])).classList.add(`impossibleMove`) : null;
                        return;
                    }
                    if (document.querySelector('.' + coortopos([tempRow - i, tempCol - (i * dCol)]))) {
                        return;
                    }
                }
            }
        }
        // Is knight there
        directionKnight.forEach(([drow, dcol]) => {
            if (document.querySelector('.' + coortopos([(row + drow + dRow), (col + dcol + dCol)])) && document.querySelector('.' + coortopos([(row + drow + dRow), (col + dcol + dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([(row + drow + dRow), (col + dcol + dCol)])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([(row + drow + dRow), (col + dcol + dCol)])).querySelector(`img`).classList.contains(`knight`)) {
                document.querySelector('.' + coortopos([row + dRow, col + dCol])) ? document.querySelector('.' + coortopos([row + dRow, col + dCol])).classList.add(`impossibleMove`) : null;
            }
        });
        //Is king there
        if ((dRow == 1 && dCol == 1) || (dRow == -1 && dCol == 1) || (dRow == -1 && dCol == -1) || (dRow == 1 && dCol == -1)) {
            if (document.querySelector('.' + coortopos([(tempRow + dRow), (tempCol + dCol)])) && document.querySelector('.' + coortopos([(tempRow + dRow), (tempCol + dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([(tempRow + dRow), (tempCol + dCol)])).querySelector(`img`).classList.contains(oppSide()) && document.querySelector('.' + coortopos([(tempRow + dRow), (tempCol + dCol)])).querySelector(`img`).classList.contains(`king`)) {
                document.querySelector('.' + coortopos([tempRow, tempCol])) ? document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`) : null;
            }
            if (document.querySelector('.' + coortopos([tempRow, (tempCol + dCol)])) && document.querySelector('.' + coortopos([tempRow, (tempCol + dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, (tempCol + dCol)])).querySelector(`img`).classList.contains(oppSide()) && document.querySelector('.' + coortopos([tempRow, (tempCol + dCol)])).querySelector(`img`).classList.contains(`king`)) {
                document.querySelector('.' + coortopos([tempRow, tempCol])) ? document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`) : null;
                document.querySelector('.' + coortopos([row, tempCol])) ? document.querySelector('.' + coortopos([row, tempCol])).classList.add(`impossibleMove`) : null;
            }
            if (document.querySelector('.' + coortopos([(tempRow + dRow), tempCol])) && document.querySelector('.' + coortopos([(tempRow + dRow), tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([(tempRow + dRow), tempCol])).querySelector(`img`).classList.contains(oppSide()) && document.querySelector('.' + coortopos([(tempRow + dRow), tempCol])).querySelector(`img`).classList.contains(`king`)) {
                document.querySelector('.' + coortopos([tempRow, tempCol])) ? document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`) : null;
                document.querySelector('.' + coortopos([tempRow, col])) ? document.querySelector('.' + coortopos([tempRow, col])).classList.add(`impossibleMove`) : null;
            }
        }
        if ((dRow == 0 && dCol == 1) || (dRow == 1 && dCol == 0) || (dRow == 0 && dCol == -1) || (dRow == -1 && dCol == 0)) {
            if (document.querySelector('.' + coortopos([(tempRow + dRow), (tempCol + dCol)])) && document.querySelector('.' + coortopos([(tempRow + dRow), (tempCol + dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([(tempRow + dRow), (tempCol + dCol)])).querySelector(`img`).classList.contains(oppSide()) && document.querySelector('.' + coortopos([(tempRow + dRow), (tempCol + dCol)])).querySelector(`img`).classList.contains(`king`)) {
                document.querySelector('.' + coortopos([tempRow, tempCol])) ? document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`) : null;
                if (dCol == 0) {
                    document.querySelector('.' + coortopos([tempRow, tempCol + 1])) ? document.querySelector('.' + coortopos([tempRow, tempCol + 1])).classList.add(`impossibleMove`) : null;
                    document.querySelector('.' + coortopos([tempRow, tempCol - 1])) ? document.querySelector('.' + coortopos([tempRow, tempCol - 1])).classList.add(`impossibleMove`) : null;
                }
                if (dRow == 0) {
                    document.querySelector('.' + coortopos([tempRow + 1, tempCol])) ? document.querySelector('.' + coortopos([tempRow + 1, tempCol])).classList.add(`impossibleMove`) : null;
                    document.querySelector('.' + coortopos([tempRow - 1, tempCol])) ? document.querySelector('.' + coortopos([tempRow - 1, tempCol])).classList.add(`impossibleMove`) : null;
                }
            }
        }
        //Is queen there
        if ((dRow == 1 && dCol == 1) || (dRow == -1 && dCol == 1) || (dRow == -1 && dCol == -1) || (dRow == 1 && dCol == -1)) {     // Queen as rook
            for (let i = 1; i <= 6; i++) {
                tempRow += dRow;
                if (tempRow < 1 || tempRow > 8 || tempCol < 1 || tempCol > 8) return;
                if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(kingcolor)) {
                    return;
                }
                if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`queen`)) {
                    for (j = row + dRow; j > row - (2 * dRow); j - dRow) {
                        document.querySelector('.' + coortopos([j, tempCol])) ? document.querySelector('.' + coortopos([j, tempCol])).classList.add(`impossibleMove`) : null;
                    }
                    if (i == 1) {
                        document.querySelector('.' + coortopos([tempRow - dRow, tempCol - dCol])) ? document.querySelector('.' + coortopos([tempRow - dRow, tempCol - dCol])).classList.add(`impossibleMove`) : null;
                        document.querySelector('.' + coortopos([tempRow - (2 * dRow), tempCol - (2 * dCol)])) ? document.querySelector('.' + coortopos([tempRow - (2 * dRow), tempCol - (2 * dCol)])).classList.add(`impossibleMove`) : null;

                    }
                    if (i == 2) {
                        document.querySelector('.' + coortopos([tempRow - (2 * dRow), tempCol - (2 * dCol)])) ? document.querySelector('.' + coortopos([tempRow - (2 * dRow), tempCol - (2 * dCol)])).classList.add(`impossibleMove`) : null;

                    }
                    return;
                }
                if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`)) {
                    return;
                }
            }
            for (let i = 1; i <= 6; i++) {
                tempCol += dCol;
                if (tempRow < 1 || tempRow > 8 || tempCol < 1 || tempCol > 8) return;
                if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(kingcolor)) {
                    return;
                }
                if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`queen`)) {
                    for (j = col + dCol; j > col - (2 * dCol); j -= dCol) {
                        document.querySelector('.' + coortopos([tempRow, j])) ? document.querySelector('.' + coortopos([tempRow, j])).classList.add(`impossibleMove`) : null;
                    }
                    if (i == 1) {
                        document.querySelector('.' + coortopos([tempRow - dRow, tempCol - dCol])) ? document.querySelector('.' + coortopos([tempRow - dRow, tempCol - dCol])).classList.add(`impossibleMove`) : null;
                        document.querySelector('.' + coortopos([tempRow - (2 * dRow), tempCol - (2 * dCol)])) ? document.querySelector('.' + coortopos([tempRow - (2 * dRow), tempCol - (2 * dCol)])).classList.add(`impossibleMove`) : null;

                    }
                    if (i == 2) {
                        document.querySelector('.' + coortopos([tempRow - (2 * dRow), tempCol - (2 * dCol)])) ? document.querySelector('.' + coortopos([tempRow - (2 * dRow), tempCol - (2 * dCol)])).classList.add(`impossibleMove`) : null;

                    }
                    return;
                }
                if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`)) {
                    return;
                }
            }
        }
        if ((dRow == 0 && dCol == 1) || (dRow == 1 && dCol == 0) || (dRow == 0 && dCol == -1) || (dRow == -1 && dCol == 0)) {       //Queen as Bishop
            if (dCol == 0) {
                for (let i = 1; i <= 6; i++) {
                    if (tempRow + (i * dRow) < 1 || tempRow + (i * dRow) > 8 || tempCol + i < 1 || tempCol + i > 8) return;
                    if (document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + i])) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + i])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + i])).querySelector(`img`).classList.contains(kingcolor)) {
                        return;
                    }
                    if (document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + i])) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + i])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + i])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`queen`)) {
                        document.querySelector('.' + coortopos([tempRow, tempCol])) ? document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`) : null;
                        document.querySelector('.' + coortopos([tempRow - dRow, tempCol - 1])) ? document.querySelector('.' + coortopos([tempRow - dRow, tempCol - 1])).classList.add(`impossibleMove`) : null;
                        if (i == 1) {
                            document.querySelector('.' + coortopos([tempRow, tempCol + 1])) ? document.querySelector('.' + coortopos([tempRow, tempCol + 1])).classList.add(`impossibleMove`) : null;
                            document.querySelector('.' + coortopos([tempRow - dRow, tempCol + 1])) ? document.querySelector('.' + coortopos([tempRow - dRow, tempCol + 1])).classList.add(`impossibleMove`) : null;
                            document.querySelector('.' + coortopos([tempRow - (2 * dRow), tempCol + 1])) ? document.querySelector('.' + coortopos([tempRow - (2 * dRow), tempCol + 1])).classList.add(`impossibleMove`) : null;
                        }
                        return;
                    }
                    if (document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + i])) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + i])).querySelector(`img`)) {
                        return;
                    }
                }
                for (let i = 1; i <= 6; i++) {
                    if (tempRow + (i * dRow) < 1 || tempRow + (i * dRow) > 8 || tempCol - i < 1 || tempCol - i > 8) return;
                    if (document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - i])) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - i])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - i])).querySelector(`img`).classList.contains(kingcolor)) {
                        return;
                    }
                    if (document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - i])) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - i])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - i])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`queen`)) {
                        document.querySelector('.' + coortopos([tempRow, tempCol])) ? document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`) : null;
                        document.querySelector('.' + coortopos([tempRow - dRow, tempCol + 1])) ? document.querySelector('.' + coortopos([tempRow - dRow, tempCol + 1])).classList.add(`impossibleMove`) : null;
                        if (i == 1) {
                            document.querySelector('.' + coortopos([tempRow, tempCol - 1])) ? document.querySelector('.' + coortopos([tempRow, tempCol - 1])).classList.add(`impossibleMove`) : null;
                            document.querySelector('.' + coortopos([tempRow - dRow, tempCol - 1])) ? document.querySelector('.' + coortopos([tempRow - dRow, tempCol - 1])).classList.add(`impossibleMove`) : null;
                            document.querySelector('.' + coortopos([tempRow - (2 * dRow), tempCol - 1])) ? document.querySelector('.' + coortopos([tempRow - (2 * dRow), tempCol - 1])).classList.add(`impossibleMove`) : null;
                        }
                        return;
                    }
                    if (document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - i])) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - i])).querySelector(`img`)) {
                        return;
                    }
                }
            }
            if (dRow == 0) {
                tempRow = row + dRow;
                tempCol = col + dCol;
                for (let i = 1; i <= 6; i++) {
                    if (tempRow + i < 1 || tempRow + i > 8 || tempCol + (i * dCol) < 1 || tempCol + (i * dCol) > 8) return;
                    if (document.querySelector('.' + coortopos([tempRow + i, tempCol + (i * dCol)])) && document.querySelector('.' + coortopos([tempRow + i, tempCol + (i * dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + i, tempCol + (i * dCol)])).querySelector(`img`).classList.contains(kingcolor)) {
                        return;
                    }
                    if (document.querySelector('.' + coortopos([tempRow + i, tempCol + (i * dCol)])) && document.querySelector('.' + coortopos([tempRow + i, tempCol + (i * dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + i, tempCol + (i * dCol)])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`queen`)) {
                        document.querySelector('.' + coortopos([tempRow, tempCol])) ? document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`) : null;
                        document.querySelector('.' + coortopos([tempRow - 1, tempCol - dCol])) ? document.querySelector('.' + coortopos([tempRow - 1, tempCol - dCol])).classList.add(`impossibleMove`) : null;
                        if (i == 1) {
                            document.querySelector('.' + coortopos([tempRow + 1, tempCol])) ? document.querySelector('.' + coortopos([tempRow + 1, tempCol])).classList.add(`impossibleMove`) : null;
                            document.querySelector('.' + coortopos([tempRow + 1, tempCol - dCol])) ? document.querySelector('.' + coortopos([tempRow + 1, tempCol - dCol])).classList.add(`impossibleMove`) : null;
                            document.querySelector('.' + coortopos([tempRow + 1, tempCol - (2 * dCol)])) ? document.querySelector('.' + coortopos([tempRow + 1, tempCol - (2 * dCol)])).classList.add(`impossibleMove`) : null;
                        }
                        return;
                    }
                    if (document.querySelector('.' + coortopos([tempRow + i, tempCol + (i * dCol)])) && document.querySelector('.' + coortopos([tempRow + i, tempCol + (i * dCol)])).querySelector(`img`)) {
                        return;
                    }
                }
                for (let i = 1; i <= 6; i++) {
                    if (tempRow < 1 || tempRow > 8 || tempCol < 1 || tempCol > 8) return;
                    if (document.querySelector('.' + coortopos([tempRow - i, tempCol - (i * dCol)])) && document.querySelector('.' + coortopos([tempRow - i, tempCol - (i * dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow - i, tempCol - (i * dCol)])).querySelector(`img`).classList.contains(kingcolor)) {
                        return;
                    }
                    if (document.querySelector('.' + coortopos([tempRow - i, tempCol - (i * dCol)])) && document.querySelector('.' + coortopos([tempRow - i, tempCol - (i * dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow - i, tempCol - (i * dCol)])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`queen`)) {
                        document.querySelector('.' + coortopos([tempRow, tempCol])) ? document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`) : null;
                        document.querySelector('.' + coortopos([tempRow + 1, tempCol + dCol])) ? document.querySelector('.' + coortopos([tempRow + 1, tempCol + dCol])).classList.add(`impossibleMove`) : null;
                        if (i == 1) {
                            document.querySelector('.' + coortopos([tempRow - 1, tempCol])) ? document.querySelector('.' + coortopos([tempRow - 1, tempCol])).classList.add(`impossibleMove`) : null;
                            document.querySelector('.' + coortopos([tempRow - 1, tempCol - dCol])) ? document.querySelector('.' + coortopos([tempRow - 1, tempCol - dCol])).classList.add(`impossibleMove`) : null;
                            document.querySelector('.' + coortopos([tempRow - 1, tempCol - (2 * dCol)])) ? document.querySelector('.' + coortopos([tempRow - 1, tempCol - (2 * dCol)])).classList.add(`impossibleMove`) : null;
                        }
                        return;
                    }
                    if (document.querySelector('.' + coortopos([tempRow - i, tempCol - (i * dCol)])) && document.querySelector('.' + coortopos([tempRow - i, tempCol - (i * dCol)])).querySelector(`img`)) {
                        return;
                    }
                }
            }
        }
        // Is pawn there
        if (kingcolor == `lightp`) {
            if (tempRow - 1 < 1 || tempRow - 1 > 8 || tempCol + 1 < 1 || tempCol + 1 > 8 || tempRow + 1 < 1 || tempRow + 1 > 8 || tempCol + 1 < 1 || tempCol + 1 > 8) continue;
            if (document.querySelector('.' + coortopos([tempRow - 1, tempCol + 1])) && document.querySelector('.' + coortopos([tempRow - 1, tempCol + 1])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow - 1, tempCol + 1])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`pawn`))
                document.querySelector('.' + coortopos([tempRow, tempCol])) ? document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`) : null;
            if (document.querySelector('.' + coortopos([tempRow + 1, tempCol + 1])) && document.querySelector('.' + coortopos([tempRow + 1, tempCol + 1])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + 1, tempCol + 1])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`pawn`))
                document.querySelector('.' + coortopos([tempRow, tempCol])) ? document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`) : null;
        }
        if (kingcolor == `darkp`) {
            if (tempRow - 1 < 1 || tempRow - 1 > 8 || tempCol - 1 < 1 || tempCol - 1 > 8 || tempRow + 1 < 1 || tempRow + 1 > 8 || tempCol - 1 < 1 || tempCol - 1 > 8) continue;
            if (document.querySelector('.' + coortopos([tempRow - 1, tempCol - 1])) && document.querySelector('.' + coortopos([tempRow - 1, tempCol - 1])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow - 1, tempCol - 1])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`pawn`))
                document.querySelector('.' + coortopos([tempRow, tempCol])) ? document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`) : null;
            if (document.querySelector('.' + coortopos([tempRow + 1, tempCol - 1])) && document.querySelector('.' + coortopos([tempRow + 1, tempCol - 1])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + 1, tempCol - 1])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`pawn`))
                document.querySelector('.' + coortopos([tempRow, tempCol])) ? document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`) : null;
        }
    }
    // giving the possibleMoves of king except the ones that are impossible due to the opponent's pieces 
    for (let [dRow, dCol] of directions) {
        tempRow = row + dRow;
        tempCol = col + dCol;
        if (tempRow < 1 || tempRow > 8 || tempCol < 1 || tempCol > 8) {
            continue;
        }
        else if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(kingcolor)) continue;
        else if (document.querySelector('.' + coortopos([tempRow, tempCol])).classList.contains(`impossibleMove`)) continue;
        else document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`possibleMove`);
    }
}

const pawnMovPattern = ([row, col]) => {

    if (clickfromCellDiv.querySelector(`img`).classList.contains(`darkp`)) {
        if (document.querySelector('.' + coortopos([row + 1, col - 1])) && document.querySelector('.' + coortopos([row + 1, col - 1])).querySelector(`img`) && document.querySelector('.' + coortopos([row + 1, col - 1])).querySelector(`img`).classList.contains(oppSide())) {
            document.querySelector('.' + coortopos([row + 1, col - 1])).classList.add(`possibleMove`);
        }
        if (document.querySelector('.' + coortopos([row - 1, col - 1])) && document.querySelector('.' + coortopos([row - 1, col - 1])).querySelector(`img`) && document.querySelector('.' + coortopos([row - 1, col - 1])).querySelector(`img`).classList.contains(oppSide())) {
            document.querySelector('.' + coortopos([row - 1, col - 1])).classList.add(`possibleMove`);
        }
        if (col == 7) {
            if (document.querySelector('.' + coortopos([row, col - 1])).querySelector(`img`)) {
                return;
            }
            if (document.querySelector('.' + coortopos([row, col - 1])).querySelector(`img`)) {
                document.querySelector('.' + coortopos([row, col - 1])).classList.add(`possibleMove`);
                return;
            }
            else {
                document.querySelector('.' + coortopos([row, col - 2])).classList.add(`possibleMove`);
                document.querySelector('.' + coortopos([row, col - 1])).classList.add(`possibleMove`);
            }
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
        if (document.querySelector('.' + coortopos([row + 1, col + 1])) && document.querySelector('.' + coortopos([row + 1, col + 1])).querySelector(`img`) && document.querySelector('.' + coortopos([row + 1, col + 1])).querySelector(`img`).classList.contains(oppSide())) {
            document.querySelector('.' + coortopos([row + 1, col + 1])).classList.add(`possibleMove`);
        }
        if (document.querySelector('.' + coortopos([row - 1, col + 1])) && document.querySelector('.' + coortopos([row - 1, col + 1])).querySelector(`img`) && document.querySelector('.' + coortopos([row - 1, col + 1])).querySelector(`img`).classList.contains(oppSide())) {
            document.querySelector('.' + coortopos([row - 1, col + 1])).classList.add(`possibleMove`);
        }
        if (col == 2) {

            if (document.querySelector('.' + coortopos([row, col + 1])).querySelector(`img`)) {
                return;
            }
            if (document.querySelector('.' + coortopos([row, col + 2])).querySelector(`img`)) {
                document.querySelector('.' + coortopos([row, col + 1])).classList.add(`possibleMove`);
                return;
            }
            else {
                document.querySelector('.' + coortopos([row, col + 1])).classList.add(`possibleMove`);
                document.querySelector('.' + coortopos([row, col + 2])).classList.add(`possibleMove`);
            }
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
    let [row, col] = posToCoor(`.` + kingpos);
    row = parseInt(row);
    col = parseInt(col);
    let cell = null;
    let temp = 0;
    let tempRow = row;
    let tempCol = col;

    // checking if the pawn is attacking the king
    if (kingcolor == "darkp") {
        if ((col - 1) < 3 || (row - 1) < 1 || (row + 1) > 8) return;
        cell = document.querySelector('.' + (coortopos([(row + 1), (col - 1)])));
        if (cell.querySelector('img') && cell.querySelector('img').classList.contains(kingOppColor) && cell.querySelector('img').classList.contains("pawn")) {
            temp++;
            return true;
        }
        cell = document.querySelector('.' + coortopos([(row - 1), (col - 1)]));
        if (cell.querySelector('img') && cell.querySelector('img').classList.contains(kingOppColor) && cell.querySelector('img').classList.contains("pawn")) {
            temp++;
            return true;
        }
    }
    if (kingcolor == "lightp") {
        if ((col + 1) < 1 || (row - 1) < 1 || (row + 1) > 8) return;
        cell = document.querySelector('.' + coortopos([(row + 1), (col + 1)]));
        if (cell.querySelector('img') && cell.querySelector('img').classList.contains(kingOppColor) && cell.querySelector('img').classList.contains("pawn")) {
            temp++;
            return true;
        }
        cell = document.querySelector('.' + coortopos([(row - 1), (col + 1)]));
        if (cell.querySelector('img') && cell.querySelector('img').classList.contains(kingOppColor) && cell.querySelector('img').classList.contains("pawn")) {
            temp++;
            return true;
        }
    }

    // in the direction of the rook
    directionRook.forEach(([dRow, dCol]) => {
        tempRow = row;
        tempCol = col;
        for (let i = 1; i < 8; i++) {
            tempRow += dRow;
            tempCol += dCol;
            if (tempRow < 1 || tempRow > 8 || tempCol < 1 || tempCol > 8) return;
            cell = document.querySelector('.' + coortopos([tempRow, tempCol]));

            // checking if the rook is attacking the king
            if (cell.querySelector(`img`) && cell.querySelector(`img`).classList.contains(`rook`) && cell.querySelector(`img`).classList.contains(kingOppColor)) {
                temp++;
                if (i == 1) {           // if rook is juts one step away
                    document.querySelector('.' + coortopos([row - dRow, col - dCol])) ? document.querySelector('.' + coortopos([row - dRow, col - dCol])).classList.add(`impossibleMove`) : null;
                    if (dRow == 0) {
                        document.querySelector('.' + coortopos([tempRow + 1, tempCol])) ? document.querySelector('.' + coortopos([tempRow + 1, tempCol])).classList.add(`impossibleMove`) : null;
                        document.querySelector('.' + coortopos([tempRow - 1, tempCol])) ? document.querySelector('.' + coortopos([tempRow - 1, tempCol])).classList.add(`impossibleMove`) : null;
                    }
                    if (dCol == 0) {
                        document.querySelector('.' + coortopos([tempRow, tempCol + 1])) ? document.querySelector('.' + coortopos([tempRow, tempCol + 1])).classList.add(`impossibleMove`) : null;
                        document.querySelector('.' + coortopos([tempRow, tempCol - 1])) ? document.querySelector('.' + coortopos([tempRow, tempCol - 1])).classList.add(`impossibleMove`) : null;
                    }
                }
                else {
                    document.querySelector('.' + coortopos([row + dRow, col + dCol])) ? document.querySelector('.' + coortopos([row + dRow, col + dCol])).classList.add(`impossibleMove`) : null;
                    document.querySelector('.' + coortopos([row - dRow, col - dCol])) ? document.querySelector('.' + coortopos([row - dRow, col - dCol])).classList.add(`impossibleMove`) : null;
                }
                return true
            }

            // checking if the queen is attacking the king
            if (cell.querySelector(`img`) && cell.querySelector(`img`).classList.contains(`queen`) && cell.querySelector(`img`).classList.contains(kingOppColor)) {
                temp++;
                if (i == 1) {         // if queen is juts one step away
                    document.querySelector('.' + coortopos([row - dRow, col - dCol])) ? document.querySelector('.' + coortopos([row - dRow, col - dCol])).classList.add(`impossibleMove`) : null;
                    if (dRow == 0) {
                        document.querySelector('.' + coortopos([tempRow + 1, tempCol])) ? document.querySelector('.' + coortopos([tempRow + 1, tempCol])).classList.add(`impossibleMove`) : null;
                        document.querySelector('.' + coortopos([tempRow - 1, tempCol])) ? document.querySelector('.' + coortopos([tempRow - 1, tempCol])).classList.add(`impossibleMove`) : null;
                        document.querySelector('.' + coortopos([tempRow + 1, col])) ? document.querySelector('.' + coortopos([tempRow + 1, col])).classList.add(`impossibleMove`) : null;
                        document.querySelector('.' + coortopos([tempRow - 1, col])) ? document.querySelector('.' + coortopos([tempRow - 1, col])).classList.add(`impossibleMove`) : null;
                    }
                    if (dCol == 0) {
                        document.querySelector('.' + coortopos([tempRow, tempCol + 1])) ? document.querySelector('.' + coortopos([tempRow, tempCol + 1])).classList.add(`impossibleMove`) : null;
                        document.querySelector('.' + coortopos([tempRow, tempCol - 1])) ? document.querySelector('.' + coortopos([tempRow, tempCol - 1])).classList.add(`impossibleMove`) : null;
                        document.querySelector('.' + coortopos([row, tempCol + 1])) ? document.querySelector('.' + coortopos([row, tempCol + 1])).classList.add(`impossibleMove`) : null;
                        document.querySelector('.' + coortopos([row, tempCol - 1])) ? document.querySelector('.' + coortopos([row, tempCol - 1])).classList.add(`impossibleMove`) : null;
                    }
                }
                else if (i == 2) {        // if queen is two steps away
                    if (dRow == 0) {
                        document.querySelector('.' + coortopos([tempRow + 1, tempCol - 1])) ? document.querySelector('.' + coortopos([tempRow + 1, tempCol - 1])).classList.add(`impossibleMove`) : null;
                        document.querySelector('.' + coortopos([tempRow - 1, tempCol - 1])) ? document.querySelector('.' + coortopos([tempRow - 1, tempCol - 1])).classList.add(`impossibleMove`) : null;
                    }
                    if (dCol == 0) {
                        document.querySelector('.' + coortopos([tempRow - 1, tempCol + 1])) ? document.querySelector('.' + coortopos([tempRow - 1, tempCol + 1])).classList.add(`impossibleMove`) : null;
                        document.querySelector('.' + coortopos([tempRow - 1, tempCol - 1])) ? document.querySelector('.' + coortopos([tempRow - 1, tempCol - 1])).classList.add(`impossibleMove`) : null;
                    }
                }
                else {
                    document.querySelector('.' + coortopos([row + dRow, col + dCol])) ? document.querySelector('.' + coortopos([row + dRow, col + dCol])).classList.add(`impossibleMove`) : null;
                    document.querySelector('.' + coortopos([row - dRow, col - dCol])) ? document.querySelector('.' + coortopos([row - dRow, col - dCol])).classList.add(`impossibleMove`) : null;
                }
                return true;
            }
            if (cell.querySelector(`img`)) return;

        }
    });

    // in the direction of the bishop
    directionBishop.forEach(([dRow, dCol]) => {
        tempRow = row;
        tempCol = col;
        for (let i = 0; i < 8; i++) {
            tempRow += dRow;
            tempCol += dCol;
            if (tempRow < 1 || tempRow > 8 || tempCol < 1 || tempCol > 8) return;
            cell = document.querySelector('.' + coortopos([tempRow, tempCol]));
            if (cell.querySelector(`img`) && cell.querySelector(`img`).classList.contains(`bishop`) && cell.querySelector(`img`).classList.contains(kingOppColor)) {
                temp++;
                if (i == 1) {           // if bishop is juts one step away
                    document.querySelector('.' + coortopos([row - dRow, col - dCol])) ? document.querySelector('.' + coortopos([row - dRow, col - dCol])).classList.add(`impossibleMove`) : null;
                }
                else {
                    document.querySelector('.' + coortopos([row + dRow, col + dCol])) ? document.querySelector('.' + coortopos([row + dRow, col + dCol])).classList.add(`impossibleMove`) : null;
                    document.querySelector('.' + coortopos([row - dRow, col - dCol])) ? document.querySelector('.' + coortopos([row - dRow, col - dCol])).classList.add(`impossibleMove`) : null;
                }

                return true;
            }
            if (cell.querySelector(`img`) && cell.querySelector(`img`).classList.contains(`queen`) && cell.querySelector(`img`).classList.contains(kingOppColor)) {
                temp++;
                if (i == 1) {         // if queen is juts one step away
                    document.querySelector('.' + coortopos([row - dRow, col - dCol])) ? document.querySelector('.' + coortopos([row - dRow, col - dCol])).classList.add(`impossibleMove`) : null;
                    document.querySelector('.' + coortopos([tempRow + 1, tempCol])) ? document.querySelector('.' + coortopos([tempRow + 1, tempCol])).classList.add(`impossibleMove`) : null;
                    document.querySelector('.' + coortopos([tempRow + 2, tempCol])) ? document.querySelector('.' + coortopos([tempRow + 2, tempCol])).classList.add(`impossibleMove`) : null;
                    document.querySelector('.' + coortopos([tempRow - 1, tempCol])) ? document.querySelector('.' + coortopos([tempRow - 1, tempCol])).classList.add(`impossibleMove`) : null;
                    document.querySelector('.' + coortopos([tempRow - 2, tempCol])) ? document.querySelector('.' + coortopos([tempRow - 2, tempCol])).classList.add(`impossibleMove`) : null;
                }
                else {
                    document.querySelector('.' + coortopos([row + dRow, col + dCol])) ? document.querySelector('.' + coortopos([row + dRow, col + dCol])).classList.add(`impossibleMove`) : null;
                    document.querySelector('.' + coortopos([row - dRow, col - dCol])) ? document.querySelector('.' + coortopos([row - dRow, col - dCol])).classList.add(`impossibleMove`) : null;
                }
                return true;
            }
            if (cell.querySelector(`img`)) return;
        }

    });

    // checking if the knight is attacking the king
    directionsKnight.forEach(([dRow, dCol]) => {
        if ((row + dRow) < 1 || (row + dRow) > 8 || (col + dCol) < 1 || (col + dCol) > 8) return;
        cell = document.querySelector('.' + coortopos([(row + dRow), (col + dCol)]));
        if (cell.querySelector(`img`) && cell.querySelector(`img`).classList.contains(`knight`) && cell.querySelector(`img`).classList.contains(kingOppColor)) {
            temp++;
            return true;
        }
    });

    return temp;
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
    document.querySelectorAll(`.impossibleMove`).forEach(element => {
        element.classList.remove(`impossibleMove`);
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
    if (clickfromCellDiv.querySelector(`img`) && clickfromCellDiv.querySelector(`img`).classList.contains(`darkp`))
        return `darkp`;
    else if (clickfromCellDiv.querySelector(`img`) && clickfromCellDiv.querySelector(`img`).classList.contains(`lightp`))
        return `lightp`;
}

const getClicked = (position) => {

    clickfromCellDiv = document.querySelector(position);

    let kings = document.querySelectorAll(`.king`);
    kings.forEach(king => {
        if (king.classList.contains(currentSide())) {
            kingpos = king.parentElement.id;
            kingcolor = currentSide();
            kingOppColor = oppSide();
        }
    });

    if (clickfromCellDiv.classList.contains(`possibleMove`)) {
        let imgToMove = preClickedCell.firstElementChild;
        if (imgToMove) {
            clickfromCellDiv.innerHTML = ``;
            preClickedCell.innerHTML = ``;
            clickfromCellDiv.appendChild(imgToMove);
            document.querySelectorAll(`.` + oppSide()).forEach(opoSide => {
                opoSide.classList.remove(`inactive`);
            });
            document.querySelectorAll(`.` + currentSide()).forEach(opoSide => {
                opoSide.classList.add(`inactive`);
            });
        }
    }
    deselectall();
    if (clickfromCellDiv.querySelector(`img`) && clickfromCellDiv.querySelector(`img`).classList.contains(`inactive`)) {
        return;
    }
    else {
        if (clickfromCellDiv.querySelector(`img`) && clickfromCellDiv.querySelector(`img`).classList.contains(`darkp`)) {
            clickfromCellDiv.querySelector(`img`).classList.add(`selectedDark`);
        }
        if (clickfromCellDiv.querySelector(`img`) && clickfromCellDiv.querySelector(`img`).classList.contains(`lightp`)) {
            clickfromCellDiv.querySelector(`img`).classList.add(`selectedLight`);
        }
        if (clickfromCellDiv.querySelector(`img`)) {
            if (isKingInCheck(kingpos) > 1) {
                console.warn("King is in double check!");
                if (clickfromCellDiv.querySelector(`king`)) {
                    kingMovPattern(posToCoor(kingpos));
                }
                if (document.querySelectorAll(`.possibleMove`).length == 0) {
                    if (kingcolor == `darkp`) {
                        alert("black King is in checkmate!");
                    }
                    if (kingcolor == `lightp`) {
                        alert("white King is in checkmate!");
                    }
                }
                return;
            }
            else if (isKingInCheck(kingpos) == 1) {
                console.warn("king is in check");
            }
            else posblMovOFClickPiece(position);

        }
        preClickedCell = clickfromCellDiv;
    }
}

