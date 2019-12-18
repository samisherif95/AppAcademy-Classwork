import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

class Widgets extends React.Component {
  constructor(props){
    super(props);
    // this.state = {

    // }
  }

  render (){
    let panes = [{ title: "one", content: "Im the one" }, 
              { title: "two", content: "Im not the one" }, 
              { title: "three", content: "Im lost" }];
    return (
      <div>
        <Clock />
        <Tabs panes={panes} />
      </div>
    );
  }


}
export default Widgets;