console.log("pipe graphics are working");

var PipeGraphicsComponent = function(entity) {
    this.entity = entity;

    this.size = {
        x: 0.1,
        y: 0.5
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
    var position = this.entity.components.physics.position;

    context.save();
    //context.translate(position.x, position.y);
    context.translate(0.8, 0.8);
    context.fillStyle = "green";
    context.fillRect(-this.size.x / 2, -this.size.y / 2, this.size.x, this.size.y);
    context.restore();
    console.log("pipe1 graphics have been drawn");

    context.save();
    //context.translate(position.x - 0.4, position.y - 0.6);
    context.translate(0.4, 0.2);
    context.fillStyle = "green";
    context.fillRect(-this.size.x / 2, -this.size.y / 2, this.size.x, this.size.y);
    context.restore();
    console.log("pipe2 graphics have been drawn");
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;