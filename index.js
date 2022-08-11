// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// };
// const gifts = ["teddy bear", "drone", "doll"];
// function wrapGifts (gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log (`Wrapped ${gifts[i]} and added a bow!`)
//     }
//     return wrapGifts
// }
// wrapGifts (gifts)


function writeCards(array, name) {
    let message = [];
    for (let i = 0; i < array.length; i++) {
        message.push(`Thank you, ${array [i]}, for the wonderful ${name} gift!`);
    }
    console.log(message)
  return message;
}
writeCards (["Ray", "Joyce", "Mark"], "birthday")
// Second Section

function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  countDown(7);
  