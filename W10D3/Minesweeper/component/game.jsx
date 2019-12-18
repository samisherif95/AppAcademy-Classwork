import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from "./board";

class Game extends React.Component{
    constructor(props){
        super(props);
        let board = new Minesweeper.Board(9,10);
        this.state = {
            board: board
        }
        this.Gamestate = false;
        this.updateGame = this.updateGame.bind(this);
        this.restartgame = this.restartgame.bind(this);
    }

    updateGame(tile,flagged){
        if (flagged) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }
        if(this.Gamestate === false){
            this.setState({ board: this.state.board });
        }
        
    }

    isLost() {
        return this.state.board.lost()
    }

    restartgame(){
        this.setState({ board: new Minesweeper.Board(9, 10)})
        this.Gamestate = false;
    }

    render(){
        let lost;
        if (this.isLost()) {
            this.Gamestate = true;
        }
        let modal;
        if(this.state.board.lost() || this.state.board.won()){
            let text = this.state.board.won() ? "YOU WON" :"YOU LOST LOSER"
            modal =
            <div className ="modal-screen">
                <div className = "modal-content">
                    <p>{text}</p>
                    <button onClick={this.restartgame}>Play Again</button>
                </div>
            </div>;
        }
        return(
            <div>
                {lost}
                {modal}
                <Board board={this.state.board} updateGame={this.updateGame}/>
            </div>
        )
    }
}

export default Game;