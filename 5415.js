var fs = require('fs');
fs.readFile('./text.txt','utf8',function(err,data){
            if(err){
                console.log('error');
            }
            else{
                console.log(data);
            }
        })