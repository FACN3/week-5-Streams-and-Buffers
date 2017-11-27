var fs = require('fs');
var time = process.argv[2];
const readable = fs.createReadStream('data.txt');
if (time) {
  time = Number(time.split('s')[0]);
  if (time) {
    time = time * 1000;
    readable.on('data', (chunk) => {
      readable.pause();
      // process.stdout.write(chunk);
      console.log(chunk);
      setTimeout(() => {
        readable.resume();
      }, time);
    });
  }else{
    console.log("time is not a Number");
  }
} else {
  readable.on('data', (chunk) => {
    process.stdout.write(chunk);
    process.stdout.write("-----------------------------------------");
  })
}
