//this variable will hold our shader object
let theShader;

function preload(){
  theShader = loadShader('uniforms.vert', 'uniforms.frag');
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(710, 400, WEBGL);
  noStroke();
}

function draw() {  
  // shader() sets the active shader with our shader
  shader(theShader);
  
  // lets send the resolution, mouse, and time to our shader
  // before sending mouse + time we modify the data so it's more easily usable by the shader
  theShader.setUniform('resolution', [width, height]);
  theShader.setUniform('mouse', map(mouseX, 0, width, 0, 7));
  theShader.setUniform('time', frameCount * 0.01);
  
  
  // rect gives us some geometry on the screen
  rect(0,0,width, height);
  console.log("theShader", theShader)
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}