int PIXEL_SIZE = 8;
int SQUARES_PER_FRAME = 100;
//color[] COLORS = [color(255,255,255), color(41,41,41), color(137,137,137), color(0,0,0), color(226,226,226)];
color[] COLORS = [color(255,255,255), color(255,240,240), color(240,255,255), color(255,255,240), color(240,240,240)];
//color[] COLORS = [color(1,0,0), color(255,59,139), color(41,232,255)];

void setup() {
  frameRate(1);
  noStroke();
  resizeSketch(window.innerWidth, window.innerHeight); //, PIXEL_SIZE);

  /*
  size(window.innerWidth, 56); //, PIXEL_SIZE);
  fill(color(0,0,0));
  rect(0,0,width,height);
  */
}

void draw() {
  for(int i=0; i < SQUARES_PER_FRAME; i++) {
    fill(COLORS[round(random(0,COLORS.length-1))]);
    int x = round(random(0,width)/PIXEL_SIZE) * PIXEL_SIZE;
    int y = round(random(0,height)/PIXEL_SIZE) * PIXEL_SIZE;
    rect(x,y,PIXEL_SIZE,PIXEL_SIZE); 
  }
}


void resizeSketch(int w, int h) {
  size(w, h);
  for(int i=0; i < width; i+=PIXEL_SIZE) {
    for(int j=0; j < height; j+=PIXEL_SIZE) {
      fill(COLORS[round(random(0,COLORS.length-1))]);
      rect(i,j,PIXEL_SIZE,PIXEL_SIZE); 
    }
  }
  draw();
}