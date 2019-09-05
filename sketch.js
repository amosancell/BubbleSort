var values = [];
var m=0;
var n=0;
function setup() {
  createCanvas(800, 500);
  for(var i=0; i < width; i++) {
    values.push(random(height))
  }


}

function draw() {
  background(0);
  for(var i=0; i < values.length; i++) {
    stroke(255);
    line(i,height,i,height-values[i]);
  }
  a = values[n];
  b = values[n+1]
  if(a > b) {
    swap(values,n,n+1);
  }
  if(m < values.length) {
    n++;
    if(n >= values.length - m - 1) {
      n = 0;
      m++;
    }
  }
  else {
    print('Finished')
    noLoop();
  }
}

function swap(values,i1,i2) {
  let temp = values[i1];
  values[i1] = values[i2];
  values[i2] = temp;
}
