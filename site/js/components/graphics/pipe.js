var PipeGraphicsComponent = function(entity) {

    this.entity = entity;
    PipeGraphicsComponent.prototype.setPipeHeight()
};

PipeGraphicsComponent.prototype.setPipeHeight = function() {
this.hsize = Math.random();
	if (this.hsize >.45){this.hsize=.45}
};

PipeGraphicsComponent.prototype.draw = function(context) {
	var position = this.entity.components.physics.position;

	if (position.x < -1.8)	{
		position.x = 1.3;

		this.entity.components.physics.velocity.x = 0;
		PipeGraphicsComponent.prototype.setPipeHeight() 
	};


    context.save();
    context.translate(position.x, position.y); 
    context.beginPath();
    context.rect(0,0,.2,this.hsize);
    context.fillStyle = "green";
    context.fill();
    context.closePath();
    context.restore();


   
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;