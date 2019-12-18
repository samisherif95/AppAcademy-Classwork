import React from 'react';
import Tile from "./tile";
import * as Minesweeper from '../minesweeper';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    render() {
        let board = this.props.board.grid;
        let updateGame = this.props.updateGame
        return (
            <div className ="tiles">
                {
                    board.map((row ,idx1) =>{
                        return (
                            <div className ="row" key={idx1}>
                                {
                                    row.map((tile,idx2) =>{
                                        return <Tile tile={tile} updateGame={updateGame} key ={idx2}/>
                                    })
                                }
                            </div>
                        )
                    })
                    
                }
            </div>
            
        )
       
    }
}
export default Board;