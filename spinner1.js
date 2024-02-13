
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);












// let tik = 0

// for (let i = 0; i < 10; i++) {
// tik = 0
// tik++


// if (tik === 1) {
//   setTimeout(() => {
//     process.stdout.write('\r|   ');
//   }, 100);
// }
// tik++

// if (tik === 2) {
// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);
// }
// tik++
// if (tik === 3) {
// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);
// }
// tik++
// if (tik === 4) {
// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);
// }
// }