
// добавление легенды
const addLegend = (colors, options) => {
  let color_index = 0;
  let legendHTML = "";
  for (const categ in options.data) {
    legendHTML += "<div><span style='display:inline-block;width:20px;background-color:" + colors[color_index++] + ";'>&nbsp;</span> " + categ + "</div>";
  }
  document.querySelector('#myLegend').innerHTML = legendHTML;
}


// создание кусочка диаграммы
const drawPieSlice = (ctx, centerX, centerY, radius, startAngle, endAngle, color) => {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.closePath();
  ctx.fill();
}

export { addLegend, drawPieSlice };