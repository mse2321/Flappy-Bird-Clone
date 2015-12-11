console.log("pipe graphics are working");

var PipeGraphicsComponent = function(entity) {
    this.entity = entity;
};

PipeGraphicsComponent.prototype.draw = function() {
    console.log("Drawing a pipe");
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;