function Tennis(){
  var scoreA;
  var scoreB;
  this.start = function(){
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
    if (scoreA === 0 && scoreB === 0) return 'Love - Love';
    else if (scoreA === 0 && scoreB === 15) return 'Love - Fifteen';
    else if (scoreA === 0 && scoreB === 30) return 'Love - Thirty';
    else if (scoreA === 0 && scoreB === 40) return 'Love - Forty';
    else if (scoreA === 15 && scoreB === 0) return 'Fifteen - Love';
    else if (scoreA === 15 && scoreB === 15) return 'Fifteen - Fifteen';
    else if (scoreA === 15 && scoreB === 30) return 'Fifteen - Thirty';
    else if (scoreA === 15 && scoreB === 40) return 'Fifteen - Forty';
    else if (scoreA === 30 && scoreB === 0) return 'Thirty - Love';
    else if (scoreA === 30 && scoreB === 15) return 'Thirty - Fifteen';
    else if (scoreA === 30 && scoreB === 30) return 'Thirty - Thirty';
    else if (scoreA === 30 && scoreB === 40) return 'Thirty - Forty';
    else if (scoreA === 40 && scoreB === 0) return 'Forty - Love';
    else if (scoreA === 40 && scoreB === 15) return 'Forty - Fifteen';
    else if (scoreA === 40 && scoreB === 30) return 'Forty - Thirty';
    else if (scoreA === 40 && scoreB === 40) return 'Forty - Forty';
  }
}

describe("Tennis",function(){
  var tennis = new Tennis();
  it('should echo "Love - Love" when start game',function(){
    tennis.start();
    expect(tennis.echo()).toEqual('Love - Love');
  })
  it('should echo "Fifteen - Love" when teamA = 15 teamB = 0 on the game',function(){
    tennis.playerAGetScore();
    expect(tennis.echo()).toEqual('Fifteen - Love');
  })
  it('should echo "Thirty - Love" when teamA = 30 teamB = 0 on the game',function(){
    tennis.playerAGetScore();
    expect(tennis.echo()).toEqual('Thirty - Love');
  })
  it('should echo "Forty - Love" when teamA = 40 teamB = 0 on the game',function(){
    tennis.playerAGetScore();
    expect(tennis.echo()).toEqual('Forty - Love');
  })
  //----------------------------------------------------------------------------------------------
  it('should echo "Love - Love" when start game',function(){
    tennis.start();
    expect(tennis.echo()).toEqual('Love - Love');
  })
  it('should echo "Love - Fifteen" when teamA = 0 teamB = 15 on the game',function(){
    tennis.playerBGetScore();
    expect(tennis.echo()).toEqual('Love - Fifteen');
  })
  it('should echo "Love - Thirty" when teamA = 0 teamB = 30 on the game',function(){
    tennis.playerBGetScore();
    expect(tennis.echo()).toEqual('Love - Thirty');
  })
  it('should echo "Love - Forty" when teamA = 0 teamB = 40 on the game',function(){
    tennis.playerBGetScore();
    expect(tennis.echo()).toEqual('Love - Forty');
  })
});
