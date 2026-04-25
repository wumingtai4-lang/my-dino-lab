const canvas = document.getElementById("game-canvas");

if (canvas instanceof HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");

  if (ctx) {
    drawPlaceholderScene(ctx, canvas);
  } else {
    console.error("无法获取 2D 画布上下文。");
  }
} else {
  console.error("未找到游戏画布元素。");
}

function drawPlaceholderScene(ctx, canvas) {
  const { width, height } = canvas;

  ctx.clearRect(0, 0, width, height);

  const sky = ctx.createLinearGradient(0, 0, 0, height);
  sky.addColorStop(0, "#a9dcff");
  sky.addColorStop(1, "#f4fbff");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "#ffffff";
  ctx.globalAlpha = 0.75;
  ctx.beginPath();
  ctx.arc(130, 90, 28, 0, Math.PI * 2);
  ctx.arc(160, 78, 22, 0, Math.PI * 2);
  ctx.arc(192, 92, 26, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  ctx.fillStyle = "#8bcf7b";
  ctx.fillRect(0, height - 64, width, 64);

  ctx.fillStyle = "#4f8f46";
  ctx.fillRect(0, height - 28, width, 28);

  ctx.fillStyle = "#1f2a44";
  ctx.font = "bold 28px Arial";
  ctx.fillText("我的跑酷练习", 32, 54);

  ctx.fillStyle = "#42506b";
  ctx.font = "18px Arial";
  ctx.fillText("后续可在 game.js 中添加角色、障碍物、输入和游戏循环。", 32, 88);

  ctx.strokeStyle = "#4c6ef5";
  ctx.lineWidth = 3;
  ctx.setLineDash([10, 10]);
  ctx.beginPath();
  ctx.moveTo(32, height - 90);
  ctx.lineTo(width - 32, height - 90);
  ctx.stroke();
  ctx.setLineDash([]);
}
