var InputSystem = function(entities) {
    this.entities = entities;

    // Canvas is where we get input from
    this.canvas = document.getElementById('main-canvas');
};

InputSystem.prototype.run = function() {

	if(screen.width <= 700) {
		this.canvas.addEventListener('touchstart', this.onClick.bind(this));
	} else {
		this.canvas.addEventListener('click', this.onClick.bind(this));
	}

	// add button option for users to choose their experience
};

InputSystem.prototype.onClick = function() {
    var bird = this.entities[0];
    bird.components.physics.velocity.y = 0.8;
};

exports.InputSystem = InputSystem;