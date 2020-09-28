window.addEventListener('load', () => {
  const divTimer = document.querySelector('#timer');
  let count = 0;
  const interval = setInterval(() => {
    divTimer.textContent = ++count;
    if (count === 10) {
      this.clearInterval(interval);
      return;
    }
    if (count % 5 === 0) {
      setTimeout(() => {
        divTimer.textContent = `${count},5`;
      }, 500);
    }
  }, 1000);
});
