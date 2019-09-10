var values = [];
var numRects = 20;
var rectWidth;
var m = 1;
var n = 0;
var val;
var sorting = false;
function setup() {
  createCanvas(400,400);
  frameRate(5);
  rectWidth = width / numRects;
  for(let i=0; i < numRects; i++) {
    values.push(random(height));
  }
  val = values[m];
}

function draw() {
  background(100);
  for(let i=0; i < values.length; i++) {
    if(i == m+1) {
      fill(color(0,255,0));
    }
    else if(i == n) {
      fill(color(255,0,0));
    }
    else {
      fill(color(255,255,255));
    }
    rect(i*rectWidth, height - values[i], rectWidth, values[i]);
  }
  if(sorting) {
    // insertion sort
    if(m < values.length) {
      if(val < values[n]) {
        values[n+1] = values[n];
        n--;
      } else {
        values[n+1] = val;
        m++;
        n = m - 1;
        val = values[m];
      }
    } else {
      noLoop();
    }
    /* works but is too fast. Want to manually iterate the while loop (trying that
       above)*/
    /*if(m < values.length) {
      val = values[m];
      n = m - 1;
      while(val < values[n]) {
        values[n+1] = values[n];
        n--;
      }
      values[n+1] = val;
      m++;
    } else {
      noLoop();
      console.log('Finished');
    }*/
  }
}


function insertionSort(values) {
  for(let i=1; i < values.length; i++) {
    val = values[i];
    let j = i-1;
    while(val < values[j]) {
      values[j+1] = values[j];
      j--;
    }
    values[j+1] = val;
  }
}

function swap(arr, i1, i2) {
  temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}

function startInsertion() {
  sorting = true;
}
function pauseInsertion() {
  sorting = false;
}
