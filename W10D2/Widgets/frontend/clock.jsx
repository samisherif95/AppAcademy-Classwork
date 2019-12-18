import React from 'react';


class Clock extends React.Component {
  constructor(props){
    super(props);
    let today = new Date();
    this.handle = function () {setInterval(this.tick, 1000);};
    this.state = {
      date: this.transformIntoDate(today),
      time: this.transformIntoTime(today)
    }
    this.tick = this.tick.bind(this);
   
  }


  transformIntoDate(date) {
    let TodaysDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    return TodaysDate;
  }

  transformIntoTime(date) {
    let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    return time;
  }

  tick() {
    let today = new Date(); 

    this.setState({
      date: this.transformIntoDate(today),
      time: this.transformIntoTime(today)
    })
  }

  componentDidMount(){
    setInterval(this.tick, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.handle);
    handle = 0;
  }

  render() {
    return (
      <div>
        <h1 >Clock</h1>
        <div className="clock">
          <h2>Today's date: {this.state.date}</h2>
          <h2>Time: {this.state.time}</h2>
        </div>
      </div>

    )
  }

}

export default Clock;