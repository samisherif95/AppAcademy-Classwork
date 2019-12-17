const View = require("./ttt-view");// require appropriate file
const Game = require("./game"); // require appropriate file

  // $(() => {
  //   // Your code here
  // });

$(document).on('ready', function(){
  let game = new Game();
  let view = new View(game,$('.ttt'));
});

