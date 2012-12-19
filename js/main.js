var HEIGHT;
var WIDTH;
var mx;
var my;
var board;


window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var mouseDown = function(e){

	if (e.offsetX){
		mx = e.offsetX;
		my = e.offsetY;
	}
  
  else if (e.layerX){
  	mx = e.layerX;
  	my = e.layerY;
  }

}

function init(){
	canvas = document.getElementById('canvas');
	HEIGHT = canvas.height;
	WIDTH = canvas.width;
	ctx = canvas.getContext('2d');

	canvas.onmousedown = mouseDown;

	board = new Board;
	board.init();
	
	main();

}

function main(){

	board.handleMouse(mx,my);

	board.draw();
	mx = -1;
	my = -1;

	window.requestAnimFrame(main);

}