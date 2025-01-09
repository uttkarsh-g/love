const frame = document.body;

frame.addEventListener('mousemove', (position) => {
  move(position);
});

frame.addEventListener('touchmove', (position) => {
  screenMove(position);
});

function move(position) {
  const x = position.offsetX;

  const y = position.offsetY;

  heart(x, y);
}
function screenMove(position) {
  const touch = position.touches[0];

  heart(touch.clientX, touch.clientY);
}
function heart(x, y) {
  const hearts = document.createElement('span');

  const h = Math.random() * 100;

  hearts.style.width = h + 'px';

  hearts.style.height = h + 'px';

  hearts.style.left = x + 'px';

  hearts.style.top = y + 'px';

  frame.appendChild(hearts);

  setInterval(() => {
    hearts.remove();
  }, 1000);
}
