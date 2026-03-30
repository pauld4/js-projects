# js-canvas

/MAIN/

"prng.js" is a pseudonumber random generator (PRNG). Using a set "seed", "random" numbers can be generated based on the seed. These numbers are the same every time for the same seed. A hashing formula is used along with a Linear Congruential Generator (LCG). More can be read here: https://en.wikipedia.org/wiki/Linear_congruential_generator

"template.html" is an HTML file that is set up to use a scalable canvas element. The canvas is centered in the screen, and will scale based on screen size. To center an element, the X and Y position must be equal to half of the X or Y size, then subtract half of the elements X and Y size.

/CANVAS/

"canvas_resize.html" will draw a blue square on your screen with a red background using the JavaScript canvas element. The square will always be centered and take up as much screen space as possible while remaining a square, even on mobile devices with a tall rectangular screen or desktops with a wider rectangular screen. This uses the eventlistener for resize, and executes a function every time the screen is resized. The square is redrawn based on the new size. Objects drawn on top of the blue square will also scale based on the size of the blue square. The code draws objects based on resolution width and height values, then scales that drawing to the size of the window. Try changing the baseWidth and baseHeight values, then resizing your browser window to see how the drawing changes.

"canvas_keyboard.html" will draw a 32x32 pixel blue square on screen, which can be interacted with using the keyboard. Keys WASD move the square, and E will toggle the color of the square. The square will always stay within the window, so resizing the screen will also move the square if it is out of bounds.
