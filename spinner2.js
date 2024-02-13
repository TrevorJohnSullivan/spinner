const frames = ['|', '/', '-', '\\'];
let time = 100
for (let i = 0; i < frames.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${frames[i]}   `);
  }, time);
  time = time + 200
}





// const frames = ['|', '/', '-', '\\'];
// let time = 100
// let index = 0;
// for (let i = 0; i < frames.length; i++) {
//   setTimeout(() => {
//     process.stdout.write(`\r${frames[index]}   `);
//     index = (index + 1) % frames.length;
//   }, time);
//   time = time + 200
// }
