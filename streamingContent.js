var fs = require('fs');
const readable = fs.createReadStream('data.txt');
// var data = process.argv[1];
// data="";
readable.on('data', (chunk)=>{
  // console.log(chunk);
  process.stdout.write(chunk);
  // data += chunk;
});
// readable.on('end', ()=>{
//   process.stdout.write(data);
// })

// fs.readFile('data.txt', 'utf8', function(err, data) {
//     if (err) throw err;
//     console.log(data);
// });
