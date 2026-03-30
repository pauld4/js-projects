document.addEventListener("DOMContentLoaded", () => {
	const canvas = document.getElementById("main_canvas");
	const ctx = canvas.getContext("2d");
	const keys = [];
	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	let square = {
		posx: 0,
		posy: 0,
		size: 32,
		color: 'blue',
		speed: 5
	}
	
	function resizeCanvas() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		
		draw();
	}
	
	function startApp() {
		square.posx = (canvas.width / 2) - (square.size / 2);
		square.posy = (canvas.height / 2) - (square.size / 2);
	}
	
	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		ctx.fillStyle = square.color;
		ctx.fillRect(square.posx, square.posy, square.size, square.size);
	}
	
	function mainLoop() {
		if(keys['KeyW']) {
			// move up
			square.posy -= square.speed;
		} else if(keys['KeyS']) {
			// move down
			square.posy += square.speed;
		}
		
		if(keys['KeyA']) {
			// move left
			square.posx -= square.speed;
		} else if(keys['KeyD']) {
			// move right
			square.posx += square.speed;
		}
		
		// check out of bounds
		if(square.posx < 0) {
			square.posx = 0;
		}
		
		if(square.posx > (canvas.width - square.size)) {
			square.posx = (canvas.width - square.size);
		}
		
		if(square.posy < 0) {
			square.posy = 0;
		}
		
		if(square.posy > (canvas.height - square.size)) {
			square.posy = (canvas.height - square.size);
		}
		
		draw();
		requestAnimationFrame(mainLoop);
	}

	document.addEventListener("keydown", e => {
		if(!keys[e.code]) {
			if(e.code == "KeyE") {
				if(square.color == "blue") {
					square.color = "green";
				} else {
					square.color = "blue";
				}
			}
			
			keys[e.code] = true;
		}
	});
	
	document.addEventListener("keyup", e => keys[e.code] = false);

	canvas.addEventListener("contextmenu", function (e) {
		e.preventDefault();
	});

	window.addEventListener("resize", resizeCanvas);
	
	resizeCanvas();
	startApp();
	mainLoop();
});
