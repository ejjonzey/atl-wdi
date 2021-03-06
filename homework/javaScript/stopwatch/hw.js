// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
    this.millisecs += 10;
    if(this.millisecs >= 1000) {
      this.millisecs -= 1000;
      this.secs++;
    }
    if(this.secs >= 60) {
      this.sec -= 60;
      this.mins++;
    }
  },
  reset: function(){
    this.millisecs = 0;
    this.secs = 0;
    this.mins = 0;
  },
  start: function(){
    if(!this.isRunning) {
      this.isRunning = true;
      this.tickClock();
    }
  },
  stop: function() {
    this.running = false;
  },
  lap: function(){
    
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
  document.getElementById('mins').innerHTML = ViewHelpers.zeroFill(mins, 2);
    document.getElementById('secs').innerHTML = ViewHelpers.zeroFill(secs, 2);
    document.getElementById('millisecs').innerHTML = ViewHelpers.zeroFill(millisecs/10, 2);
   },
  updateLapListDisplay: function(laps){
    // Your Code Here
  },
};
const ViewHelpers = {
  zeroFill: function(number, length){
    var str = number.toString();
    let numZeroes = Math.max(length - str.length, 0);
    for( var i = 0; i < (length - str.length); i++){
      str = '0' + str;
    }
    return str;
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
  },
  handleClickStart: function() {
    if (!Stopwatch.isRunning) { Stopwatch.start(); }
  },
  handleClickStopReset: function(){
      if (Stopwatch.isRunning) {
      Stopwatch.stop();
    } else {
      Stopwatch.reset();
    }
  },
  handleClickLap: function(){
    // Your Code Here
  }
};

window.onload = function(){
  // Attach AppController methods to the DOM as event handlers here.
  document.getElementById('start').onclick = AppController.handleClickStart;
  document.getElementById('stop').onclick = AppController.handleClickStopReset;
};

