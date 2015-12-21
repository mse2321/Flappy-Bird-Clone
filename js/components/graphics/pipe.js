console.log("pipe graphics are working");

var PipeGraphicsComponent = function(entity, size) {
    this.entity = entity;
    this.size = {
        x: 0.2,
        y: 0.8
    };
};

PipeGraphicsComponent.prototype.draw = function(context, size) {
    var position = this.entity.components.physics.position;

    //context.save();
    //context.translate(position.x, position.y);
    context.fillStyle = "green";
    context.fillRect(-this.size.x / 2, -this.size.y / 2, this.size.x, this.size.y);
    //context.restore();
    console.log("pipe graphics have been drawn");
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;