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
    let tempRow = row;
    let tempCol = col;
    directions.forEach(([dRow, dCol]) => {
        if ((row + dRow) < 1 || (row + dRow) > 8 || (col + dCol) < 1 || (col + dCol) > 8) return;
        if (document.querySelector('.' + coortopos([(row + dRow), (col + dCol)])) && document.querySelector('.' + coortopos([(row + dRow), (col + dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([(row + dRow), (col + dCol)])).querySelector(`img`).classList.contains(currentSide())) {
            return;
        }
        // Is rook there
        if ((dRow == 1 && dCol == 1) || (dRow == -1 && dCol == 1) || (dRow == -1 && dCol == -1) || (dRow == 1 && dCol == -1)) {
            tempRow = row + dRow;
            tempCol = col + dCol;
            if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`rook`)) {
                document.querySelector('.' + coortopos([row, tempCol])).classList.add(`impossibleMove`);
                document.querySelector('.' + coortopos([row - dRow, tempCol])).classList.add(`impossibleMove`);
                document.querySelector('.' + coortopos([tempRow, col])).classList.add(`impossibleMove`);
                document.querySelector('.' + coortopos([tempRow - dCol, col])).classList.add(`impossibleMove`);
                return;
            }
            for (i = 0; i < 6; i++) {
                tempRow += dRow;
                if (tempRow < 1 || tempRow > 8 || tempCol < 1 || tempCol > 8) return;
                if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(kingcolor)) {
                    return;
                }
                if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`rook`)) {
                    for (i = row + dRow; i > row - (2 * dRow); i - dRow) {
                        document.querySelector('.' + coortopos([i, tempCol])).classList.add(`impossibleMove`);
                    }
                    return;
                }
            }
            tempRow = row + dRow;
            tempCol = col + dCol;
            while (true) {
                tempCol += dCol;
                if (tempRow < 1 || tempRow > 8 || tempCol < 1 || tempCol > 8) return;
                if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(kingcolor)) {
                    return;
                }
                if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`rook`)) {
                    for (i = col + dCol; i > col - (2 * dCol); i - dCol) {
                        document.querySelector('.' + coortopos([tempRow, i])).classList.add(`impossibleMove`);
                    }
                }
            }
        }
        // Is bishop there
        if ((dRow == 0 && dCol == 1) || (dRow == 1 && dCol == 0) || (dRow == 0 && dCol == -1) || (dRow == -1 && dCol == 0)) {
            tempRow = row + dRow;
            tempCol = col + dCol;
            if (document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`bishop`)) {
                if (dCol == 0) {
                    document.querySelector('.' + coortopos([row + 1, tempCol])).classList.add(`impossibleMove`);
                    document.querySelector('.' + coortopos([row - 1, tempCol])).classList.add(`impossibleMove`);
                }
                if (dRow == 0) {
                    document.querySelector('.' + coortopos([tempRow, col + 1])).classList.add(`impossibleMove`);
                    document.querySelector('.' + coortopos([tempRow, col - 1])).classList.add(`impossibleMove`);
                }


                document.querySelector('.' + coortopos([row, tempCol])).classList.add(`impossibleMove`);
                return;
            }
            if (dCol == 0) {
                for (i = 1; i <= 6; i++) {
                    if (tempRow < 1 || tempRow > 8 || tempCol < 1 || tempCol > 8) return;
                    if (document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + 1])) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + 1])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + 1])).querySelector(`img`).classList.contains(kingcolor)) {
                        return;
                    }
                    if (document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + 1])) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + 1])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + 1])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`bishop`)) {
                        document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`);
                        document.querySelector('.' + coortopos([tempRow - dRow, tempCol - 1])).classList.add(`impossibleMove`);
                    }
                }
                for (i = 1; i <= 6; i++) {
                    if (tempRow < 1 || tempRow > 8 || tempCol < 1 || tempCol > 8) return;
                    if (document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - 1])) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - 1])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - 1])).querySelector(`img`).classList.contains(kingcolor)) {
                        return;
                    }
                    if (document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - 1])) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - 1])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - 1])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`bishop`)) {
                        document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`);
                        document.querySelector('.' + coortopos([tempRow - dRow, tempCol + 1])).classList.add(`impossibleMove`);
                    }
                }
            }
            if (dRow == 0) {
                for (i = 1; i <= 6; i++) {
                    if (tempRow < 1 || tempRow > 8 || tempCol < 1 || tempCol > 8) return;
                    if (document.querySelector('.' + coortopos([tempRow + 1, tempCol + (i * dCol)])) && document.querySelector('.' + coortopos([tempRow + 1, tempCol + (i * dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + 1, tempCol + (i * dCol)])).querySelector(`img`).classList.contains(kingcolor)) {
                        return;
                    }
                    if (document.querySelector('.' + coortopos([tempRow + 1, tempCol + (i * dCol)])) && document.querySelector('.' + coortopos([tempRow + 1, tempCol + (i * dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + 1, tempCol + (i * dCol)])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`bishop`)) {
                        document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`);
                        document.querySelector('.' + coortopos([tempRow - 1, tempCol - dCol])).classList.add(`impossibleMove`);
                    }
                }
                for (i = 1; i <= 6; i++) {
                    if (tempRow < 1 || tempRow > 8 || tempCol < 1 || tempCol > 8) return;
                    if (document.querySelector('.' + coortopos([tempRow + 1, tempCol - (i * dCol)])) && document.querySelector('.' + coortopos([tempRow + 1, tempCol - (i * dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + 1, tempCol - (i * dCol)])).querySelector(`img`).classList.contains(kingcolor)) {
                        return;
                    }
                    if (document.querySelector('.' + coortopos([tempRow + 1, tempCol - (i * dCol)])) && document.querySelector('.' + coortopos([tempRow + 1, tempCol - (i * dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + 1, tempCol - (i * dCol)])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`bishop`)) {
                        document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`);
                        document.querySelector('.' + coortopos([tempRow - 1, tempCol + dCol])).classList.add(`impossibleMove`);
                    }
                }
            }
        }
        // Is knight there
        directionKnight.forEach(([drow, dcol]) => {
            if ((row + dRow + drow) < 1 || (row + dRow + drow) > 8 || (col + dCol + dcol) < 1 || (col + dCol + dcol) > 8) return;
            if (document.querySelector('.' + coortopos([(row + drow + dRow), (col + dcol + dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([(row + drow + dRow), (col + dcol + dCol)])).querySelector(`img`).classList.contains(kingOppColor)) {
                document.querySelector('.' + coortopos([row + dRow, col + dCol])).classList.add(`impossibleMove`);
            }
        });
        //Is king there
        if ((dRow == 1 && dCol == 1) || (dRow == -1 && dCol == 1) || (dRow == -1 && dCol == -1) || (dRow == 1 && dCol == -1)) {
            tempRow = row + dRow;
            tempCol = col + dCol;
            if (document.querySelector('.' + coortopos([(tempRow + dRow), (tempCol + dCol)])) && document.querySelector('.' + coortopos([(tempRow + dRow), (tempCol + dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([(tempRow + dRow), (tempCol + dCol)])).querySelector(`img`).classList.contains(oppSide()) && document.querySelector('.' + coortopos([(tempRow + dRow), (tempCol + dCol)])).querySelector(`img`).classList.contains(`king`)) {
                document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`);
            }
            if (document.querySelector('.' + coortopos([tempRow, (tempCol + dCol)])) && document.querySelector('.' + coortopos([tempRow, (tempCol + dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, (tempCol + dCol)])).querySelector(`img`).classList.contains(oppSide()) && document.querySelector('.' + coortopos([tempRow, (tempCol + dCol)])).querySelector(`img`).classList.contains(`king`)) {
                document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`);
                document.querySelector('.' + coortopos([row, tempCol])).classList.add(`impossibleMove`);
            }
            if (document.querySelector('.' + coortopos([(tempRow + dRow), tempCol])) && document.querySelector('.' + coortopos([(tempRow + dRow), tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([(tempRow + dRow), tempCol])).querySelector(`img`).classList.contains(oppSide()) && document.querySelector('.' + coortopos([(tempRow + dRow), tempCol])).querySelector(`img`).classList.contains(`king`)) {
                document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`);
                document.querySelector('.' + coortopos([tempRow, col])).classList.add(`impossibleMove`);
            }
        }
        if ((dRow == 0 && dCol == 1) || (dRow == 1 && dCol == 0) || (dRow == 0 && dCol == -1) || (dRow == -1 && dCol == 0)) {
            tempRow = row + dRow;
            tempCol = col + dCol;
            if (document.querySelector('.' + coortopos([(tempRow + dRow), (tempCol + dCol)])) && document.querySelector('.' + coortopos([(tempRow + dRow), (tempCol + dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([(tempRow + dRow), (tempCol + dCol)])).querySelector(`img`).classList.contains(oppSide()) && document.querySelector('.' + coortopos([(tempRow + dRow), (tempCol + dCol)])).querySelector(`img`).classList.contains(`king`)) {
                document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`);
                if (dCol == 0) {
                    document.querySelector('.' + coortopos([tempRow, tempCol + 1])).classList.add(`impossibleMove`);
                    document.querySelector('.' + coortopos([tempRow, tempCol - 1])).classList.add(`impossibleMove`);
                }
                if (dRow == 0) {
                    document.querySelector('.' + coortopos([tempRow + 1, tempCol])).classList.add(`impossibleMove`);
                    document.querySelector('.' + coortopos([tempRow - 1, tempCol])).classList.add(`impossibleMove`);
                }
            }
        }
        //Is queen there
        if ((dRow == 1 && dCol == 1) || (dRow == -1 && dCol == 1) || (dRow == -1 && dCol == -1) || (dRow == 1 && dCol == -1)) {     // Queen as rook
            tempRow = row + dRow;
            tempCol = col + dCol;
            for (i = 1; i <= 6; i++) {
                tempRow += dRow;
                if (tempRow < 1 || tempRow > 8 || tempCol < 1 || tempCol > 8) return;
                if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(kingcolor)) {
                    return;
                }
                if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`queen`)) {
                    for (j = row + dRow; j > row - (2 * dRow); j - dRow) {
                        document.querySelector('.' + coortopos([j, tempCol])).classList.add(`impossibleMove`);
                    }
                    if (i == 1) {
                        document.querySelector('.' + coortopos([tempRow - dRow, tempCol - dCol])).classList.add(`impossibleMove`);
                        document.querySelector('.' + coortopos([tempRow - (2 * dRow), tempCol - (2 * dCol)])).classList.add(`impossibleMove`);

                    }
                    if (i == 2) {
                        document.querySelector('.' + coortopos([tempRow - (2 * dRow), tempCol - (2 * dCol)])).classList.add(`impossibleMove`);

                    }
                    return;
                }
                if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`piece`)) {
                    return;
                }
            }
            tempRow = row + dRow;
            tempCol = col + dCol;
            for (i = 1; i <= 6; i++) {
                tempCol += dCol;
                if (tempRow < 1 || tempRow > 8 || tempCol < 1 || tempCol > 8) return;
                if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(kingcolor)) {
                    return;
                }
                if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`queen`)) {
                    for (j = col + dCol; j > col - (2 * dCol); j - dCol) {
                        document.querySelector('.' + coortopos([tempRow, j])).classList.add(`impossibleMove`);
                    }
                    if (i == 1) {
                        document.querySelector('.' + coortopos([tempRow - dRow, tempCol - dCol])).classList.add(`impossibleMove`);
                        document.querySelector('.' + coortopos([tempRow - (2 * dRow), tempCol - (2 * dCol)])).classList.add(`impossibleMove`);

                    }
                    if (i == 2) {
                        document.querySelector('.' + coortopos([tempRow - (2 * dRow), tempCol - (2 * dCol)])).classList.add(`impossibleMove`);

                    }
                    return;
                }
                if (document.querySelector('.' + coortopos([tempRow, tempCol])) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`piece`)) {
                    return;
                }
            }
        }
        if ((dRow == 0 && dCol == 1) || (dRow == 1 && dCol == 0) || (dRow == 0 && dCol == -1) || (dRow == -1 && dCol == 0)) {       //Queen as Bishop
            if (dCol == 0) {
                tempRow = row + dRow;
                tempCol = col + dCol;
                for (i = 1; i <= 6; i++) {
                    if (tempRow + (i * dRow) < 1 || tempRow + (i * dRow) > 8 || tempCol + i < 1 || tempCol + i > 8) return;
                    if (document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + i])) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + i])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + i])).querySelector(`img`).classList.contains(kingcolor)) {
                        return;
                    }
                    if (document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + i])) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + i])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol + i])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`queen`)) {
                        document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`);
                        document.querySelector('.' + coortopos([tempRow - dRow, tempCol - 1])).classList.add(`impossibleMove`);
                        if (i == 1) {
                            document.querySelector('.' + coortopos([tempRow, tempCol + 1])).classList.add(`impossibleMove`);
                            document.querySelector('.' + coortopos([tempRow - dRow, tempCol + 1])).classList.add(`impossibleMove`);
                            document.querySelector('.' + coortopos([tempRow - (2 * dRow), tempCol + 1])).classList.add(`impossibleMove`);
                        }
                    }
                }
                tempRow = row + dRow;
                tempCol = col + dCol;
                for (i = 1; i <= 6; i++) {
                    if (tempRow + (i * dRow) < 1 || tempRow + (i * dRow) > 8 || tempCol - i < 1 || tempCol - i > 8) return;
                    if (document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - i])) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - i])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - i])).querySelector(`img`).classList.contains(kingcolor)) {
                        return;
                    }
                    if (document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - i])) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - i])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + (i * dRow), tempCol - i])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`queen`)) {
                        document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`);
                        document.querySelector('.' + coortopos([tempRow - dRow, tempCol + 1])).classList.add(`impossibleMove`);
                        if (i == 1) {
                            document.querySelector('.' + coortopos([tempRow, tempCol - 1])).classList.add(`impossibleMove`);
                            document.querySelector('.' + coortopos([tempRow - dRow, tempCol - 1])).classList.add(`impossibleMove`);
                            document.querySelector('.' + coortopos([tempRow - (2 * dRow), tempCol - 1])).classList.add(`impossibleMove`);
                        }
                    }
                }
            }
            if (dRow == 0) {
                tempRow = row + dRow;
                tempCol = col + dCol;
                for (i = 1; i <= 6; i++) {
                    if (tempRow + i < 1 || tempRow + i > 8 || tempCol + (i * dCol) < 1 || tempCol + (i * dCol) > 8) return;
                    if (document.querySelector('.' + coortopos([tempRow + i, tempCol + (i * dCol)])) && document.querySelector('.' + coortopos([tempRow + i, tempCol + (i * dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + i, tempCol + (i * dCol)])).querySelector(`img`).classList.contains(kingcolor)) {
                        return;
                    }
                    if (document.querySelector('.' + coortopos([tempRow + i, tempCol + (i * dCol)])) && document.querySelector('.' + coortopos([tempRow + i, tempCol + (i * dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + i, tempCol + (i * dCol)])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`queen`)) {
                        document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`);
                        document.querySelector('.' + coortopos([tempRow - 1, tempCol - dCol])).classList.add(`impossibleMove`);
                        if (i == 1) {
                            document.querySelector('.' + coortopos([tempRow + 1, tempCol])).classList.add(`impossibleMove`);
                            document.querySelector('.' + coortopos([tempRow + 1, tempCol - dCol])).classList.add(`impossibleMove`);
                            document.querySelector('.' + coortopos([tempRow + 1, tempCol - (2 * dCol)])).classList.add(`impossibleMove`);
                        }
                    }
                }
                tempRow = row + dRow;
                tempCol = col + dCol;
                for (i = 1; i <= 6; i++) {
                    if (tempRow < 1 || tempRow > 8 || tempCol < 1 || tempCol > 8) return;
                    if (document.querySelector('.' + coortopos([tempRow - i, tempCol - (i * dCol)])) && document.querySelector('.' + coortopos([tempRow - i, tempCol - (i * dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow - i, tempCol - (i * dCol)])).querySelector(`img`).classList.contains(kingcolor)) {
                        return;
                    }
                    if (document.querySelector('.' + coortopos([tempRow - i, tempCol - (i * dCol)])) && document.querySelector('.' + coortopos([tempRow - i, tempCol - (i * dCol)])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow - i, tempCol - (i * dCol)])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`queen`)) {
                        document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`);
                        document.querySelector('.' + coortopos([tempRow + 1, tempCol + dCol])).classList.add(`impossibleMove`);
                    }
                    if (i == 1) {
                        document.querySelector('.' + coortopos([tempRow - 1, tempCol])).classList.add(`impossibleMove`);
                        document.querySelector('.' + coortopos([tempRow - 1, tempCol - dCol])).classList.add(`impossibleMove`);
                        document.querySelector('.' + coortopos([tempRow - 1, tempCol - (2 * dCol)])).classList.add(`impossibleMove`);
                    }
                }
            }
        }
        // Is pawn there
        tempRow = row + dRow;
        tempCol = col + dCol;
        if (kingcolor == `lightp`) {
            if (tempRow - 1 < 1 || tempRow - 1 > 8 || tempCol + 1 < 1 || tempCol + 1 > 8) return;
            if (tempRow + 1 < 1 || tempRow + 1 > 8 || tempCol + 1 < 1 || tempCol + 1 > 8) return;
            if (document.querySelector('.' + coortopos([tempRow - 1, tempCol + 1])) && document.querySelector('.' + coortopos([tempRow - 1, tempCol + 1])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow - 1, tempCol + 1])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`pawn`))
                document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`);
            if (document.querySelector('.' + coortopos([tempRow + 1, tempCol + 1])) && document.querySelector('.' + coortopos([tempRow + 1, tempCol + 1])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + 1, tempCol + 1])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`pawn`))
                document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`);
        }
        if (kingcolor == `darkp`) {
            if (tempRow - 1 < 1 || tempRow - 1 > 8 || tempCol - 1 < 1 || tempCol - 1 > 8) return;
            if (tempRow + 1 < 1 || tempRow + 1 > 8 || tempCol - 1 < 1 || tempCol - 1 > 8) return;
            if (document.querySelector('.' + coortopos([tempRow - 1, tempCol - 1])) && document.querySelector('.' + coortopos([tempRow - 1, tempCol - 1])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow - 1, tempCol - 1])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`pawn`))
                document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`);
            if (document.querySelector('.' + coortopos([tempRow + 1, tempCol - 1])) && document.querySelector('.' + coortopos([tempRow + 1, tempCol - 1])).querySelector(`img`) && document.querySelector('.' + coortopos([tempRow + 1, tempCol - 1])).querySelector(`img`).classList.contains(kingOppColor) && document.querySelector('.' + coortopos([tempRow, tempCol])).querySelector(`img`).classList.contains(`pawn`))
                document.querySelector('.' + coortopos([tempRow, tempCol])).classList.add(`impossibleMove`);
        }
        if (document.querySelector('.' + coortopos([(row + dRow), (col + dCol)])) && !document.querySelector('.' + coortopos([(row + dRow), (col + dCol)])).classList.contains(`impossibleMove`)) {
            document.querySelector('.' + coortopos([(row + dRow), (col + dCol)])).classList.add(`possibleMove`);
        }
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
        if (col == 7) {

            if (document.querySelector('.' + coortopos([row, col - 1])).querySelector(`img`)) {
                return;
            }

            document.querySelector('.' + coortopos([row, col - 1])).classList.add(`possibleMove`);
            return;
        }

        document.querySelector('.' + coortopos([row, col - 1])).classList.add(`possibleMove`);
        document.querySelector('.' + coortopos([row, col - 2])).classList.add(`possibleMove`);
    }
    // else if (col == 1) {

    // }
    // else {

    //     if (document.querySelector('.' + coortopos([row, col - 1])).querySelector(`img`)) {
    //         return;
    //     }

    //     document.querySelector('.' + coortopos([row, col - 1])).classList.add(`possibleMove`);
    // }

    else if (clickfromCellDiv.querySelector(`img`).classList.contains(`lightp`)) {
        if (document.querySelector('.' + coortopos([row + 1, col + 1])).querySelector(`img`) && document.querySelector('.' + coortopos([row + 1, col + 1])).querySelector(`img`).classList.contains(oppSide())) {
            document.querySelector('.' + coortopos([row + 1, col + 1])).classList.add(`possibleMove`);
        }
        if (document.querySelector('.' + coortopos([row - 1, col + 1])).querySelector(`img`) && document.querySelector('.' + coortopos([row - 1, col + 1])).querySelector(`img`).classList.contains(oppSide())) {
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
    let tempRow = 0;
    let tempCol = 0;

    if (kingcolor == "darkp") {
        if ((col - 1) < 3 || (row - 1) < 1 || (row + 1) > 8) return;
        cell = document.querySelector('.' + String(coortopos([(row + 1), (col - 1)])));
        if (cell.querySelector('img') && cell.querySelector('img').classList.contains("lightp")) {
            temp++;
            return true;
        }
        cell = document.querySelector('.' + coortopos([(row - 1), (col - 1)]));
        if (cell.querySelector('img') && cell.querySelector('img').classList.contains("zlightp")) {
            console.log("check by pawn [-1, -1 ]");
            temp++;
            return true;
        }
    }
    if (kingcolor == "lightp") {
        if ((col + 1) < 1 || (row - 1) < 1 || (row + 1) > 8) return;
        cell = document.querySelector('.' + coortopos([(row + 1), (col + 1)]));
        if (cell.querySelector('img') && cell.querySelector('img').classList.contains("darkp")) {
            console.log("check by pawn [+1, +1 ]");
            temp++;
            return true;
        }
        cell = document.querySelector('.' + coortopos([(row - 1), (col + 1)]));
        if (cell.querySelector('img') && cell.querySelector('img').classList.contains("darkp")) {
            console.log("check by pawn [+1, -1 ]");
            temp++;
            return true;
        }
    }
    directionRook.forEach(([dRow, dCol]) => {
        tempRow = row;
        tempCol = col;
        for (let i = 0; i < 8; i++) {
            tempRow += dRow;
            tempCol += dCol;
            if (tempRow < 1 || tempRow > 8 || tempCol < 1 || tempCol > 8) return;
            cell = document.querySelector('.' + coortopos([tempRow, tempCol]));
            if (cell.querySelector(`img`) && cell.querySelector(`img`).classList.contains(`rook`) && cell.querySelector(`img`).classList.contains(kingOppColor)) {
                temp++;
                return true
            }
            if (cell.querySelector(`img`) && cell.querySelector(`img`).classList.contains(`queen`) && cell.querySelector(`img`).classList.contains(kingOppColor)) {
                temp++;
                return true;
            }
            if (cell.querySelector(`img`)) return;

        }
    });
    directionBishop.forEach(([dRow, dCol]) => {
        tempRow = row;
        tempCol = col;
        for (let i = 0; i < 8; i++) {
            tempRow += dRow;
            tempCol += dCol;
            if (tempRow < 1 || tempRow > 8 || tempCol < 1 || tempCol > 8) break;
            cell = document.querySelector('.' + coortopos([tempRow, tempCol]));
            if (cell.querySelector(`img`) && cell.querySelector(`img`).classList.contains(`bishop`) && cell.querySelector(`img`).classList.contains(kingOppColor)) {
                temp++;
                return true;
            }
            if (cell.querySelector(`img`) && cell.querySelector(`img`).classList.contains(`queen`) && cell.querySelector(`img`).classList.contains(kingOppColor)) {
                temp++;
                return true;
            }
            if (cell.querySelector(`img`)) break;
        }

    });
    directionsKnight.forEach(([dRow, dCol]) => {
        if ((row + dRow) < 1 || (row + dRow) > 8 || (col + dCol) < 1 || (col + dCol) > 8) return;
        cell = document.querySelector('.' + coortopos([(row + dRow), (col + dCol)]));
        if (cell.querySelector(`img`) && cell.querySelector(`img`).classList.contains(`knight`) && cell.querySelector(`img`).classList.contains(kingOppColor)) {
            temp++;
            return true;
        }
    });
    directionsKing.forEach(([dRow, dCol]) => {
        if ((row + dRow) < 1 || (row + dRow) > 8 || (col + dCol) < 1 || (col + dCol) > 8) return;
        cell = document.querySelector('.' + coortopos([(row + dRow), (col + dCol)]));
        if (cell.querySelector(`img`) && cell.querySelector(`img`).classList.contains(`king`) && cell.querySelector(`img`).classList.contains(kingOppColor)) {
            temp++;
            return true;
        }
    });

    return temp;
}
const possibleCheckMove = () => {

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
    if (clickfromCellDiv.querySelector(`img`) && clickfromCellDiv.querySelector(`img`).classList.contains(`darkp`))
        return `darkp`;
    else if (clickfromCellDiv.querySelector(`img`) && clickfromCellDiv.querySelector(`img`).classList.contains(`lightp`))
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

    clickfromCellDiv = document.querySelector(position);

    let kings = document.querySelectorAll(`.king`);
    kings.forEach(king => {
        if (king.classList.contains(currentSide())) {
            kingpos = king.parentElement.id;
            kingcolor = getCurSide(king);
            kingOppColor = getOppSide(king);
        }
    });


    if (clickfromCellDiv.classList.contains(`possibleMove`) && preClickedCell) {
        let imgToMove = preClickedCell.firstElementChild;
        if (imgToMove) {
            clickfromCellDiv.innerHTML = ``;
            preClickedCell.innerHTML = ``;
            clickfromCellDiv.appendChild(imgToMove);
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
    else {
        deselectall();
    }
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
                return;
            }
            else if (isKingInCheck(kingpos) == 1) {
                console.warn("king is in check");
            }
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
document.querySelectorAll(`.darkp`).forEach(opoSide => {
    opoSide.classList.add(`inactive`);
});