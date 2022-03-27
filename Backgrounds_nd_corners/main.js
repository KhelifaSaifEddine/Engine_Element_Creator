function drawShapeBefore1(ctx, xoff, yoff) {
  ctx.beginPath();
  ctx.moveTo(270 + xoff, 0 + yoff);
  ctx.bezierCurveTo(291 + xoff, 98 + yoff, 233 + xoff, 120 + yoff, 212 + xoff, 150 + yoff);
  ctx.bezierCurveTo(400 + xoff ,350 + yoff, 400 + xoff, 359 + yoff, 436 + xoff, 500 + yoff);
  ctx.stroke();
}
function drawShapeBefore(ctx, xoff, yoff) {
  ctx.beginPath();
  ctx.moveTo(150 + xoff, 49 + yoff);
  ctx.bezierCurveTo(300 + xoff, 108 + yoff, 327 + xoff, 150 + yoff, 436 + xoff, 250 + yoff);
  ctx.stroke();
}
function drawShapeAfter(ctx, xoff, yoff) {
  ctx.beginPath();
  ctx.moveTo(320 + xoff, 49 + yoff);
  ctx.bezierCurveTo(280 + xoff, 50 + yoff, 120 + xoff, 150 + yoff, 40 + xoff, 300 + yoff);
  ctx.stroke();
}
function drawShapeAfter1(ctx, xoff, yoff) {
  ctx.beginPath();
  ctx.moveTo(200 + xoff, 0 + yoff);
  ctx.bezierCurveTo(215 + xoff, 92 + yoff, 233 + xoff, 110 + yoff, 277 + xoff, 150 + yoff);
  ctx.bezierCurveTo(250 + xoff, 180 + yoff, 94 + xoff, 359 + yoff, 80 + xoff, 424 + yoff);
  ctx.stroke();

}











///////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////


 function create_corner_right_top(){
  const canvas = document.querySelector(".canvas0");
  const ctx = canvas.getContext("2d");

  let pos_x = 1300
                //x0//y0//r0///x1//y1//r1//
  var grd = ctx.createRadialGradient(pos_x, 50, 5, pos_x+15, 60, 150);
  grd.addColorStop(0, "#febe7c");
  grd.addColorStop(1, "#9c6e3f");
  ctx.strokeStyle = grd
  ctx.lineWidth = 10
  ctx.scale(0.2,0.2)

  drawShapeBefore(ctx,1108,-40)
  drawShapeBefore1(ctx,1108,-40)
}

 function create_corner_left_top(){
  const canvas1 = document.querySelector(".canvas1");
  const ctx1 = canvas1.getContext("2d");
  var grd1 = ctx1.createRadialGradient(75, 50, 5, 90, 60, 100);
  grd1.addColorStop(0, "#febe7c");
  grd1.addColorStop(1, "#9c6e3f");
  ctx1.strokeStyle = grd1
  ctx1.lineWidth = 10
  ctx1.scale(0.2,0.2)
  drawShapeAfter(ctx1,-90,-40)
  drawShapeAfter1(ctx1,-100,-40)
}

 function create_corner_left_bottom(){
  const canvas2 = document.querySelector(".canvas2");
  const ctx2 = canvas2.getContext("2d");
  
  var grd2 = ctx2.createRadialGradient(75, 50, 5, 90, 60, 100);
  grd2.addColorStop(0, "#febe7c");
  grd2.addColorStop(1, "#9c6e3f");
  ctx2.strokeStyle = grd2
  ctx2.lineWidth = 10
  ctx2.scale(0.2,0.2)
  drawShapeAfter(ctx2,-90,-40)
  
  drawShapeAfter1(ctx2,-100,-40)
}
 function create_corner_right_bottom(){
  const canvas3 = document.querySelector(".canvas3");
  const ctx3 = canvas3.getContext("2d");
  

  let pos_x = 1300
             //x0//y0//r0///x1//y1//r1//
  var grd = ctx3.createRadialGradient(pos_x, 50, 5, pos_x+15, 60, 150);
  grd.addColorStop(0, "#febe7c");
  grd.addColorStop(1, "#9c6e3f");
  ctx3.strokeStyle = grd
  ctx3.lineWidth = 10
  ctx3.scale(0.2,0.2)

  drawShapeBefore(ctx3,1108,-40)
  drawShapeBefore1(ctx3,1108,-40)
  
}

create_corner_left_top()
create_corner_right_top()

create_corner_left_bottom()
create_corner_right_bottom()
