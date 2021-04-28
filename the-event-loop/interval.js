let count = 3;
let timerId = null;

const countdown = () => {
  if (count <= 3 && count > 0) {
    console.log(count);
  } else if (count === 0) {
    console.log('blast off!');
    clearInterval(timerId);
  }
  count--;
};

timerId = setInterval(countdown, 3000);
