const canvas = document.getElementById("canvas");

const ctx = canvas.getContext('2d');
ctx.fillStyle = '#fff';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Create an array of balls, each with a random position and velocity
const balls = [...Array(5)].map(() => {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: Math.random() * 10 - 5,
    vy: Math.random() * 10 - 5
  };
});

// Set up the animation loop
function draw() {
  // Move each ball by its velocity
  balls.forEach(ball => {
    ball.x += ball.vx;
    ball.y += ball.vy;

    // Check if the ball has hit the edge of the canvas, and reverse its velocity if so
    if (ball.x >= canvas.width || ball.x <= 0) {
      ball.vx = -ball.vx;
    }
    if (ball.y >= canvas.height || ball.y <= 0) {
      ball.vy = -ball.vy;
    }
  });

  // Clear the canvas and draw each ball in its new position
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  balls.forEach((ball, i) => {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, 5, 0, 2 * Math.PI); // Set the ball's radius to 5
    ctx.fillStyle = ['#f00', '#0f0', '#00f', '#ff0', '#0ff'][i]; // Set the ball's color
    ctx.strokeStyle = '#000'; // Set the ball's outline color
    ctx.lineWidth = 2; // Set the ball's outline thickness
    ctx.fill();
    ctx.stroke(); // Draw the ball's outline
  });

  // Request another animation frame
  requestAnimationFrame(draw);
}

// Start the animation loop
requestAnimationFrame(draw);