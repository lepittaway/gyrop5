var alpha, beta, gamma;
var xpos, ypos;

var moveX;

var vid, div1, div2;
var vidWidth, vidHeight;

var cgamma, cbeta;

function setup()  {
  // set canvas size
  
  createCanvas(windowWidth, windowHeight);
  
  vid = createVideo('assets/videos/sphere.mp4');
  div1 = createDiv('');
  div2 = createDiv('');
  
  
  
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
  
  vidHeight = windowHeight * 2;
  vidWidth = vidHeight * 1.5;
  
  
  // display variables
  
  cgamma = constrain(gamma, -88, 88);
  cbeta = constrain(beta, 0, 178);
  
  
  vid.position(cgamma*4 - vidWidth/2 , cbeta*4 - vidHeight/2);
  div1.position(10, 10);
  div1.html('beta -- ' + beta);
  div2.position(10, 30);
  div2.html('gamma -- ' + gamma);
  //vid.size(vidWidth, vidHeight * 0.666666666666);
  vid.size(vidWidth, vidWidth * 0.666666666666);
  
  /*fill(100);
  noStroke();
  fill(255);
  text("alpha: " + alpha, 25, 25);
  text("beta: " + beta, 25, 50);
  text("gamma: " + gamma, 25, 75);
  
  push();
  //translate(200, 200);
  
  fill(0, 0, 255);
  rect(gamma*4, beta*4, 80, 80);
  fill(255);
  rect(gamma*4, beta*4, 80, 5);
  pop();*/
  
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
// accelerometer Data
window.addEventListener('deviceorientation', function(e) 
{
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});