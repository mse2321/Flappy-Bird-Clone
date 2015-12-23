var position = {
        x: 0,
        y: 0
    };


var InputSystem = function(entities) {
    this.entities = entities;

    // Canvas is where we get input from
    this.canvas = document.getElementById('main-canvas');
};

/* Graphics */

var GraphicsSystem = function(entities) {
    this.entities = entities;
    // Canvas is where we draw
    this.canvas = document.getElementById('main-canvas');
    // Context is what we draw to
    this.context = this.canvas.getContext('2d');
};

GraphicsSystem.prototype.run = function() {
     // Run the render loop
    window.requestAnimationFrame(this.tick.bind(this));
    // Tick the graphics system a few times to see it in action
    for (var i=0; i<1; i++) {
        this.tick();
    }
};

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

    this.context.restore();

    //window.requestAnimationFrame(this.tick.bind(this));
};

/* Pipe */

var PipeGraphicsComponent = function(entity, size) {
    this.entity = entity;
    this.size = {
        x: 0.2,
        y: 0.8
    };
};

PipeGraphicsComponent.prototype.draw = function(context, size) {
    context.save();
    context.translate(position.x, position.y);
    context.fillStyle = "green";
    context.fillRect(-this.size.x / 2, -this.size.y / 2, this.size.x, this.size.y);
    context.restore();
    console.log("pipe graphics have been drawn");
};

var Pipe = function() {

    var graphics = new PipeGraphicsComponent(this);
    
    this.components = {
        graphics: graphics
    };
};

/* var pipeTop = new Pipe();
var pipeBottom = new Pipe();

pipeTop.prototype.physics.position.y = 2;
pipeBottom.prototype.physics.position.y = -2; */

/* Flappy Bird JS */

var FlappyBird = function() {
    this.entities = [new Pipe()];
    //this.entities = [new bird.Bird()];
    //this.entities = [new pipe.Pipe()];
    this.graphics = new GraphicsSystem(this.entities);
    this.input = new InputSystem(this.entities);
};

FlappyBird.prototype.run = function(position) {
        this.graphics.run();
        console.log(this.entities);

        if (this.entities[1] == true) {
            console.log("statement used");
            position = {
                x: 1,
                y: 1

            };
        }
};

document.addEventListener('DOMContentLoaded', function() {
    var app = new FlappyBird();
    app.run();
});