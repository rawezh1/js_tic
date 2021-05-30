(function(){
    let gameBoard = [];
    let playerX =  player('X')
    let playerO =  player('O')
}())

const player = (name) => {
    let turn = false;
    return {name, turn};
};

function showBoard(){
    let boardCont = document.createElement('div')
    for (i=0;i<9;i++){
        let cell = document.createElement('div')
        cell.classList.add('cell')
        boardCont.appendChild(cell)
    }
    document.body.appendChild(boardCont)

}