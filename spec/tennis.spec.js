function Tennis(){
  var scoreA;
  var scoreB;
this.start =function(){
  scoreA = 0;
  scoreB = 0;
};
this.echo = function(){
return 'Love - Love';
}
}

describe('Tennis game',function(){
it('shout echo "Love - Love" when strarting the game',function(){
var tennis = new Tennis();
tennis.start();
expect(tennis.echo()).toEqual('Love-Love');
});
});
