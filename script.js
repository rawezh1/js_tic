const player = (name) => {
    let turn = false;
    return {name, turn};
};

(function(){
    let gameBoard = [];
    let playerX =  player('X')
    let playerO =  player('O')
}());



function showBoard(){
    let boardCont = document.createElement('div')
    for (i=0;i<9;i++){
        let cell = document.createElement('div')
        cell.classList.add('cell')
        cell.innerHTML = '-'
        boardCont.appendChild(cell)
    }
    boardCont.classList.add('container')
    document.body.appendChild(boardCont)
};
showBoard();