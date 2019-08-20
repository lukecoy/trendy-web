// Returns a closure function that appends records
// to the canvas at the appropriate positioning.
// We treat the canvas as an "array" of album covers.
// appending a new "element" album cover each time
// the closured function is called.
window.createCanvasArray = function(canvasElement, canvasElementLength, canvasLength) {
  var ctx = canvasElement.getContext('2d');
  var xPointCounter = 0;
  var yPointCounter = 0;

  // To start, make a square border around the entire canvas
  ctx.strokeRect(0, 0, canvasLength, canvasLength);

  return function(imgSrc) {
    // If we're approaching out-of-bounds in all directions, no-op
    if (xPointCounter + canvasElementLength > canvasLength &&
        yPointCounter + canvasElementLength > canvasLength) return;

    var img = new Image();

    img.onload = function() {
      ctx.drawImage(img, xPointCounter, yPointCounter, canvasElementLength, canvasElementLength);
      ctx.strokeRect(xPointCounter, yPointCounter, canvasElementLength, canvasElementLength);

      xPointCounter += canvasElementLength;

      // If incrementing the horizontal direction will make the album appear
      // outside the canvas, then lets reset the xPointCounter to 0, and move
      // to the new vertical row
      if (xPointCounter >= canvasLength) {
        xPointCounter = 0;
        yPointCounter += canvasElementLength;
      }
    }

    img.src = imgSrc;
  };
};
