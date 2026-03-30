document.addEventListener("DOMContentLoaded", () => {
	const canvas = document.getElementById("main_canvas");
	const ctx = canvas.getContext("2d");
	
	// resolutions to scale off of
	// try changing the resolution values below (baseWidth and baseHeight) to see how it affects the blue square and the objects drawn inside
	// then change the size of your browser window to see how the objects adjust to the size of the window
	const baseWidth = 1280; // other possible resolutions include 1920x1080, 1280x720, 960x960
	const baseHeight = 720;
	
	let main_square = {
		posX: 0,
		posY: 0,
		sizeX: 0,
		sizeY: 0,
		
		scale: 0
	}
	
	function resizeCanvas() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		
		// get the scale values based on what the resolution should be
		let scaleX = canvas.width / baseWidth;
		let scaleY = canvas.height / baseHeight;
		main_square.scale = Math.min(scaleX,scaleY); // get the minimum of the two scale values for either wider or longer screens
		
		// adjust the size of the screen and position it in the middle of the screen
		main_square.sizeX = baseWidth;
		main_square.sizeY = baseHeight;
		main_square.posX = (canvas.width / 2) - ((main_square.sizeX * main_square.scale) / 2);
		main_square.posY = (canvas.height / 2) - ((main_square.sizeY * main_square.scale) / 2);
		
		draw();
	}

	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		// draw red background
		ctx.fillStyle = "red";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		
		// draw blue square
		ctx.fillStyle = "blue";
		ctx.fillRect(main_square.posX, main_square.posY, main_square.sizeX*main_square.scale, main_square.sizeY*main_square.scale);
		
		ctx.save();
		ctx.translate(main_square.posX,main_square.posY);
		ctx.scale(main_square.scale,main_square.scale);
		
		// draw objects on top of the blue screen
		// objects must be created in this space, between the ctx.save/ctx.scale and ctx.restore
		
		// the green and orange objects are automatically scaled because of the ctx.translate and 
		// ctx.scale above, which is why we can use static values for pos and size
		ctx.fillStyle = "green";
		ctx.fillRect(100, 150, 64, 64);
		
		ctx.fillStyle = "orange";
		ctx.fillRect(164, 214, 128, 64);
		
		ctx.restore();
	}

	function mainLoop() {
		draw();
		requestAnimationFrame(mainLoop);
	}

	window.addEventListener("resize", resizeCanvas); // listen for when window is resized
	
	canvas.addEventListener("contextmenu", (e) => {
		e.preventDefault(); // prevent right clicking
	});

	resizeCanvas();
	mainLoop();
});
