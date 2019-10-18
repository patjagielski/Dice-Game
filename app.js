/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScores, activePlayer, gamePlaying, rollSixScore, currentNumber, dice1, count, reg, num, txt, flag, enterNum;
goalSize();

initGame();

while(flag == false){
    goalSize();}


//two 6s results in that player loses score
//allow the user to choose what the max score is 
//add another dice and player will lose his current score if one of them is 1




document.querySelector('.btn-roll').addEventListener('click', function(){
   //Do something here, this is an annonymous function becuase it only exists in this area
    currentNumber = [0];
    if(gamePlaying){

        
    
    //1. Random number
    dice1 = Math.floor(Math.random()*6 + 1);
    dice2 = Math.floor(Math.random()*6 + 1);
    
    //2.Display result
    var diceDOM = document.querySelector('.dice1');
    var diceDOM2 = document.querySelector('.dice2');
    diceDOM.style.display = 'block';
    diceDOM2.style.display = 'block';
    diceDOM.src = 'dice-' + dice1 + '.png';
    diceDOM2.src = 'dice-' + dice2 + '.png';
    
    
    //3. Update the round score IF the rolled number was not a 1
    if(dice1 !== 1 && dice1 !== 6 && dice2 !== 1 && dice2 !==6){
        //Add score if you dont roll one
        roundScore += (dice1 + dice2);
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        count = 0;
    }else if(dice1 === 6 || dice2 === 6){
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        roundScore += (dice1+dice2);
        count++;
        checkDoubleSix();
    }else if(dice1 ===6 && dice2 === 6){
    count = 2;
    checkDoubleSix();
    }else{
        //Next player after you roll a one
       nextPlayer();
        
        }
    }

    
    
});


document.querySelector('.btn-hold').addEventListener('click', function(){
   
    if(gamePlaying){
    
    //Add current score to global score
    scores[activePlayer] += roundScore;
    
    
    //update the UI 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    //check if player won game
    if(scores[activePlayer] >= num ){
        document.getElementById('name-'+activePlayer).textContent = 'Winner';
        document.querySelector('.dice1').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
        
    }else{
         //Next player function since reusing the same code isnt a good practice
    nextPlayer();
    }
   
    }
    
});

document.querySelector('.btn-new').addEventListener('click', initGame);





function nextPlayer(){
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice1').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
    
    
}

function initGame(){
    rollSixScore = [0, 0];
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';   
    document.getElementById('current-0').textContent = '0'; 
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}


function checkDoubleSix(){
    //Function to check if the user rolled two 6's in a row resulting in the loss of their entire score
        if(count == 2){
        document.getElementById('score-'+activePlayer).textContent = '0';
        scores = [0, 0];
        roundScore = 0;
        nextPlayer();
        console.log(6);
        count = 0;
        }
    
}

function goalSize(){
    reg = /^[0-9]+/;
    enterNum = prompt("Please enter a number for the Goal size!");
    if(enterNum.match(/^[0-9]+$/)){
txt = alert(" GAME RULES:\n- The game has 2 players, playing in rounds\n- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score\n- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn\n- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn\n- The first player to reach 100 points on GLOBAL score wins the game");
        flag = true;
        console.log('It ran!');
}else{
    
    txt = alert("Please enter a valid number.")
    flag = false;
    
}
    num = enterNum.valueOf();
}







//document.querySelector('#current-' + activePlayer).textContent = dice; //setter
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>'+ dice + '</em>'; 
//em will make it italic

//var x = document.querySelector('#score-0').textContent; //this can read and place it into a var, this is a getter
//console.log(x);
//# is id and . is class






