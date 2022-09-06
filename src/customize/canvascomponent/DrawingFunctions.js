function location(evt, canvas2) {
    let offsetX, offsetY;
    if (evt.targetTouches) {
      const rect = canvas2.getBoundingClientRect();
      offsetX = Math.round(evt.targetTouches[0].pageX - rect.left);
      offsetY = Math.round(evt.targetTouches[0].pageY - rect.top);
    } else {
      offsetX = evt.nativeEvent.offsetX;
      offsetY = evt.nativeEvent.offsetY;
    }
    return { offsetX, offsetY };
  }
  //-------------------------------------------
  const arry=["A","B","C","D"];
  function clearCanvas(ctx2, width, height) {
    let i, f;
    if (width > height) {
      i = width * 3 * -1;
      f = width * 3;
    } else {
      i = height * 3 * -1;
      f = height * 3;
    }
    ctx2.clearRect(0, 0, i, f);
    ctx2.clearRect(0, 0, f, i);
    ctx2.clearRect(0, 0, i, i);
    ctx2.clearRect(0, 0, f, f);
  }
  //-------------------------------------------
  function circle({ x, y, pI, ctx2, width, height }) {
    const a = Math.pow(x - pI[0].offsetX, 2);
    const b = Math.pow(y - pI[0].offsetY, 2);
    const c = Math.sqrt(a + b);
    const id=[];
    ctx2.clearRect(0, 0, width, height);
    ctx2.beginPath();
    ctx2.display='flex';
    ctx2.alignItems='center';
    ctx2.justifyContent='center';
    ctx2.marginTop='50px';
    ctx2.textBaseline='middle';
    ctx2.font='13px Arial';
ctx2.fillText(`${((c*25.4)/96).toFixed(3)+"MM"}`,pI[0].offsetX,pI[0].offsetY);
  
    ctx2.arc(pI[0].offsetX, pI[0].offsetY, c, 0, 2 * Math.PI);
    ctx2.stroke();
    const an=Math.random().toString(36).substr(2, 9);
    id.push(an)
    console.log(c,"r",ctx2.canvas.style.cursor,"kjnkjh",)
  }
  //-------------------------------------------
  function ellipse({ x, y, pI, ctx2, width, height }) {
    drawEllipse(
      pI[0].offsetX,
      pI[0].offsetY,
      x - pI[0].offsetX,
      y - pI[0].offsetY,
      ctx2,
      width,
      height
    );
  }
  //-------------------------------------------
  function drawEllipse(x, y, w, h, ctx2, width, height) {
    const kappa = 0.5522848,
      ox = (w / 2) * kappa, // control point offset horizontal
      oy = (h / 2) * kappa, // control point offset vertical
      xe = x + w, // x-end
      ye = y + h, // y-end
      xm = x + w / 2, // x-middle
      ym = y + h / 2; // y-middle
  
    clearCanvas(ctx2, width, height);
    ctx2.beginPath();
    ctx2.moveTo(x, ym);
    ctx2.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
    ctx2.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
    ctx2.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
    ctx2.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
    ctx2.stroke();
  }
  //-------------------------------------------
  function rectangle({ x, y, pI, ctx2, width, height }) {
    clearCanvas(ctx2, width, height);
    ctx2.beginPath();
    ctx2.display='flex';
    ctx2.alignItems='center';
    ctx2.justifyContent='center';
    ctx2.marginTop='50px';
    ctx2.textBaseline='middle';
    ctx2.font='30px Arial';

    ctx2.fillText(`${(((x - pI[0].offsetX)*25.4)/96).toFixed(3)}x${(((y - pI[0].offsetY)*25.4)/96).toFixed(3)}`, pI[0].offsetX,  pI[0].offsetY);
  
    ctx2.rect(pI[0].offsetX, pI[0].offsetY, x - pI[0].offsetX, y - pI[0].offsetY);
    // ctx2.rect(pI[0].offsetX, pI[0].offsetY, x=y, y=x);
 
    ctx2.stroke();
    
    console.log( x=y , y=x,"d")
  }
  function square({ x, y, pI, ctx2, width, height }) {
    clearCanvas(ctx2, width, height);
    ctx2.beginPath();
    ctx2.display='flex';
    ctx2.alignItems='center';
    ctx2.justifyContent='center';
    ctx2.marginTop='50px';
    ctx2.textBaseline='middle';
    ctx2.font='auto';
    ctx2.font="30px Arial"
    ctx2.border='1px solid';
    // const alpha=arry[0]
    let x1 = Math.floor((Math.random() * 100) + 1)
    const random = Math.floor(Math.random() * arry.length);
    ctx2.fillText( arry[random]+x1,pI[0].offsetX+100, pI[0].offsetY+100)
// ctx2.fillText(`${(((x - pI[0].offsetX)*25.4)/96).toFixed(3)}x${(((y - pI[0].offsetY)*25.4)/96).toFixed(3)}`,pI[0].offsetX+100, pI[0].offsetY+100);
    ctx2.rect(pI[0].offsetX, pI[0].offsetY, x - pI[0].offsetX, y - pI[0].offsetY);
    // ctx2.rect(pI[0].offsetX, pI[0].offsetY, x=y, y=x);

    ctx2.stroke();
    console.log( pI[0].offsetX, pI[0].offsetY, x - pI[0].offsetX, y - pI[0].offsetY,"d",x,y,width,height)
    const obj={
      id:arry[random]+x1,
      length:x - pI[0].offsetX,
      width:y - pI[0].offsetY
    }
      console.log(ctx2,"ctx2")
   localStorage.setItem("item",JSON.stringify(obj));
  
  }
   function trangle({ x, y, pI, ctx2, width, height }) {
    clearCanvas(ctx2, width, height);
    ctx2.beginPath();
    ctx2.display='flex';
    ctx2.alignItems='center';
    ctx2.justifyContent='center';
    ctx2.marginTop='50px';
    ctx2.textBaseline='middle';
    ctx2.border="20px solid"
    ctx2.font='30px Arial';
    ctx2.reSize='auto';
  
    ctx2.moveTo(pI[0].offsetX,pI[0].offsetY);
ctx2.lineTo(x + pI[0].offsetX/4, y + pI[0].offsetY/4);
ctx2.lineTo(x - pI[0].offsetX/4, y + pI[0].offsetY/4);

ctx2.closePath();




ctx2.stroke();
// ctx2.closePath();

    console.log(x + pI[0].offsetX/4, y + pI[0].offsetY,
x + pI[0].offsetX/4, y + pI[0].offsetY
    
    )
  }
  //-------------------------------------------
  function straightLine({ x, y, pI, ctx2, width, height }) {
    ctx2.clearRect(0, 0, width, height);
    ctx2.beginPath();
    ctx2.quadraticCurveTo(pI[0].offsetX, pI[0].offsetY, x, y);
    ctx2.stroke();
  }
  //-------------------------------------------
  function normal({ x, y, pI, ctx2, width, height }) {
    pI.push({ offsetX: x, offsetY: y });
    ctx2.clearRect(0, 0, width, height);
    ctx2.beginPath();
  
    for (var i = 1; i < pI.length - 2; i++) {
      var c = (pI[i].offsetX + pI[i + 1].offsetX) / 2;
      var d = (pI[i].offsetY + pI[i + 1].offsetY) / 2;
  
      ctx2.quadraticCurveTo(pI[i].offsetX, pI[i].offsetY, c, d);
     
    }
    ctx2.stroke();
  }
  //--------------------------------------------------------------------------
  function cursorCanvas(canvas2, color, tamaño) {
    canvas2.style.cursor = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128'%3E%3Ccircle cx='64' cy='64' r='${
      tamaño === "1" ? 0.5 : (tamaño - 1) / 2
    }' stroke='black' fill='${color}'%3E%3C/circle%3E%3C/svg%3E") 64 64,
    crosshair`;
  }
  
  function cursorFill(canvas2, color) {
    canvas2.style.cursor = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ccircle cx='40' cy='20' r='18' stroke='red' stroke-width='4' fill='white'/%3E%3Ccircle cx='40' cy='20' r='16' stroke='blue' stroke-width='2' fill='${color}'/%3E%3Cpolygon points='0,60 21,27 27,35' style='fill:blue;stroke:red;stroke-width:1' /%3E%3C/svg%3E") 0 60,
    crosshair`;
  }
  //--------------------------------------------------------------------------
  function getColorAtPixel(imageData, x, y) {
    const { width, data } = imageData;
  
    return {
      r: data[4 * (width * y + x) + 0],
      g: data[4 * (width * y + x) + 1],
      b: data[4 * (width * y + x) + 2],
      a: data[4 * (width * y + x) + 3] / 255
    };
  }
  //-------------------------------------------
  function colorMatch(a, b) {
    return a.r === b.r && a.g === b.g && a.b === b.b && a.a === b.a;
  }
  //-------------------------------------------
  function rgbatoObj(rgba) {
    let obj = rgba
      .replace(/\s/g, "")
      .match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i);
    return {
      r: parseFloat(obj[1]),
      g: parseFloat(obj[2]),
      b: parseFloat(obj[3]),
      a: parseFloat(obj[4])
    };
  }
  //-------------------------------------------
  function isSameColor(imageData, x, y, newColor) {
    const color1 = getColorAtPixel(imageData, x, y);
    const color2 = rgbatoObj(newColor);
    return colorMatch(color1, color2);
  }
  //--------------------------------------------------
  function getDropperColor({ evt, drawings, canvas2 }) {
    let dropperColor;
    const { offsetX, offsetY } = location(evt, canvas2);
    const cColor = getColorAtPixel(
      drawings[drawings.length - 1],
      offsetX,
      offsetY
    );
    const boxColor = `rgba(${cColor.r},${cColor.g},${cColor.b},${cColor.a})`;
    dropperColor = boxColor;
    cursorFill(canvas2, boxColor);
    return dropperColor;
  }
  //--------------------------------------------------------------------------
  export {
    getDropperColor,
    cursorFill,
    getColorAtPixel,
    isSameColor,
    location,
    cursorCanvas,
    circle,
    ellipse,
    square,
    rectangle,
    trangle,
    straightLine,
    normal
  };
  