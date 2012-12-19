var SQUARESIZE = 20;

var colors = {
	0: "rgb(200,200,200)",
	1: "rgb(200,200,200)",
	2: "rgb(200,0,0)",
  3: "rgb(0,200,0)",
  4: "rgb(0,0,200)",
  5: "rgb(200,200,0)",
  6: "rgb(0,200,200)",
  7: "rgb(200,0,200)",
  8: "rgb(100,50,55)",
  9: "rgb(100,100,100)",

  //Extra whites
  10: "rgb(200,200,200)",
  11: "rgb(200,200,200)",
  12: "rgb(200,200,200)",
  13: "rgb(200,200,200)",
  14: "rgb(200,200,200)",
  15: "rgb(200,200,200)",
}

function Square(){
	
	this.x = 0;
	this.y = 0;
	this.w = SQUARESIZE;
	this.h = SQUARESIZE;
	this.fill = colors[1];
	this.empty = 0;

	this.init = function(x,y,fill){
		this.x = x;
		this.y = y;
		this.fill = fill;
		if (this.fill == colors[1])
			this.empty = 1;
	}

	this.draw = function(){
		ctx.fillStyle = this.fill;
  	ctx.fillRect(this.x,this.y,this.w,this.h);
	}

	this.isClicked = function(x,y){
		return ((x > this.x) && (x < (this.x + this.w)) &&
				(y > this.y) && (y < (this.y + this.h)));
	}


}