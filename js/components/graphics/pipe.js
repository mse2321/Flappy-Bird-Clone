console.log("pipe graphics are working");

var PipeGraphicsComponent = function(entity) {
    this.entity = entity;

};

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


exports.PipeGraphicsComponent = PipeGraphicsComponent;