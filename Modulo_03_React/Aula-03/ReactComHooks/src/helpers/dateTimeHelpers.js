const letPad = (value, count = 2, char = '0') => {
  let newValue = value.toString().trim();

  if (newValue.length < count) {
    for (let index = 0; index < count - newValue.length; index++) {
      newValue = char + newValue;
    }
  }

  return newValue;
};

const getNewTimestamp = () => {
  const now = new Date();
  let result = '';
  result += letPad(now.getDate());
  result += '/';
  result += letPad(now.getMonth() + 1);
  result += '/';
  result += now.getFullYear();
  result += ' ';
  result += letPad(now.getHours());
  result += ':';
  result += letPad(now.getMinutes());
  result += ':';
  result += letPad(now.getSeconds());
  result += ':';
  result += letPad(now.getMilliseconds(), 3);
  return result;
};

export { getNewTimestamp };
