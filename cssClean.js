/* Written by Arash Joobandi Aug 21 2019
*  
*  This script will check all used class names
*  in a react components folder. 
*
*  TODO: And delete the unused class names in the css file
*
*/
let root_path = './src/components/';

const fs = require('fs');
const readline = require('readline');

/*

let css_file = 'style.css';
fs.readFile(path+css_file, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
*/

let collect_used_classes = (components) => {
  let collected = [];
  let done_count =  0;
  let all_count = components.length;
  components.forEach(name => {
    let path = root_path+name+'/'+name+'.js';
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) throw err;
      var rd = readline.createInterface({
          input: fs.createReadStream(path),
          console: false
      });

      rd.on('line', function(line) {
          const target_name = 'className="';
          const start_index = line.indexOf(target_name);
          if (start_index != -1) {
            const start_length = target_name.length;
            const end_index = start_index + start_length + line.substring(start_index+start_length, line.length).indexOf('"');
            const current_class = line.substring(start_index+start_length, end_index);
            if (collected.indexOf(current_class) == -1)
              collected.push(current_class);
          }
      });
      rd.on('close', function () {
          if (done_count >= all_count-1)
            console.log(collected);
          else
            done_count ++;
      });
    });
  })
}

//List directories in path
fs.readdir(root_path, (err, data) => {
  if (err) throw err;
  console.log(data);
  let components = []
  data.forEach(name => {

    if  (!name.startsWith('.') && !name.endsWith('.swp') && !name.endsWith('.css') && !name.endsWith('.js')) {
      components.push(name);
    }

  })
  collect_used_classes(components);
});

