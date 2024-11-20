function writeCards(arr, event) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const msg = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`;
    newArr.push(msg);
  }

  return newArr;
}

function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}
