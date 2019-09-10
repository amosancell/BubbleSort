var values = [];
var m=0;
var n=0;
var numSwaps = 0;
var numRects = 20;
var rectWidth;
var sorting = false;
var startButtonSort;
function setup() {
  createCanvas(400, 300);
  /*startBubbleSort = createButton('Start Bubble Sort');
  startBubbleSort.position(19,19);
  startBubbleSort.mousePressed(startBub);*/
  rectWidth = width / numRects;
  for(var i=0; i < numRects; i++) {
    values.push(random(height))
  }
}

function draw() {
  background(0);
  for(var i=0; i < values.length; i++) {
    stroke(0);
    // normal orientation
    if(i == n) {
      fill(color(255,0,0));
    }
    else {
      fill(255);
    }
    rect(i*rectWidth,height-values[i],rectWidth,values[i]);
    //hanging
    //rect(i*rectWidth,0,rectWidth,values[i]);
  }
  // Bubble sort
  //for(var k=0; k < 100; k++) {
  if(sorting) {
    a = values[n];
    b = values[n+1]
    if(a > b) {
      swap(values,n,n+1);
      numSwaps++;
    }
    if(m < values.length) {
      n++;
      if(n >= values.length - m - 1) {
        n = 0;
        m++;
      }
    }
    else {
      sorting = false;
    }
  }
  else {
    //noLoop();
    textSize(30);
    fill(color(255,0,0));
    text('Number of Swaps: ' + str(numSwaps), 30, 40)
  }
  //}

}

function swap(values,i1,i2) {
  let temp = values[i1];
  values[i1] = values[i2];
  values[i2] = temp;
}

function startBub() {
  sorting = true;
}
function pauseBub() {
  sorting = false;
}
