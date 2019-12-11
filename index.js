const array = ["Lisa", "Kaitlin", "Jan"];

function writeCards(array, event) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
  }
}

writeCards(); 



function countDown(integer) {
  while (integer >= 0) {
    console.log(`${integer}`);
    integer -- 1; 
  }
}

countDown(); 