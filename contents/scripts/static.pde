colorMode(HSB, 360, 100.0, 100.0, 1.0);

int PIXEL_SIZE = 80;
int SQUARES_PER_FRAME = 2;
int COLOR_ROTATION_AMT = 2;

color[] COLORS = [
    color(0,10,100), // primary 1
    color(180,10,100), // primary 2
    color(0,0,100), // white
    color(0,0,94) // black
];

ArrayList gridPixels;


void setup() {
  gridPixels = new ArrayList();
  frameRate(1);
  noStroke();
  resizeSketch(window.innerWidth, window.innerHeight); //, PIXEL_SIZE);

  /*
  size(window.innerWidth, 56); //, PIXEL_SIZE);
  fill(color(0,0,0));
  rect(0,0,width,height);
  */
}

void rotateColors() {
    float hue1 = hue(COLORS[0]);
    float hue2 = hue(COLORS[1]);
    COLORS[0] = color(hue1 + COLOR_ROTATION_AMT, saturation(COLORS[0]), brightness(COLORS[0]));
    COLORS[1] = color(hue2 + COLOR_ROTATION_AMT, saturation(COLORS[1]), brightness(COLORS[1]));
}

void draw() {
  background(0,0);
    /*
  for(int i=0; i < SQUARES_PER_FRAME; i++) {
    fill(COLORS[round(random(0,COLORS.length-1))]);
    int x = round(random(0,width)/PIXEL_SIZE) * PIXEL_SIZE;
    int y = round(random(0,height)/PIXEL_SIZE) * PIXEL_SIZE;
    rect(x,y,PIXEL_SIZE,PIXEL_SIZE); 
  }
  */
  
  for(int i=0; i < gridPixels.size(); i++) {
      int colorIdx = gridPixels.get(i);
      fill(COLORS[colorIdx]);
      int x = (int) (i % ceil(width/PIXEL_SIZE));
      int y = (int) (i / ceil(width/PIXEL_SIZE));
      rect(x*PIXEL_SIZE, y*PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE); 
  }
  
  rotateColors();
  updateGrid();
}


void updateGrid() {
  for(int i=0; i < SQUARES_PER_FRAME; i++) {
    int colorIdx = round(random(0,COLORS.length-1));
    int gridIdx = round(random(0,gridPixels.size()-1));
    gridPixels.set(gridIdx, colorIdx);
  }
}

void resizeSketch(int w, int h) {
  size(w, h);
  int screenSize = ceil(w/PIXEL_SIZE) * ceil(h/PIXEL_SIZE);


  // TODO: have this account for growth/shrinkags  
  gridPixels.clear();
  for(int i=0; i < screenSize; i++) {
      int colorIdx = round(random(0,COLORS.length-1));
      gridPixels.add(colorIdx);
  }
}