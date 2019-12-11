const array = ["Lisa", "Kaitlin", "Jan"];

function writeCards(array, event) {
  let thankYouCards = []
  for (let i = 0; i < array.length; i++) {
    console.log(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
  }
}

writeCards(array, birthday); 



function countDown(integer) {
  while (integer >= 0) {
    console.log(`${integer}`);
    integer--; 
  }
}

countDown(10); 