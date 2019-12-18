import React from 'react';
import * as Minesweeper from '../minesweeper';

class Tile extends React.Component {
    constructor(props){
        super(props);
        this.state ={

        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        if(e.altKey){
            this.props.updateGame(this.props.tile,true)
        }else{
            this.props.updateGame(this.props.tile,false)
        }
    }

    render(){
        let tile = this.props.tile;
        let classname;
        let bombCount;
        let text;
        if (tile.explored === true){
            if(tile.bombed === true){
                classname = 'bombed';
                text ='💣';
            }else{
                classname = 'explored'
                bombCount = tile.adjacentBombCount()
                if (bombCount > 0){
                    text = `${bombCount}`;
                }else{
                    text = "";
                }
            }
        }else if(tile.flagged === true){
            classname = 'flagged';
            text = '🚩'
        }else{
            classname = 'unexplored'
        }
        classname = `tile ${classname}`;

        return (
            <div className={classname} onClick={this.handleClick}>{text}</div>
        ) 
    }
}
export default Tile;
