function writeCards(names) {
  let thankYouMessages = [];
  for (let name of names) {
    thankYouMessages.push(
      `Thank you, ${name}, for the wonderful surprise gift!`
    );
  }
  return thankYouMessages;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
