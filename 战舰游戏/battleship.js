var randomLoc = Math.floor(Math.random  ()*5);
var location1  = randomLoc;
var location2 = location1+1;
var location3 = location2+1;
var guess;
var guess1;
var guess2;
var guess3;
var guesses=0;
var hits=0;
var isSunk=false;
while (isSunk==false){
    guess=prompt("Ready, aim , fire! (enter a number 0-6):");
    if (guess<0||guess>6) {
        alert("please enter a valid cell number!");
    }else{
        guesses=guesses+1;    
        if(guess==location1){
            guess1=guess;
            alert("HIT!")                                          
        }else{
            if(guess==location2){
                guess2=guess;
                alert("HIT!")                                          
            }else{            
                if(guess==location3){
                    guess3=guess;
                    alert("HIT!")                                          
                }else{
                    alert("MISS!");
                }
            }
        }
    }
    if(guess1!=null&&guess2!=null&&guess3!=null){
        isSunk=true;
        alert("you sank my battleship!")
    }
}
var stats="you took" + guesses + "guesses to sink the battleship,"+
"which means your shooting accuracy was" + (3/guesses);
alert(stats);