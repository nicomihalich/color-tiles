var SIZE = 25;

function Board(){
	var squares = [];

	this.init = function(){
		for (var i=0;i<SIZE;i++){
			for (var j=0;j<SIZE;j++){
				var s = new Square();
				s.init(i*(SQUARESIZE + 2),j*(SQUARESIZE + 2),colors[Math.floor(Math.random()*15)]);
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
		if (squares[i].empty == 0)
			return;
		var vertIndexForward = i;
		var horIndexForward = i;
		var vertIndexBackward = i;
		var horIndexBackward = i;
		while (squares[vertIndexForward].empty == 1 && vertIndexForward<squares.length){
			vertIndexForward++;
		}
		while (squares[horIndexForward].empty == 1 && horIndexForward<squares.length){
			horIndexForward += SIZE;
		}
		while (squares[vertIndexBackward].empty == 1 && vertIndexBackward<squares.length){
			vertIndexBackward--;
		}
		while (squares[horIndexBackward].empty == 1 && horIndexBackward<squares.length){
			horIndexBackward -= SIZE;
		}
		squares[vertIndexForward].fill = "rgb(0,0,0)";
		squares[horIndexForward].fill = "rgb(0,0,0)";
		squares[vertIndexBackward].fill = "rgb(0,0,0)";
		squares[horIndexBackward].fill = "rgb(0,0,0)";
	}

	this.handleMouse = function(mx,my){
		for (var i=0;i<squares.length;i++){
			if (squares[i] != null)
				if (squares[i].isClicked(mx,my)){
					this.updateBoard(i);
					return;
				}
		}
	}

}