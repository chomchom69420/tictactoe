//defining a board array for storing the board values

//choosing player 1 and player 2 symbols

let player1="X";
let player2="O";

player1=prompt("Choose player 1 symbol: ");
player2=prompt("Choose player 2 symbol: ");


var clicked_id = "";

var clicked = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];


var board = [
    [" "," "," "],
    [" "," "," "],
    [" "," "," "]
];

function writeSym(passed_id)
{
    alert(passed_id);
}


var turn = 1;

function checkWin()
{
    //decides whether game is incomplete, drawn, or won

    //0 for drawn, -1 for incomplete, 1 for won

    var won=0; 

    /*block for won checking starts*/

    //checking for vertical lines
    for(c=0;c<3;c++)
    {
        if(board[0][c]===" " || board[1][c]===" " || board[2][c]===" ")
            continue;
        if(board[0][c]===board[1][c] && board[1][c]===board[2][c])
        {
            return 1;
        }
    }

    //checking for horizontal lines
    for(r=0;r<3;r++)
    {
        if(board[r][0]===" " || board[r][1]===" " || board[r][2]===" ")
            continue;
        if(board[r][0]===board[r][1] && board[r][1]===board[r][2])
        {
            return 1;
        }
    }

    //checking for diagonals
    
    if(board[0][0]===board[1][1] && board[1][1]===board[2][2] && board[0][0]!=" ")
    {
        return 1;
    }
    if(board[2][0]===board[1][1] && board[1][1]===board[0][2] && board[0][2]!=" ")
    {
        return 1;
    }
    

    /*block for one checking ends*/

    //checking for incomplete
    for(i=0;i<3;i++)
    {
        for(j=0;j<3;j++)
        {
            if(board[i][j]===" ")
            {
                return -1;
            }
        }
    }

    //otherwise, the game is drawn

    return 0;
}



var box =  [
    ['','',''],
    ['','',''],
    ['','','']
];

for(var i=0;i<3;i++)
{
    for(j=0;j<3;j++)
    {
        box[i][j]=document.getElementById(""+i+j);
    }
}

box[0][0].onclick = function()
{
    if(clicked[0][0]===1)
    {
        throw "exit";
    }
    clicked[0][0]=1;
    if(turn===1)
    {
        box[0][0].innerHTML = player1;
        board[0][0]=player1;
        turn=2;
    }
    else if(turn===2)
    {
        box[0][0].innerHTML=player2;
        board[0][0]=player2;
        turn=1;
    }
    if(checkWin()===1)
        alert("The game has been won by player "+ ((turn==2)?1:2));
    else if(checkWin()===0)
        alert("The game is drawn!");
};

box[0][1].onclick = function()
{
    if(clicked[0][1]===1)
    {
        throw "exit";
    }
    clicked[0][1]=1;
    if(turn===1)
    {
        box[0][1].innerHTML = player1;
        board[0][1]=player1;
        turn=2;
    }
    else if(turn===2)
    {
        box[0][1].innerHTML=player2;
        board[0][1]=player2;
        turn=1;
    }
    if(checkWin()===1)
        alert("The game has been won by player "+ ((turn==2)?1:2));
    else if(checkWin()===0)
        alert("The game is drawn!");
};

box[0][2].onclick = function()
{
    if(clicked[0][2]===1)
    {
        throw "exit";
    }
    clicked[0][2]=1;
    if(turn===1)
    {
        box[0][2].innerHTML = player1;
        board[0][2]=player1;
        turn=2;
    }
    else if(turn===2)
    {
        box[0][2].innerHTML=player2;
        board[0][2]=player2;
        turn=1;
    }
    if(checkWin()===1)
        alert("The game has been won by player "+ ((turn==2)?1:2));
    else if(checkWin()===0)
        alert("The game is drawn!");
};

box[1][0].onclick = function()
{
    if(clicked[1][0]===1)
    {
        throw "exit";
    }
    clicked[1][0]=1;
    if(turn===1)
    {
        box[1][0].innerHTML = player1;
        board[1][0]=player1;
        turn=2;
    }
    else if(turn===2)
    {
        box[1][0].innerHTML=player2;
        board[1][0]=player2;
        turn=1;
    }
    if(checkWin()===1)
        alert("The game has been won by player "+ ((turn==2)?1:2));
    else if(checkWin()===0)
        alert("The game is drawn!");
};

box[1][1].onclick = function()
{
    if(clicked[1][1]===1)
    {
        throw "exit";
    }
    clicked[1][1]=1;
    if(turn===1)
    {
        box[1][1].innerHTML = player1;
        board[1][1]=player1;
        turn=2;
    }
    else if(turn===2)
    {
        box[1][1].innerHTML=player2;
        board[1][1]=player2;
        turn=1;
    }
    if(checkWin()===1)
        alert("The game has been won by player "+ ((turn==2)?1:2));
    else if(checkWin()===0)
        alert("The game is drawn!");
};

box[1][2].onclick = function()
{
    if(clicked[1][2]===1)
    {
        throw "exit";
    }
    clicked[1][2]=1;
    if(turn===1)
    {
        box[1][2].innerHTML = player1;
        board[1][2]=player1;
        turn=2;
    }
    else if(turn===2)
    {
        box[1][2].innerHTML=player2;
        board[1][2]=player2;
        turn=1;
    }
    if(checkWin()===1)
        alert("The game has been won by player "+ ((turn==2)?1:2));
    else if(checkWin()===0)
        alert("The game is drawn!");
};

box[2][0].onclick = function()
{
    if(clicked[2][0]===1)
    {
        throw "exit";
    }
    clicked[2][0]=1;
    if(turn===1)
    {
        box[2][0].innerHTML = player1;
        board[2][0]=player1;
        turn=2;
    }
    else if(turn===2)
    {
        box[2][0].innerHTML=player2;
        board[2][0]=player2;
        turn=1;
    }
    if(checkWin()===1)
        alert("The game has been won by player "+ ((turn==2)?1:2));
    else if(checkWin()===0)
        alert("The game is drawn!");
};

box[2][1].onclick = function()
{
    if(clicked[2][1]===1)
    {
        throw "exit";
    }
    clicked[2][1]=1;
    if(turn===1)
    {
        box[2][1].innerHTML = player1;
        board[2][1]=player1;
        turn=2;
    }
    else if(turn===2)
    {
        box[2][1].innerHTML=player2;
        board[2][1]=player2;
        turn=1;
    }
    if(checkWin()===1)
        alert("The game has been won by player "+ ((turn==2)?1:2));
    else if(checkWin()===0)
        alert("The game is drawn!");
};

box[2][2].onclick = function()
{
    if(clicked[2][2]===1)
    {
        throw "exit";
    }
    clicked[2][2]=1;
    if(turn===1)
    {
        box[2][2].innerHTML = player1;
        board[2][2]=player1;
        turn=2;
    }
    else if(turn===2)
    {
        box[2][2].innerHTML=player2;
        board[2][2]=player2;
        turn=1;
    }
    if(checkWin()===1)
        alert("The game has been won by player "+ ((turn==2)?1:2));
    else if(checkWin()===0)
        alert("The game is drawn!");
};

