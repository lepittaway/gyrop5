var alpha, beta, gamma;
var xpos, ypos;

var moveX;

var vid;

function setup()  {
  // set canvas size
  createCanvas(windowWidth, windowHeight);
  
  vid = createVideo('assets/videos/sphere.mp4');
  vid.play();
  vid.loop();
  
  // default values
  xpos = 200;
  ypos = 200;
  alpha = 0;
  beta = 0;
  gamma = 0;
  
  
}

function draw() {
  // set background color to white
  //vid = document.getElementById("vid");
  
  
  
  background(0);
  // display variables
  fill(100);
  noStroke();
  fill(255);
  text("alpha: " + alpha, 25, 25);
  text("beta: " + beta, 25, 50);
  text("gamma: " + gamma, 25, 75);
  
  push();
  translate(200, 200);
  //rotate(radians(gamma));
  fill(0, 0, 255);
  rect(gamma*4, beta*4, 80, 80);
  fill(255);
  rect(gamma*4, beta*4, 80, 5);
  pop();
  
  vid.position(gamma*4, beta*4);
  
  //image(vid, 10, 10);
  //vid.position(gamma*4, beta*4);
  
}

// accelerometer Data
window.addEventListener('deviceorientation', function(e) 
{
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});