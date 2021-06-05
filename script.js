const player = (name) => {
    let userName = ''
    let turn = false;
    return {name, turn, userName};
};

const game = (function(){
    let gameBoard = new Array(9);
    let playerX =  player('X');
    let playerO =  player('O');
    let gameWinner = '';
    createRestartButton();
    createBoard();
    return {gameBoard, playerO, playerX, gameWinner}
})();

function createBoard(){
    let boardCont = document.createElement('div');
    for (i=0;i<9;i++){
        let cell = document.createElement('button');
        cell.classList.add('cell');
        cell.id = `${i}`;
        cell.addEventListener('click',function (event){
            changeSymbol(event.target)
            checkEnd()
        });
        boardCont.appendChild(cell);
    }
    boardCont.classList.add('container');
    boardCont.id = 'boardCont';
    document.body.appendChild(boardCont);
};

function checkEnd(){
    if (checkWin()){
        let winBox = document.createElement('p');
        winBox.innerHTML = `Congratulations player ${game.gameWinner} you won!`;
        winBox.id = 'end';
        document.body.appendChild(winBox);
    };
    if (checkTie()){
        let tieBox = document.createElement('p');
        tieBox.innerHTML = `It is a tie!`;
        tieBox.id = 'end';
        document.body.appendChild(tieBox)};
}
    


function checkWin(){
    if (checkHorWin() || checkVerWin() || checkDiaWin()) {return true;}
    return false;
}

function checkHorWin(){
    for (i=0;i<7;i += 3){
        let firstCell = game.gameBoard[i];
        if (firstCell == null) {continue;}
        if (firstCell == game.gameBoard[i+1] && firstCell == game.gameBoard[i+2]){
            game.gameWinner = firstCell;
            return true;

        }
    }
    return false;
}

function checkVerWin(){
    for (i=0;i<3;i++){
        let firstCell = game.gameBoard[i];
        if (firstCell == null) {continue;}
        if (firstCell == game.gameBoard[i+3] && firstCell == game.gameBoard[i+6]){
            game.gameWinner = firstCell;
            return true;
        }
    }
    return false;
}

function checkDiaWin(){
    let midCell = game.gameBoard[4];
    if (midCell == null) {return false;}
    if (game.gameBoard[0] == midCell && game.gameBoard[8] == midCell){
        game.gameWinner = midCell;
        return true;
    }
    else if (game.gameBoard[6]== midCell && game.gameBoard[2] == midCell){
        game.gameWinner = midCell;
        return true;
    }
    return false;
}

function checkTie(){
    for (i=0;i<9;i++) {
        if (game.gameBoard[i] == undefined) { return false;}
    }
    return true;
}

function changeSymbol(element){
    if (element.innerHtml = '') {return};
    if (game.playerO.turn) {
        element.innerHTML = 'O';
        game.gameBoard[element.id] = 'O';
        element.style.backgroundColor = 'green';
        game.playerO.turn = !game.playerO.turn;
    }
    else {
        element.innerHTML = 'X'
        game.gameBoard[element.id] = 'X';
        element.style.backgroundColor = 'red';
        game.playerO.turn = !game.playerO.turn;
        }
    
}

function createRestartButton(){
    let restartButton = document.createElement('button');
    restartButton.innerHTML = 'Restart';
    restartButton.addEventListener('click',function (){
        document.body.removeChild(document.getElementById('boardCont'))
        if (document.getElementById('end')) {document.body.removeChild(document.getElementById('end'))}
        game.gameBoard = new Array (9);
        game.playerO = player('O');
        game.playerX = player('X');
        game.gameWinner = '';
        createBoard();
    });
    document.body.appendChild(restartButton);
}