class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    const todays_date = new Date();
    this.hours = todays_date.getHours();
    this.mins = todays_date.getMinutes();
    this.seconds = todays_date.getSeconds();
    this.printTime();
    this._tick = this._tick.bind(this);
    setInterval(this._tick, 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hours%12}:${this.mins}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.seconds++;
    // console.log(this.seconds);
    if(this.seconds >=60){
      this.mins++;
      this.seconds = 0;
    }

    if (this.minutes >=60){
      // console.log(this.mins);

      this.hours++;
      this.minutes =0;
    }

    if (this.hours >= 24){
      // console.log(this.hours);

      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }
    this.printTime();
  }
}

const clock = new Clock();