const player = (name) => {
    let turn = false;
    return {name, turn};
};

const game = (function(){
    let gameBoard = new Array(9);
    let playerX =  player('X');
    let playerO =  player('O');
    createBoard()
    //startTurn(gameBoard,playerX);
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
        });
        boardCont.appendChild(cell);
    }
    boardCont.classList.add('container');
    document.body.appendChild(boardCont);
};

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
function startTurn(board,player){
    document.body.innerHTML ='';
    let boardCont = document.createElement('div');
    for (i=0;i<9;i++){
        let cell = document.createElement('button');
        cell.classList.add('cell');
        if (board[i] != null) {cell.innerHTML = board[i];}
        cell.id = `${i}`;
        cell.addEventListener('click',function (){
            if (!board[i]) {
                cell.innerHTML = player.name;
                game.gameBoard[i] = player.name;
                cell.style.backgroundColor = 'red'
            }
        });
        boardCont.appendChild(cell);
    }
    boardCont.classList.add('container');
    document.body.appendChild(boardCont);
};