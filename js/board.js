var SIZE = 20;

var colors = {
	1: "rgb(200,0,0)",
  2: "rgb(0,200,0)",
  3: "rgb(0,0,200)",
  4: "rgb(0,0,0)",
}

function Board(){
	var squares = [];

	this.init = function(){
		for (var i=0;i<SIZE;i++){
			for (var j=0;j<SIZE;j++){
				var s = new Square();
				s.init(i*(SQUARESIZE + 2),j*(SQUARESIZE + 2),colors[Math.floor(Math.random()*4)]);
				squares.push(s);
			}
		}
	}

	this.draw = function(){

		for (var i=0;i<squares.length;i++){
			if (squares[i] != null)
				squares[i].draw();
		}
	}

	this.updateBoard = function(i){

	}

	this.handleMouse = function(mx,my){
		for (var i=0;i<squares.length;i++){
			if (squares[i] != null)
				if (squares[i].isClicked(mx,my)){

				}
		}
	}

}