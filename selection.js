var values = [];
var numRects = 20;
var rectWidth;
var m = 0;
var n = 1;
var minVal;
var minInd = 0;
var sorting = false;
function setup() {
  createCanvas(400,400);
  rectWidth = width / numRects;
  for(let i=0; i < numRects; i++) {
    values.push(random(height));
  }
  minVal = values[0];
}

function draw() {
  background(100);
  for(let i=0; i < values.length; i++) {
    if(i == m) {
      fill(color(0,255,0));
    }
    else if(i == n) {
      fill(color(255,0,0));
    }
    else if (i == minInd) {
      fill(color(255,255,0));
    }
    else {
      fill(color(255,255,255));
    }
    rect(i*rectWidth,height-values[i],rectWidth,values[i]);
  }
  if(sorting) {
    console.log(m,n, minInd);
    if(m < values.length) {
      if(n < values.length) {
        if(minVal > values[n]) {
          minVal = values[n];
          minInd = n;
        }
        n++;
      }
      else {
        temp = values[m];
        values[m] = minVal;
        values[minInd] = temp;
        m++;
        n = m+1;
        minInd = m;
        minVal = values[m];
      }

    }
    else {
      console.log('Finished');
      noLoop();
    }
  }
}

function selectionSort(arr) {
  for(let i=0; i < arr.length; i++) {
    minVal = arr[i];
    minInd = i;
    for(let j=i+1; j < arr.length; j++) {
      if(arr[j] < minVal) {
        minVal = arr[j];
        minInd = j;
      }
    }
    temp = arr[i];
    arr[i] = minVal;
    arr[minInd] = temp;
  }
}

function pauseSelect() {
  sorting = false;
}
function startSelect() {
  sorting = true;
}
