var graphicsSystem = require('./systems/graphics');
var physicsSystem = require ('./systems/physics');
var bird = require('./entities/bird');
var pipe= require('./entities/pipe');

var bottomPipeHeight, topPipeHeight;
function setPipeHeight(){
	//gap height 10-30%
	var gapHeight = getRandomInt (10,30);
	//gapHeight = gapHeight/100;
	
	//randomly select starting y value
	var yStart = getRandomInt (10, (90 - gapHeight));
	
	gapHeight = gapHeight/100;
	yStart=yStart/100;
	//console.log(gapHeight); 
	//console.log(yStart);
	//at least 10% left on bottom
	// total top pipe + gap + bottom pipe == 100%
	bottomPipeHeight = yStart; 
	topPipeHeight = 1 - gapHeight - bottomPipeHeight;
	console.log(bottomPipeHeight);
	console.log(topPipeHeight);
	console.log(gapHeight);


}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var FlappyBird = function() {
	setPipeHeight();
    this.entities = [ new bird.Bird(), new pipe.Pipe("top",topPipeHeight), new pipe.Pipe("bottom", bottomPipeHeight)];
    this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
    this.physics= new physicsSystem.PhysicsSystem(this.entities);
};

FlappyBird.prototype.run = function() {
    this.graphics.run();
    this.physics.run();
};

exports.FlappyBird = FlappyBird;