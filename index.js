const array = ["Lisa", "Kaitlin", "Jan"];

function writeCards(array, event) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Thank you, ${array[i]}, for the wonderful birthday gift!`);
  }
}

writeCards(); 



function countDown(integer) {
  while (integer >= 0) {
    console.log(`${integer}`);
    integer--; 
  }
}

countDown(); 