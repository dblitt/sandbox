var canvas = document.getElementById("chaosGame");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var ctx = canvas.getContext("2d");
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// reset();
// var canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

// // That's how you define the value of a pixel //
// function drawPixel (x, y, r, g, b, a) {
//     var index = (x + y * canvasWidth) * 4;
//
//     canvasData.data[index + 0] = r;
//     canvasData.data[index + 1] = g;
//     canvasData.data[index + 2] = b;
//     canvasData.data[index + 3] = a;
// }
//
// // That's how you update the canvas, so that your //
// // modification are taken in consideration //
// function updateCanvas() {
//     ctx.putImageData(canvasData, 0, 0);
// }

// drawPixel(1, 1, 255, 0, 0, 255);
// drawPixel(1, 2, 255, 0, 0, 255);
// drawPixel(1, 3, 255, 0, 0, 255);

let pointA = [2800, 300];
let pointB = [400, 2800];
let pointC = [3500, 3500];

function reset() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#000000";
  // ctx.fillRect(495, 95, 11, 11);
  ctx.fillRect(pointA[0] - 10, pointA[1] - 10, 22, 22);
  ctx.fillRect(pointB[0] - 10, pointB[1] - 10, 22, 22);
  ctx.fillRect(pointC[0] - 10, pointC[1] - 10, 22, 22);
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(pointA[0], pointA[1], 1, 1);
  ctx.fillRect(pointB[0], pointB[1], 1, 1);
  ctx.fillRect(pointC[0], pointC[1], 1, 1);
}

// ctx.fillStyle = "#000000";
// // ctx.fillRect(495, 95, 11, 11);
// ctx.fillRect(pointA[0] - 10, pointA[1] - 5, 11, 11);
// ctx.fillRect(pointB[0] - 5, pointB[1] - 5, 11, 11);
// ctx.fillRect(pointC[0] - 5, pointC[1] - 5, 11, 11);
// ctx.fillStyle = "#FF0000";
// ctx.fillRect(pointA[0], pointA[1], 1, 1);
// ctx.fillRect(pointB[0], pointB[1], 1, 1);
// ctx.fillRect(pointC[0], pointC[1], 1, 1);

reset();

// ctx.fillStyle = "#000000";
// ctx.fillRect(45, 495, 11, 11);
// ctx.fillStyle = "#FF0000";
// ctx.fillRect(50, 500, 1, 1);
// drawPixel(500, 100, 255, 0, 0, 255);
// updateCanvas();
// drawPixel(500, 200, 255, 0, 0, 255);
// updateCanvas();

document.getElementById('startButton').onclick = function() {
  reset();
  doThing();
};
document.getElementById('noReset').onclick = function() {
  doThing();
};
function doThing() {
  let selectMode = document.getElementById('selectMode');
  let mode = selectMode.selectedIndex;
  let num = Number(document.getElementById('numPoints').value);
  let fraction = Number(document.getElementById('fractionInput').value);
  let pointSize = Number(document.getElementById('pointSize').value);
  let color1 = document.getElementById('color1').value;
  let color2 = document.getElementById('color2').value;
  let color3 = document.getElementById('color3').value;
  // console.log(num);
  let temp = getRandomInt(0, 2);
  let cPlot = [];
  switch (temp) {
    case 0:
      cPlot = pointA.slice();
      break;
    case 1:
      cPlot = pointB.slice();
      break;
    case 2:
      cPlot = pointC.slice();
  }
  // console.log(cPlot)
  let nPlot = [];
  let color = '';
  for (let i = 0; i < num; i++) {
    // console.log(pointA)
    // console.log(pointB);
    // console.log(pointC);
    temp = getRandomInt(0, 2);
    switch (temp) {
      case 0:
        nPlot = pointA.slice();
        // color = '#FF0000';
        color = color1;
        // console.log('A')
        break;
      case 1:
        nPlot = pointB.slice();
        // color = '#228B22';
        color = color2;
        // console.log('B')
        break;
      case 2:
        nPlot = pointC.slice();
        // color = '#0000FF';
        color = color3;
        // console.log('C')
    }
    // console.log(nPlot)
    // cPlot[0] = (cPlot[0] + nPlot[0]) / 2;
    // cPlot[1] = (cPlot[1] + nPlot[1]) / 2;
    if (mode === 0) {
      cPlot[0] = (cPlot[0] * (1 / fraction)) + (nPlot[0] * ((fraction - 1) / fraction))
      cPlot[1] = (cPlot[1] * (1 / fraction)) + (nPlot[1] * ((fraction - 1) / fraction))
    } else {
      cPlot[0] = (nPlot[0] * (1 / fraction)) + (cPlot[0] * ((fraction - 1) / fraction))
      cPlot[1] = (nPlot[1] * (1 / fraction)) + (cPlot[1] * ((fraction - 1) / fraction))
    }

    // console.log(cPlot)
    // console.log(color)
    ctx.fillStyle = color;
    ctx.fillRect(cPlot[0], cPlot[1], pointSize, pointSize);
  }
};
