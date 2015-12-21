console.log("pipe graphics are working");

var PipeGraphicsComponent = function(entity) {
    this.entity = entity;
};

PipeGraphicsComponent.prototype.draw = function() {
    var position = this.entity.components.physics.position;

    context.save();
    context.translate(position.x, position.y);
    context.fillStyle = "green";
    context.fillRect(0, 0, 100, 100);
    context.restore();
    console.log("pipe graphics have been drawn");
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;