var myFunc = function() {
    var speed = document.querySelector('#speed');
    speed.setAttribute("id", "speedmove");
    var run = document.querySelector('#run');
    run.setAttribute("id", "runmove");
  }

  window.onload = function() {
    setTimeout(myFunc, 1000);
  }