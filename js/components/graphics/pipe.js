console.log("pipe graphics are working");

var PipeGraphicsComponent = function(entity, size) {
    this.entity = entity;
    this.size = {
        x: 0.1,
        y: 0.5
    };
};

PipeGraphicsComponent.prototype.draw = function(context, size) {
    var position = this.entity.components.physics.position;

    context.save();
    context.translate(position.x, position.y);
    //context.translate(0.8, 0.8);
    context.fillStyle = "green";
    context.fillRect(-this.size.x / 2, -this.size.y / 2, this.size.x, this.size.y);
    context.restore();
    console.log("pipe1 graphics have been drawn");

    context.save();
    context.translate(position.x - 0.4, position.y - 0.6);
    //context.translate(0.4, 0.2);
    context.fillStyle = "green";
    context.fillRect(-this.size.x / 2, -this.size.y / 2, this.size.x, this.size.y);
    context.restore();
    console.log("pipe2 graphics have been drawn");
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;