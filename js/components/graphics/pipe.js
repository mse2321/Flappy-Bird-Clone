console.log("pipe graphics are working");

var PipeGraphicsComponent = function(entity) {
    this.entity = entity;

    this.size = {
        x: 0.2,
        y: 0.4
    };
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

PipeGraphicsComponent.prototype.draw = function(context, size) {
    var position = {
        x: 0.5,
        y: 0.2
    };

    context.save();
    context.fillStyle = "green";
    context.fillRect(position.x, position.y, size.x, size.y);
    context.restore();
    console.log("pipes graphics have been drawn");
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;