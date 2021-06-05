const player = (name) => {
    let turn = false;
    return {name, turn};
};

const game = (function(){
    let gameBoard = new Array(9);
    let playerX =  player('X');
    let playerO =  player('O');
    createBoard()
    return {gameBoard, playerO, playerX}
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
    document.body.appendChild(boardCont);
};

function checkEnd(){
    checkWin();
    checkTie();
    
}

function checkTie(){
    for (i=0;i<9;i++) {
        if (game.gameBoard[i] == undefined) { return false;}
    }
    return true;
}

function changeSymbol(element){
    if (element.innerHtml = '') {return};
    console.log(game.playerO.turn)
    if (game.playerO.turn) {
        element.innerHTML = 'O';
        game.gameBoard[element.id] = 'O';
        element.style.backgroundColor = 'green';
        game.playerO.turn = !game.playerO.turn;
        console.log(game.playerO.turn)
    }
    else {
        element.innerHTML = 'X'
        game.gameBoard[element.id] = 'X';
        element.style.backgroundColor = 'red';
        game.playerO.turn = !game.playerO.turn;
        }
    
}