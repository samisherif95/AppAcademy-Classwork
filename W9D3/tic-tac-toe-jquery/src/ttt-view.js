class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    $el.append(this.setupBoard());
    this.bindEvents();
    console.log(game);
   
  }

  bindEvents() {
    let that = this;
    $('.grid').on('click','li',function(){
      // console.log(this); 
      // that.game.playMove($(this).data('pos'));
      if (that.game.isOver()) {
        return 
      }
      let mark = that.game.currentPlayer;
      
      if ($(this).html() === ""){
        $(this).html(mark);
      } else { alert("Invalid move DumbAss!!");}
      let $htmlMark = $(this).html();
      if ($htmlMark === "x"){
        $(this).css('background-color', "white");
        $(this).css('color',"#57A773");
      }else{
        $(this).css('background-color', "white");
        $(this).css('color',"#FB6107");
      }
      
      console.log(that.game.playMove($(this).data('pos')));
      that.makeMove($(this));
      if (that.game.isOver()) {
         let state = that.game.winner();
         if (state){
           $('body').append(`<h1>You Won, ${state}</h1>`);
          //  console.log(that.findWinningPos(state))
           let winningPositions = that.findWinningPos(state);
            
           for (let i = 0; i < winningPositions.length; i++) {
             $(`li[data-pos="[${winningPositions[i]}]"]`).css('background-color', 'green');
           }

          } else {
            $('body').append(`<h1>It's a Tie</h1>`);
         }
        $('.grid').children('li').removeClass('fuckEl');

      }
     
    });

  }

  findWinningPos(winner){
    const posSeqs = [
      // horizontals
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      // verticals
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      // diagonals
      [[0, 0], [1, 1], [2, 2]],
      [[2, 0], [1, 1], [0, 2]]
    ];
    for (let i = 0; i < posSeqs.length; i++){
      let won = true;
      for (let j = 0; j < posSeqs[i].length; j++){
        
        if (this.game.board.grid[posSeqs[i][j][0]][posSeqs[i][j][1]] !== winner) won = false;
      }
      if (won) {return posSeqs[i]; }
    }
    return  [];
  }

  makeMove($square) {

  }

  setupBoard() {
    let $ul = $('<ul class="grid"></ul>');
    for (let i = 0; i < 3; i++){
      for (let j = 0; j < 3; j++){
        let $li = $(`<li class="pos fuckEl" data-pos="[${[i,j]}]"></li>`);
        $li.data('pos',[i,j]);
        $ul.append($li);
      }
    }
    return $ul;
    // return `<ul>
    
    // </ul>`;
  }
}

module.exports = View;
