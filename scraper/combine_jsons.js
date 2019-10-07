const fs = require('fs');

temp  = {}
for (let i = 1; i <= 140; i ++) {
  let buff = require('./scraped_data'+i+'.json');
  Object.keys(buff).forEach(key => {
    if (!temp.hasOwnProperty(key)) {
      temp[key] = buff[key];
    }
  })
}

console.log(temp);
console.log(JSON.stringify(temp));
let write_data = JSON.stringify(temp);
fs.writeFileSync('all_data.json', write_data);
