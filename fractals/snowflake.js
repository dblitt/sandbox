var canvas = document.getElementById("snowflakeCanvas");
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

// var pointA = [2000, 200];
var pointB = [400, 2900];
var pointC = [3600, 2900];
// var pointC = [0, 0];
// var pointA = [3000,3000]
// var pointB = calculateMiddleThree([[1000, 2000],[3000,3000]])[0]
// var pointC = calculateMiddleThree([[1000, 2000],[3000,3000]])[2]
// var pointA = calculateMiddleThree([[2000, 300], [400, 2800]])[0]
// var pointB = calculateMiddleThree([[2000, 300], [400, 2800]])[1]
// var pointC = calculateMiddleThree([[2000, 300], [400, 2800]])[2]

var iDistance = Math.sqrt(Math.pow(pointB[0] - pointC[0], 2) + Math.pow(pointB[1] - pointC[1], 2));
var newThing = intersectTwoCircles(pointB[0], pointB[1], iDistance, pointC[0], pointC[1], iDistance);
// console.log(newThing[0]);
var pointA = newThing[0];

var centroid = [(pointA[0] + pointB[0] + pointC[0]) / 3, (pointA[1] + pointB[1] + pointC[1]) / 3];
// var centroid = [(2000 + 400 + 3600) / 3, (300 + 2800 + 2800) / 3];
// console.log(centroid);

// console.log(calculateMiddleThree([[2000, 300], [400, 2800]]));

function reset() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function dots() {
  ctx.fillStyle = "#000000";
  // ctx.fillRect(495, 95, 11, 11);
  ctx.fillRect(pointA[0] - 10, pointA[1] - 10, 22, 22);
  ctx.fillRect(pointB[0] - 10, pointB[1] - 10, 22, 22);
  ctx.fillRect(pointC[0] - 10, pointC[1] - 10, 22, 22);

  // ctx.fillRect(centroid[0] - 10, centroid[1] - 10, 22, 22);

  // ctx.fillRect(calculateMiddleThree([[2000, 300], [400, 2800]])[0][0] - 10, calculateMiddleThree([[2000, 300], [400, 2800]])[0][1] - 10, 22, 22);
  // ctx.fillRect(calculateMiddleThree([[2000, 300], [400, 2800]])[1][0] - 10, calculateMiddleThree([[2000, 300], [400, 2800]])[1][1] - 10, 22, 22);
  // ctx.fillRect(calculateMiddleThree([[2000, 300], [400, 2800]])[2][0] - 10, calculateMiddleThree([[2000, 300], [400, 2800]])[2][1] - 10, 22, 22);

  // ctx.fillRect(calculateMiddleThree([calculateMiddleThree([[2000, 300], [400, 2800]])[0], calculateMiddleThree([[2000, 300], [400, 2800]])[1]])[0][0] - 10, calculateMiddleThree([calculateMiddleThree([[2000, 300], [400, 2800]])[0], calculateMiddleThree([[2000, 300], [400, 2800]])[1]])[0][1] - 10, 22, 22);
  // ctx.fillRect(calculateMiddleThree([calculateMiddleThree([[2000, 300], [400, 2800]])[0], calculateMiddleThree([[2000, 300], [400, 2800]])[1]])[1][0] - 10, calculateMiddleThree([calculateMiddleThree([[2000, 300], [400, 2800]])[0], calculateMiddleThree([[2000, 300], [400, 2800]])[1]])[1][1] - 10, 22, 22);
  // ctx.fillRect(calculateMiddleThree([calculateMiddleThree([[2000, 300], [400, 2800]])[0], calculateMiddleThree([[2000, 300], [400, 2800]])[1]])[2][0] - 10, calculateMiddleThree([calculateMiddleThree([[2000, 300], [400, 2800]])[0], calculateMiddleThree([[2000, 300], [400, 2800]])[1]])[2][1] - 10, 22, 22);

  // ctx.fillRect(calculateMiddleThree([calculateMiddleThree([[2000, 300], [400, 2800]])[2], calculateMiddleThree([[2000, 300], [400, 2800]])[1]])[0][0] - 10, calculateMiddleThree([calculateMiddleThree([[2000, 300], [400, 2800]])[2], calculateMiddleThree([[2000, 300], [400, 2800]])[1]])[0][1] - 10, 22, 22);
  // ctx.fillRect(calculateMiddleThree([calculateMiddleThree([[2000, 300], [400, 2800]])[2], calculateMiddleThree([[2000, 300], [400, 2800]])[1]])[1][0] - 10, calculateMiddleThree([calculateMiddleThree([[2000, 300], [400, 2800]])[2], calculateMiddleThree([[2000, 300], [400, 2800]])[1]])[1][1] - 10, 22, 22);
  // ctx.fillRect(calculateMiddleThree([calculateMiddleThree([[2000, 300], [400, 2800]])[2], calculateMiddleThree([[2000, 300], [400, 2800]])[1]])[2][0] - 10, calculateMiddleThree([calculateMiddleThree([[2000, 300], [400, 2800]])[2], calculateMiddleThree([[2000, 300], [400, 2800]])[1]])[2][1] - 10, 22, 22);

  // ctx.fillStyle = "#FF0000";
  // ctx.fillRect(pointA[0], pointA[1], 1, 1);
  // ctx.fillRect(pointB[0], pointB[1], 1, 1);
  // ctx.fillRect(pointC[0], pointC[1], 1, 1);
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
dots();

// ctx.fillStyle = "#000000";
// ctx.fillRect(45, 495, 11, 11);
// ctx.fillStyle = "#FF0000";
// ctx.fillRect(50, 500, 1, 1);
// drawPixel(500, 100, 255, 0, 0, 255);
// updateCanvas();
// drawPixel(500, 200, 255, 0, 0, 255);
// updateCanvas();

// document.getElementById('startButton').onclick = function() {
//   reset();
//   dots();
//   doThing();
// };
document.getElementById('inputForm').onsubmit = function() {
  reset();
  dots();
  doThing();
};
// document.getElementById('noReset').onclick = function() {
//   doThing();
// };
// document.getElementById('noDots').onclick = function() {
//   reset();
//   doThing();
// }
// document.getElementById('putDots').onclick = function() {
//   dots();
// }
function doThing() {
  var selectMode = document.getElementById('selectMode');
  var num = Number(document.getElementById('nInput').value);
  var lineWidth = Number(document.getElementById('lineWidth').value);
  var mode = selectMode.selectedIndex;
  console.log(mode);
  var numVertices = 3 * Math.pow(4, num);
  // console.log(numVertices);
  var vertices = new Array(numVertices);
  vertices[0] = pointA.slice();
  // vertices = [[2000, 300], [400, 2800], [2000, 2800]];
  // var lowerBound = 0;
  // var upperBound = vertices.length - 1;
  // for (var i = 0; i < num; i++) {
  //
  // }
  var vB =     numVertices / 3;
  var vC = 2 * numVertices / 3;
  vertices[vB] = pointB.slice();
  vertices[vC] = pointC.slice();
  // console.log(vertices);
  var magicNum1 = numVertices / 3;
  if (num > 0) {
    // populate(vertices, num, 0, magicNum1);
    // populate(vertices, num, magicNum1, magicNum1 * 2);
    // populate(vertices, num, magicNum1 * 2, magicNum1 * 3);

    // console.log('1: ' + vertices[magicNum1 * 2]);
    // console.log('2: ' + vertices[0]);
    // console.log('3: ' + vertices[magicNum1]);
    populate(vertices, num, 0, magicNum1, vertices[magicNum1 * 2], mode);
    populate(vertices, num, magicNum1, magicNum1 * 2, vertices[0], mode);
    populate(vertices, num, magicNum1 * 2, magicNum1 * 3, vertices[magicNum1], mode);
  }
  // console.log(vertices);
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  // ctx.moveTo(pointA[0], pointA[1]);
  ctx.moveTo(vertices[0][0], vertices[0][1]);
  for (var i = 0; i < vertices.length; i++) {
    ctx.lineTo(vertices[i][0], vertices[i][1]);
  }
  ctx.lineTo(vertices[0][0], vertices[0][1]);
  ctx.stroke();
};

function populate(vertices, num, lowerBound, upperBound, oppVert, mode) {
  if (num === 1) {
    var calcThing;
    if (upperBound >= vertices.length) {
      calcThing = 0;
    } else {
      calcThing = upperBound;
    }
    var temp = calculateMiddleThree([vertices[lowerBound], vertices[calcThing]], oppVert, mode);
    var midpoint = ( (upperBound - lowerBound) / 2) + lowerBound;
    vertices[midpoint] = temp[1];
    var midpointLower = ( (midpoint - lowerBound) / 2) + lowerBound;
    vertices[midpointLower] = temp[0];
    var midpointUpper = ( (upperBound - midpoint) / 2) + midpoint;
    vertices[midpointUpper] = temp[2];
  } else {
    // begin copied from above
    var calcThing;
    if (upperBound >= vertices.length) {
      calcThing = 0;
    } else {
      calcThing = upperBound;
    }
    var temp = calculateMiddleThree([vertices[lowerBound], vertices[calcThing]], oppVert, mode);
    var midpoint = ( (upperBound - lowerBound) / 2) + lowerBound;
    vertices[midpoint] = temp[1];
    var midpointLower = ( (midpoint - lowerBound) / 2) + lowerBound;
    vertices[midpointLower] = temp[0];
    var midpointUpper = ( (upperBound - midpoint) / 2) + midpoint;
    vertices[midpointUpper] = temp[2];
    // end copied from above

    // now time for the recursive part
    populate(vertices, num - 1, lowerBound, midpointLower, oppVert, mode);
    populate(vertices, num - 1, midpointLower, midpoint, vertices[midpointUpper], mode);
    populate(vertices, num - 1, midpoint, midpointUpper, vertices[midpointLower], mode);
    populate(vertices, num - 1, midpointUpper, upperBound, oppVert, mode);
  }
}

function calculateMiddleThree(endPoints, oppVert, mode) {
  // endpoints are like [[10, 20], [40, 30]]
  var final = [[],[],[]];
  final[2][0] = (endPoints[0][0] * (1 / 3)) + (endPoints[1][0] * (2 / 3));
  final[2][1] = (endPoints[0][1] * (1 / 3)) + (endPoints[1][1] * (2 / 3));
  final[0][0] = (endPoints[0][0] * (2 / 3)) + (endPoints[1][0] * (1 / 3));
  final[0][1] = (endPoints[0][1] * (2 / 3)) + (endPoints[1][1] * (1 / 3));

  var temp = [];
  temp[0] = (endPoints[0][0] * (1 / 2)) + (endPoints[1][0] * (1 / 2));
  temp[1] = (endPoints[0][1] * (1 / 2)) + (endPoints[1][1] * (1 / 2));

  var s = Math.sqrt(Math.pow(final[2][0] - final[0][0], 2) + Math.pow(final[2][1] - final[0][1], 2));
  var a = final[0][0];
  var b = final[0][1];
  var c = final[2][0];
  var d = final[2][1];
  // var t = Math.pow(c, 2) + Math.pow(d, 2) - Math.pow(a, 2) - Math.pow(b, 2);
  // console.log(t);
  // var x = ((Math.pow(2 * d - 2 * b, 2) * 2 * a - 2 * t * (2 * c - 2 * a)) - Math.sqrt(Math.pow((-Math.pow((2 * d - 2 * b), 2) * 2 * a - 2 * t * (2 * c - 2 * a)), 2) - 4 * (Math.pow(2 * d - 2 * b, 2) + Math.pow(2 * c - 2 * a, 2)) * (Math.pow(t, 2) - (Math.pow(s, 2) - Math.pow(a, 2) - Math.pow(b, 2)) * (Math.pow(2 * d - 2 * b, 2))))) / (2 * (Math.pow((2 * d - 2 * b), 2) + Math.pow((2 * c - 2 * a), 2)));
  // console.log(x);
  // console.log(s);
  var newSet = intersectTwoCircles(a, b, s, c, d, s);
  // console.log(newSet);
  // final[1] = newSet[0];
  // var d1 = Math.sqrt(Math.pow(centroid[0] - newSet[0][0], 2) + Math.pow(centroid[1] - newSet[0][1], 2));
  // var d2 = Math.sqrt(Math.pow(centroid[0] - newSet[1][0], 2) + Math.pow(centroid[1] - newSet[1][1], 2));
  // console.log(oppVert);
  var d1 = Math.sqrt(Math.pow(oppVert[0] - newSet[0][0], 2) + Math.pow(oppVert[1] - newSet[0][1], 2));
  var d2 = Math.sqrt(Math.pow(oppVert[0] - newSet[1][0], 2) + Math.pow(oppVert[1] - newSet[1][1], 2));
  // console.log('d1 ' + d1);
  // console.log('d2 ' + d2);
  if (mode === 0) {
    if (d1 > d2) {
      final[1] = newSet[0];
    } else {
      final[1] = newSet[1];
    }
  } else {
    if (d1 > d2) {
      final[1] = newSet[1];
    } else {
      final[1] = newSet[0];
    }
  }

  return final;
}

// function stolen from https://gist.github.com/jupdike/bfe5eb23d1c395d8a0a1a4ddd94882ac
// based on the math here:
// http://math.stackexchange.com/a/1367732
// x1,y1 is the center of the first circle, with radius r1
// x2,y2 is the center of the second ricle, with radius r2
function intersectTwoCircles(x1,y1,r1, x2,y2,r2) {
  var centerdx = x1 - x2;
  var centerdy = y1 - y2;
  var R = Math.sqrt(centerdx * centerdx + centerdy * centerdy);
  if (!(Math.abs(r1 - r2) <= R && R <= r1 + r2)) { // no intersection
    return []; // empty list of results
  }
  // intersection(s) should exist

  var R2 = R*R;
  var R4 = R2*R2;
  var a = (r1*r1 - r2*r2) / (2 * R2);
  var r2r2 = (r1*r1 - r2*r2);
  var c = Math.sqrt(2 * (r1*r1 + r2*r2) / R2 - (r2r2 * r2r2) / R4 - 1);

  var fx = (x1+x2) / 2 + a * (x2 - x1);
  var gx = c * (y2 - y1) / 2;
  var ix1 = fx + gx;
  var ix2 = fx - gx;

  var fy = (y1+y2) / 2 + a * (y2 - y1);
  var gy = c * (x1 - x2) / 2;
  var iy1 = fy + gy;
  var iy2 = fy - gy;

  // note if gy == 0 and gx == 0 then the circles are tangent and there is only one solution
  // but that one solution will just be duplicated as the code is currently written
  return [[ix1, iy1], [ix2, iy2]];
}

function area(x1, y1, x2, y2, x3, y3) {
   return Math.abs((x1*(y2-y3) + x2*(y3-y1)+ x3*(y1-y2))/2.0);
}

/* A function to check whether point P(x, y) lies inside the triangle formed
   by A(x1, y1), B(x2, y2) and C(x3, y3) */
function isInside(x1, y1, x2, y2, x3, y3, x, y)
{
   /* Calculate area of triangle ABC */
   var a = area (x1, y1, x2, y2, x3, y3);

   /* Calculate area of triangle PBC */
   var a1 = area (x, y, x2, y2, x3, y3);

   /* Calculate area of triangle PAC */
   var a2 = area (x1, y1, x, y, x3, y3);

   /* Calculate area of triangle PAB */
   var a3 = area (x1, y1, x2, y2, x, y);

   /* Check if sum of A1, A2 and A3 is same as A */
   return (a == a1 + a2 + a3);
}
