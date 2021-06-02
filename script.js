const player = (name) => {
    let turn = false;
    return {name, turn};
};

const game = (function(){
    let gameBoard = new Array(9).fill('-');
    let playerX =  player('X');
    let playerO =  player('O');
    startTurn(gameBoard,playerX);
    return {gameBoard}
})();



function startTurn(board,player){
    document.body.innerHTML ='';
    let boardCont = document.createElement('div');
    for (i=0;i<9;i++){
        let cell = document.createElement('button');
        cell.classList.add('cell');
        cell.innerHTML = board[i];
        cell.id = `${i}`;
        cell.addEventListener('click',function (element){
            if (board[i] != '-') {return}
            element.innerHTML = player.name
            gameBoard[i] = player.name 
        });
        boardCont.appendChild(cell);
    }
    boardCont.classList.add('container');
    document.body.appendChild(boardCont);
};