p4();

function p4() {
  let interval = null;
  let i = 0;
  let array = [];

  interval = setInterval(() => {
    array.push(i++);
    if (i === 5) {
      clearInterval(interval);
      console.log(array);
    }
  }, 1000);
}
