function Tennis(){
  var scoreA;
  var scoreB;
  this.start = function(){
    scoreA = 0;
    scoreB = 0;
  }
  this.playerAGetScore = function(){
    if(scoreA === 0 || scoreA === 15) scoreA += 15;
    else if(scoreA === 30||scoreA === 40) scoreA += 10;
  }
  this.playerBGetScore = function(){
    if(scoreB === 0 || scoreB === 15) scoreB += 15;
    else if(scoreB === 30 ||scoreB === 40  ) scoreB += 10;
  }
  this.echo = function(){
    if (scoreA === 0 && scoreB === 0) return 'Love - Love'; // 0 - 0

    else if (scoreA === 15 && scoreB === 0) return 'Fifteen - Love'; // 15 - 0
    else if (scoreA === 30 && scoreB === 0) return 'Thirty - Love'; // 30 - 0
    else if (scoreA === 40 && scoreB === 0) return 'Forty - Love'; // 40 - 0
    else if (scoreA === 50 && scoreB === 0) return 'player A won'; // A win

    else if (scoreA === 0 && scoreB === 15) return 'Love - Fifteen'; // 0 - 15
    else if (scoreA === 0 && scoreB === 30) return 'Love - Thirty'; // 0 - 30
    else if (scoreA === 0 && scoreB === 40) return 'Love - Forty'; // 0 - 40
    else if (scoreA === 0 && scoreB === 50) return 'player B won'; // B win

    else if (scoreA === 15 && scoreB === 15) return 'Fifteen - Fifteen'; // 15 - 15
    else if (scoreA === 30 && scoreB === 15) return 'Thirty - Fifteen'; // 30 - 15


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
  it('should echo "player A won" when teamA won the game',function(){
    tennis.playerAGetScore();
    expect(tennis.echo()).toEqual('player A won');
  })
//----------------------------------------------------------------------------------
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
  it('should echo "player B won" when teamB won the game',function(){
    tennis.playerBGetScore();
    expect(tennis.echo()).toEqual('player B won');
  })
//-----------------------------------------------------------------------------------
  it('should echo "Love - Love" when start game',function(){
    tennis.start();
    expect(tennis.echo()).toEqual('Love - Love');
  })
  it('should echo "Fifteen - Fifteen" when start game',function(){
    tennis.playerAGetScore();
    expect(tennis.echo()).toEqual('Fifteen - Love');
  })
  it('should echo "Fifteen - Fifteen" when start game',function(){
    tennis.playerBGetScore();
    expect(tennis.echo()).toEqual('Fifteen - Fifteen');
  })
  it('should echo "Thirty - Fifteen" when start game',function(){
    tennis.playerAGetScore();
    expect(tennis.echo()).toEqual('Thirty - Fifteen');
  })
  
});
