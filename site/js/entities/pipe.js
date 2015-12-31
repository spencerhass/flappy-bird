var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");
var Pipe = function(pos) {
    console.log("Creating Pipe entity");

var physics = new physicsComponent.PhysicsComponent(this);
physics.position.y = 0
if (pos == "top"){physics.position.y = .6 }
 physics.acceleration.x = -.3;

var graphics = new graphicsComponent.PipeGraphicsComponent(this);
    this.components = {
    	graphics: graphics,
    	physics: physics 
    };
};

exports.Pipe = Pipe;