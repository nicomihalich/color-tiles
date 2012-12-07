var SQUARESIZE = 20;

function Square(){
	
	this.x = 0;
	this.y = 0;
	this.w = SQUARESIZE;
	this.h = SQUARESIZE;
	this.fill = "rgb(0,0,0)";

	this.init = function(x,y,fill){
		this.x = x;
		this.y = y;
		this.fill = fill;
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