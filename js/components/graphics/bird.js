console.log("bird graphics are working");

var BirdGraphicsComponent = function(entity) {
    this.entity = entity;
};

BirdGraphicsComponent.prototype.draw = function(context, position, size) {
    console.log("Drawing a bird");
    context.save();

    context.scale(10, 10);
	context.translate(5, 3);
	context.beginPath();
	context.arc(0, 0, 1, 0, 2 * Math.PI);
	context.fill();

   /* context.translate(position.x, position.y);
    context.scale(size, size);
    context.beginPath();
    context.arc(0, 0, 1, 0, 2 * Math.PI);
    context.fill();
    context.restore();
   */
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;