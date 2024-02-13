const frames = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let time = 100
for (let i = 0; i < frames.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${frames[i]}   `);
  }, time);
  time = time + 200
}