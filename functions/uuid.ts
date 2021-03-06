import md5 from 'md5';
const uuid = (): string => {
  let canvas = document.createElement('canvas');
  canvas.width = 2000;
  canvas.height = 200;
  canvas.style.display = 'inline';
  let context = canvas.getContext('2d');
  if (!context) {
    return '';
  }
  context.rect(0, 0, 10, 10);
  context.rect(2, 2, 6, 6);
  context.textBaseline = 'alphabetic';
  context.fillStyle = '#f60';
  context.fillRect(125, 1, 62, 20);
  context.fillStyle = '#069';
  context.font = '11pt Arial';
  context.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 2, 15);
  context.fillStyle = 'rgba(102, 204, 0, 0.2)';
  context.font = '18pt Arial';
  context.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 4, 45);
  context.globalCompositeOperation = 'multiply';
  context.fillStyle = 'rgb(255,0,255)';
  context.beginPath();
  context.arc(50, 50, 50, 0, Math.PI * 2, true);
  context.closePath();
  context.fill();
  context.fillStyle = 'rgb(0,255,255)';
  context.beginPath();
  context.arc(100, 50, 50, 0, Math.PI * 2, true);
  context.closePath();
  context.fill();
  context.fillStyle = 'rgb(255,255,0)';
  context.beginPath();
  context.arc(75, 100, 50, 0, Math.PI * 2, true);
  context.closePath();
  context.fill();
  context.fillStyle = 'rgb(255,0,255)';
  context.arc(75, 75, 75, 0, Math.PI * 2, true);
  context.arc(75, 75, 25, 0, Math.PI * 2, true);
  context.fill('evenodd');
  if (canvas.toDataURL) {
    let base64 = canvas.toDataURL();
    return md5(base64);
  }
  return '';
};
export default uuid;
