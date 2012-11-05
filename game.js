var stageW = 800;
var stageY = 600;

Crafty.init(stageW, stageY);
Crafty.background('#00BFFF');

Crafty.e("player, 2D, Canvas, Color, Twoway, Gravity, Collision")
	.color('#0000ff')
	.attr({ x: 0, y: 540, w: 15, h: 40 })
	.twoway(5, 5)
	.gravity('solid')
	.onHit("enemy", function(entities) {
		for (var i in entities) {
			if (entities[i].obj.y > this.y) {
				entities[i].obj.destroy();
				Crafty("score").each(function () { 
					this.text(++this.score + " kabillion points");
				});
			}
			else {
				this.x = 0;
				this.y = 540;
			}
		}
	})
	.onHit("exit", function(entities) {
		for (var i in entities) {
			Crafty("score").each(function () { 
				this.score += 100;
				this.text(this.score + " kabillion points");
			});
			this.x = 0;
			this.y = 540;
		}
	})
	.bind('EnterFrame', function () {
		if (this.x >= stageW - this.w) {
			this.x = stageW - this.w;
		}
		
		if (this.x <= 0) {
			this.x = 0;
		}
	})
	.bind('Moved', function(from) {
		if (this.hit('solid')){
			this.attr({x: from.x, y: from.y});
		}
	});

// exit
Crafty.e("exit, 2D, Canvas, Color, Collision")
	.color('#00ff00')
	.attr({ x: 785, y: 40, w: 15, h: 40 });

	
// solids
Crafty.e("solid, 2D, Canvas, Color, Collision")
	.color('#8B7355')
	.attr({ x: 0, y: 580, w: 800, h: 20 });

Crafty.e("solid, 2D, Canvas, Color, Collision")
	.color('#8B7355')
	.attr({ x: 500, y: 540, w: 100, h: 20 });
	
Crafty.e("solid, 2D, Canvas, Color, Collision")
	.color('#8B7355')
	.attr({ x: 550, y: 480, w: 100, h: 20 });
	
Crafty.e("solid, 2D, Canvas, Color, Collision")
	.color('#8B7355')
	.attr({ x: 600, y: 420, w: 100, h: 20 });

Crafty.e("solid, 2D, Canvas, Color, Collision")
	.color('#8B7355')
	.attr({ x: 760, y: 380, w: 40, h: 20 });

Crafty.e("solid, 2D, Canvas, Color, Collision")
	.color('#8B7355')
	.attr({ x: 600, y: 320, w: 100, h: 20 });

Crafty.e("solid, 2D, Canvas, Color, Collision")
	.color('#8B7355')
	.attr({ x: 320, y: 280, w: 100, h: 20 });

Crafty.e("solid, 2D, Canvas, Color, Collision")
	.color('#8B7355')
	.attr({ x: 120, y: 240, w: 40, h: 20 });

Crafty.e("solid, 2D, Canvas, Color, Collision")
	.color('#8B7355')
	.attr({ x: 0, y: 200, w: 40, h: 20 });

Crafty.e("solid, 2D, Canvas, Color, Collision")
	.color('#8B7355')
	.attr({ x: 160, y: 160, w: 80, h: 20 });

Crafty.e("solid, 2D, Canvas, Color, Collision")
	.color('#8B7355')
	.attr({ x: 320, y: 120, w: 20, h: 20 });
	
Crafty.e("solid, 2D, Canvas, Color, Collision")
	.color('#8B7355')
	.attr({ x: 360, y: 120, w: 20, h: 20 });

Crafty.e("solid, 2D, Canvas, Color, Collision")
	.color('#8B7355')
	.attr({ x: 400, y: 120, w: 20, h: 20 });

Crafty.e("solid, 2D, Canvas, Color, Collision")
	.color('#8B7355')
	.attr({ x: 500, y: 80, w: 300, h: 20 });

Crafty.e("solid, 2D, Canvas, Color, Collision")
	.color('#8B7355')
	.attr({ x: 200, y: 380, w: 60, h: 20 });
	
Crafty.e("solid, 2D, Canvas, Color, Collision")
	.color('#8B7355')
	.attr({ x: 200, y: 360, w: 20, h: 20 });
	
	
// score
Crafty.e("score, Canvas, 2D, Text")
	.attr({ x: 5, y: 0, w: 100, h: 15, score: 0 })
	.text("0 kabillion points");

setInterval(function () {
	if (Crafty.isPaused()) {
		return;
	}
	
	SpawnEnemy(780, 0);
	
}, 5000);
	
function SpawnEnemy(x, y) {
	Crafty.e("enemy, 2D, Canvas, Color, Twoway, Gravity, Collision")
		.color('#ff0000')
		.attr({ x: x, y: y, w: 15, h: 40, dX: 2 })
		.gravity('solid')
		.bind('EnterFrame', function () {
			this.x += this.dX;
		})
		.onHit("solid", function() {
			this.dX *= -1;
		})
		.bind('EnterFrame', function () {
			if (this.x >= stageW - this.w) {
				this.x = stageW - this.w;
				this.dX *= -1;
			}
			
			if (this.x <= 0) {
				this.x = 0;
				this.dX *= -1;
			}
		});
}