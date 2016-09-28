function Tennis(){
  var scoreA;
  var scoreB;
  this.start =function(){
    scoreA = 0;
    scoreB = 0;
  }
  this.playerAGetScore = function(){
    if(scoreA === 0 || scoreA === 15) scoreA += 15;
    else if(scoreA === 30) scoreA += 10;
  }
  this.playerBGetScore = function(){
    if(scoreB === 0 || scoreB === 15) scoreB += 15;
    else if(scoreB === 30) scoreB += 10;
  }
  this.echo = function(){
    if(scoreA === 0 && scoreB === 0) return 'Love - Love';
    else if(scoreA === 15 && scoreB === 0 ) return 'fifteen - Love';
  }
}

describe('Tennis game',function(){
it('shout echo "Love - Love" when strarting the game',function(){
var tennis = new Tennis();
tennis.start();
expect(tennis.echo()).toEqual('Love-Love');
});
});
