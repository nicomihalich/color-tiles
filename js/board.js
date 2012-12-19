var SIZE = 25;
var SCORE = 0;

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


	this.removeSquares = function(adjacent){
		var colorHash = {};
		var length = adjacent.length;
		if (adjacent.length < 2)
			return;

		for (var i=0;i<length;i++){
			if (colorHash[adjacent[i].fill] == undefined){
				colorHash[adjacent[i].fill] = 0;
			}
			colorHash[adjacent[i].fill]++;
		}

		for (var i=0;i<length;i++){
			if (colorHash[adjacent[i].fill] >=2 && colorHash[adjacent[i].fill] != undefined){
				adjacent[i].fill = colors[0];
				SCORE++;
			}
		}
	}


	this.updateBoard = function(index){
		var adjacent = [];
		if (squares[index].empty == 0)
			return;
		var right = index;
		var left = index;
		var up = index;
		var down = index;

		while (squares[down].empty == 1){
			down++;
			if (down>=squares.length || down % SIZE == 0){
				down = squares.length+1;
				break;
			}
		}
		if (down < squares.length)
			adjacent.push(squares[down]);


		while (squares[right].empty == 1){
			right += SIZE;
			if (right>=squares.length){
				right = squares.length+1;
				break;
			}
		}
		if (right < squares.length)
			adjacent.push(squares[right]);


		while (squares[up].empty == 1){
			up--;
			if (up < 0 || (up+1) % SIZE == 0){
				up = -1;
				break;
			}
		}
		if (up > 0)
			adjacent.push(squares[up]);


		while (squares[left].empty == 1){
			left -= SIZE;
			if (left < 0){
				left = -1;
				break;
			}
		}
		if (left > 0)
			adjacent.push(squares[left]);


		for (var i=0;i<adjacent.length;i++){
			console.log(adjacent[i].fill);
		}
		console.log("------");
		
		this.removeSquares(adjacent);
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