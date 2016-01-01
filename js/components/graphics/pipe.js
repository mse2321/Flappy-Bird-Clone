console.log("pipe graphics are working");

var PipeGraphicsComponent = function(entity) {
    this.entity = entity;
};

/*
PipeGraphicsComponent.prototype.draw = function(context) {
    var position = this.entity.components.physics.position;
    var size = this.entity.size;
    var color = this.entity.color;

    context.save();
    context.fillStyle = color;
    context.fillRect(position.x, position.y, size.x, size.y);
    context.restore();
    console.log("pipes graphics have been drawn");
};

*/

PipeGraphicsComponent.prototype.draw = function(context) {
    var position = this.entity.components.physics.position;

    context.save();
    context.translate(position.x, position.y);
    context.beginPath();
    context.fillStyle = "green";
    context.fillRect(0, 0, 0.1, 0.4);
    context.closePath();
    context.restore();
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;