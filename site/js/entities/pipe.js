var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");
var Pipe = function(pos, h) {
    console.log("Creating Pipe entity height" + h);

var physics = new physicsComponent.PhysicsComponent(this);
physics.position.y = 0
if (pos == "top") {
	physics.position.y = 1 - h 
}
 physics.acceleration.x = -.3;

var graphics = new graphicsComponent.PipeGraphicsComponent(this, h);
    this.components = {
    	graphics: graphics,
    	physics: physics 
    };
};

exports.Pipe = Pipe;