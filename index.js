const http = require('http');
const fs = require('fs');
const url = "http://jsonplaceholder.typicode.com/posts";

http.get(url,res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
    fs.writeFile('./result/posts.json', JSON.stringify(body), (err) =>{
      if (err) throw err;
      console.log('This file has been saved');
    });
  });
});

