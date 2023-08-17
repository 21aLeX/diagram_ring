import React, { useEffect } from 'react';
import generateData from './generateData';
import { addLegend, drawPieSlice } from './utils';

// рендер диаграммы
const render = (data, colors, canvas) => {
  // Очистка холста
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  Piechart(canvas, ctx, data, colors);
}

const handlerClick = (colors, canvas) => {
  const data = generateData();
  render(data, colors, canvas);
}


const Piechart = function (canvas, ctx, data, colors) {
  const options = { data };
  let total_value = 0;
  let color_index = 0;
  let val;
  for (const categ in options.data) {
    val = options.data[categ].value;
    total_value += val;
  }
  let start_angle = 0;
  for (const categ in options.data) {
    val = options.data[categ].value;
    let slice_angle = 2 * Math.PI * val / total_value;
    drawPieSlice(
      ctx,
      canvas.width / 2,
      canvas.height / 2,
      Math.min(canvas.width / 2, canvas.height / options.data[categ].rad),
      start_angle,
      start_angle + slice_angle,
      colors[color_index]
    );
    start_angle += slice_angle;
    color_index++;
  }
  // создание круга, для эффекта полости диаграммы
  drawPieSlice(
    ctx,
    canvas.width / 2,
    canvas.height / 2,
    0.1 * Math.min(canvas.width / 2, canvas.height / 2),
    0,
    2 * Math.PI,
    "#ffffff"
  );
  addLegend(colors, options)
}


function CircleChart() {
  //заполнение начальных данных
  let data = generateData();
  const colors = ["#EB5757", "#F2C94C", "#219653", "#56CCF2", "#2F80ED", "#9B51E0", "#6FCF97", "#F2994A"];

  useEffect(() => {
    const canvas = document.querySelector('#canvas');
    canvas.addEventListener("click", () => handlerClick(colors, canvas));
    render(data, colors, canvas);
  }, []);




  return (
    <>
      <canvas id="canvas" width="300" height="300"></canvas>
      <div id="myLegend"></div>
    </>
  )
}

export default CircleChart;

