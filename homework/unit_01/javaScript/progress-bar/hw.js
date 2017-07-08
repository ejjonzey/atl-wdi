// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
    document.getElementById('numeric-display').textContent = timerValue;
    // Your Code Here
  },
  drawProgressBars: function(timerValue){
    var timeElapsed = 100 - timerValue;
        document.getElementsByClassName('progress-bar')[0].style.width = timeElapsed + '%';
  },
  drawLitFuses: function(timerValue){
    var percentUnburnt = timerValue/100;
    document.getElementsByClassName('unburnt')[0].style.width = percentUnburnt*98 + '%';
    document.getElementsByClassName('burnt')[0].style.width = (1 - percentUnburnt)*98 + '%';
    // Your Code Here
  },
  drawCrawlers: function(timerValue){
    // Your Code Here
  }
};
