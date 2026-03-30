# js-canvas

/MAIN/

"prng.js" is a pseudonumber random generator (PRNG). Using a set "seed", "random" numbers can be generated based on the seed. These numbers are the same every time for the same seed. A hashing formula is used along with a Linear Congruential Generator (LCG). More can be read here: https://en.wikipedia.org/wiki/Linear_congruential_generator

/CANVAS/

"canvas_resize.html" will draw a blue square on your screen using the JavaScript canvas element. The square will always be centered and take up as much screen space as possible while remaining a square, even on mobile devices with a tall rectangular screen or desktops with a wider rectangular screen. This uses the eventlistener for resize, and executes a function every time the screen is resized. The square is redrawn based on the new size. Try changing the size of your browser window to see how this works. Objects drawn on top of the blue square will need to be individually scaled based on the size of the blue square. This is updated in the next file, "canvas_resize2.html".

"canvas_resize2.html" draws a blue square on screen, similar to "canvas_resize.html". However, this file also changes and scales the objects drawn on the blue square based on the size of the browser window. The code draws objects based on resolution width and height values, then scales that drawing to the size of the window. Try changing the baseWidth and baseHeight values, then resizing your browser window to see how the drawing changes.

"canvas_keyboard.html" will draw a 32x32 pixel blue square on screen, which can be interacted with using the keyboard. Keys WASD move the square, and E will toggle the color of the square. The square will always stay within the window, so resizing the screen will also move the square if it is out of bounds.
