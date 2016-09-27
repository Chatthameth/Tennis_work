function Tennis(){
this.start =function(){
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
