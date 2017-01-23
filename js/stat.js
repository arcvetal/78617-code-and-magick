'use strict';

window.renderStatistics = function (ctx, names, times) {

  var drawRect = function (x, y, widthRect, heightRect, fillColor, strokeRect, strokeColor) {
    if (strokeRect) {
      ctx.strokeStyle = strokeColor || '#000';
      ctx.strokeRect(x, y, widthRect, heightRect);
    }
    ctx.fillStyle = fillColor || '#000';
    ctx.fillRect(x, y, widthRect, heightRect);
  };

  var chooseColor = function () {
    return 'rgba(0, 0, ' + (Math.random() * 255).toFixed(0) + ', ' + (Math.random() * 0.5).toFixed(1) + ')';
  };

  var drawHisto = function (histox, columnindent, y, width) {
    ctx.fillRect(histox + columnindent * i, y, width, -height);
  };

  var moveText = function (x, y) {
    ctx.fillStyle = '#000';
    ctx.fillText(name, x + columnIndent * i, y);
    ctx.fillText(time.toFixed(0), x + columnIndent * i, y - 20 - height);
  };

  drawRect(120, 30, 420, 270, 'rgba(0, 0, 0, 0.7)');
  drawRect(100, 10, 420, 270, 'rgba(256, 256, 256, 1.0)', true);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 80);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histoHeight = 150;
  var histoX = 130;
  var step = histoHeight / max;
  var columnIndent = 90;

  for (i = 0; i < times.length; i++) {
    var name = names[i];
    time = times[i];
    var height = step * time;

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = chooseColor();
    }

    drawHisto(130, 90, 255, 40);
    moveText(130, 270);


  }
};

var canvas = document.querySelector('canvas');
renderStatistics(canvas.getContext('2d'), ['Иван', 'Игнат', 'Вы'], [20.32, 40.15, 4.28]);
