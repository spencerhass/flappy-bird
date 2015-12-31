!function t(i,s,n){function e(c,h){if(!s[c]){if(!i[c]){var r="function"==typeof require&&require;if(!h&&r)return r(c,!0);if(o)return o(c,!0);var a=new Error("Cannot find module '"+c+"'");throw a.code="MODULE_NOT_FOUND",a}var p=s[c]={exports:{}};i[c][0].call(p.exports,function(t){var s=i[c][1][t];return e(s?s:t)},p,p.exports,t,i,s,n)}return s[c].exports}for(var o="function"==typeof require&&require,c=0;c<n.length;c++)e(n[c]);return e}({1:[function(t,i,s){var n=function(t){this.entity=t};n.prototype.draw=function(t){var i=this.entity.components.physics.position;t.save(),t.translate(i.x,i.y),t.beginPath(),t.arc(0,0,.02,0,2*Math.PI),t.fill(),t.closePath(),t.restore()},s.BirdGraphicsComponent=n},{}],2:[function(t,i,s){var n=function(t){this.entity=t,n.prototype.setPipeHeight()};n.prototype.setPipeHeight=function(){this.hsize=Math.random(),this.hsize>.45&&(this.hsize=.45)},n.prototype.draw=function(t){var i=this.entity.components.physics.position;i.x<-1.8&&(i.x=1.3,this.entity.components.physics.velocity.x=0,n.prototype.setPipeHeight()),t.save(),t.translate(i.x,i.y),t.beginPath(),t.rect(0,0,.2,this.hsize),t.fillStyle="green",t.fill(),t.closePath(),t.restore()},s.PipeGraphicsComponent=n},{}],3:[function(t,i,s){var n=function(t){this.entity=t,this.position={x:0,y:0},this.velocity={x:0,y:0},this.acceleration={x:0,y:0}};n.prototype.update=function(t){this.velocity.x+=this.acceleration.x*t,this.velocity.y+=this.acceleration.y*t,this.position.x+=this.velocity.x*t,this.position.y+=this.velocity.y*t},s.PhysicsComponent=n},{}],4:[function(t,i,s){var n=t("../components/graphics/bird"),e=t("../components/physics/physics"),o=function(){console.log("Creating Bird entity");var t=new e.PhysicsComponent(this);t.position.y=.5,t.acceleration.y=-2;var i=new n.BirdGraphicsComponent(this);this.components={graphics:i,physics:t}};s.Bird=o},{"../components/graphics/bird":1,"../components/physics/physics":3}],5:[function(t,i,s){var n=t("../components/graphics/pipe"),e=t("../components/physics/physics"),o=function(t){console.log("Creating Pipe entity");var i=new e.PhysicsComponent(this);i.position.y=0,"top"==t&&(i.position.y=.6),i.acceleration.x=-.3;var s=new n.PipeGraphicsComponent(this);this.components={graphics:s,physics:i}};s.Pipe=o},{"../components/graphics/pipe":2,"../components/physics/physics":3}],6:[function(t,i,s){var n=t("./systems/graphics"),e=t("./systems/physics"),o=t("./entities/bird"),c=t("./entities/pipe"),h=function(){this.entities=[new o.Bird,new c.Pipe("top"),new c.Pipe("bottom")],this.graphics=new n.GraphicsSystem(this.entities),this.physics=new e.PhysicsSystem(this.entities)};h.prototype.run=function(){this.graphics.run(),this.physics.run()},s.FlappyBird=h},{"./entities/bird":4,"./entities/pipe":5,"./systems/graphics":8,"./systems/physics":9}],7:[function(t,i,s){var n=t("./flappy_bird");document.addEventListener("DOMContentLoaded",function(){var t=new n.FlappyBird;t.run()})},{"./flappy_bird":6}],8:[function(t,i,s){var n=function(t){this.entities=t,this.canvas=document.getElementById("main-canvas"),this.context=this.canvas.getContext("2d")};n.prototype.run=function(){window.requestAnimationFrame(this.tick.bind(this))},n.prototype.tick=function(){(this.canvas.width!=this.canvas.offsetWidth||this.canvas.height!=this.canvas.offsetHeight)&&(this.canvas.width=this.canvas.offsetWidth,this.canvas.height=this.canvas.offsetHeight),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.save(),this.context.translate(this.canvas.width/2,this.canvas.height),this.context.scale(this.canvas.height,-this.canvas.height);for(var t=0;t<this.entities.length;t++){var i=this.entities[t];!1 in i.components||i.components.graphics.draw(this.context)}this.context.restore(),window.requestAnimationFrame(this.tick.bind(this))},s.GraphicsSystem=n},{}],9:[function(t,i,s){var n=function(t){this.entities=t};n.prototype.run=function(){window.setInterval(this.tick.bind(this),1e3/60)},n.prototype.tick=function(){for(var t=0;t<this.entities.length;t++){var i=this.entities[t];!1 in i.components||i.components.physics.update(1/60)}},s.PhysicsSystem=n},{}]},{},[7]);