var physicsSystem = require('./systems/systems_physics');
var timer = require('./systems/timer');

var GraphicsSystem = function(entities) {
    this.entities = entities;
    // Canvas is where we draw
    this.canvas = document.getElementById('main-canvas');
    // Context is what we draw to
    this.context = this.canvas.getContext('2d');
    this.frame = 0;
};

GraphicsSystem.prototype.base = function() {
    this.tick.bind(this);
    this.tick(1);
};

GraphicsSystem.prototype.run = function() {
  // Run the render loop
  this.frame = window.requestAnimationFrame(this.tick.bind(this));
  document.getElementById('pause').className = "hidden";
};

GraphicsSystem.prototype.pause = function() {
  window.cancelAnimationFrame(this.frame);
  document.getElementById('pause').className = "";
}

GraphicsSystem.prototype.tick = function() {
     // Set the canvas to the correct size if the window is resized
    if (this.canvas.width != this.canvas.offsetWidth ||
        this.canvas.height != this.canvas.offsetHeight) {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }

    // Clear the canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.context.save();
    this.context.translate(this.canvas.width / 2, this.canvas.height);
    this.context.scale(this.canvas.height, -this.canvas.height);

    for (var i=0; i<this.entities.length; i++) {
        var entity = this.entities[i];
        if (!'graphics' in entity.components) {
            continue;
        }

        entity.components.graphics.draw(this.context);
    }

    /*
        for (var i=0; i<this.entities.length; i++) {
        var entity = this.entities[i];
        if (!'graphics' in entity.components) {
            continue;
        }

        entity.components.graphics.draw(this.context);
    }

    */

    this.context.restore();

    window.requestAnimationFrame(this.tick.bind(this));
};

// Function: Draw grid based on given gap size and how many lines should be drawn
// Provided by Vicky Leong
GraphicsSystem.prototype.drawGrid = function(gap, times) {
  this.gap   = gap   || 0.1;
  this.times = times || 10;
  this.context.lineWidth = 0.001;
  this.context.beginPath();
  for (var i = 0; i < (this.gap*this.times); i += this.gap) {
    // Positive y
    this.context.moveTo(-this.gap*this.times, i);
    this.context.lineTo( this.gap*this.times, i);
    // Negative y
    this.context.moveTo(-this.gap*this.times, -i);
    this.context.lineTo( this.gap*this.times, -i);
    // Positive x
    this.context.moveTo(i, -this.gap*this.times);
    this.context.lineTo(i,  this.gap*this.times);
    // Negative x
    this.context.moveTo(-i, -this.gap*this.times);
    this.context.lineTo(-i,  this.gap*this.times);
  }
  this.context.strokeStyle = "#AAA";
  this.context.stroke();
};

exports.GraphicsSystem = GraphicsSystem;