const frame = document.body;
frame.addEventListener('mousemove', (position) => {
  const x = position.offsetX;
  const y = position.offsetY;
  const hearts = document.createElement('span');
  const h = Math.random() * 100;
  hearts.style.width = h + 'px';
  hearts.style.height = h + 'px';
  hearts.style.left = x + 'px';
  hearts.style.top = y + 'px';
  frame.appendChild(hearts);
  setInterval(() => {
    frame.removeChild(hearts);
  }, 1000);
});
