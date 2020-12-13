const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
const express = require('express');
var port = 3000;
var app = express();
var wikiUrls1;
rp(url)
  .then(function(html){
    //success!
    var wikiUrls;
    for (let i = 0; i < $('big > a', html).length ; i++) {
      wikiUrls = " "+ wikiUrls + $('big > a', html)[i].attribs.href;
    }
    console.log(wikiUrls);
    wikiUrls1 = wikiUrls;
  })
  .catch(function(err){
    //handle error
  });
app.get('/',(req,res)=>{
  res.send(wikiUrls1);
});
app.listen(port,()=>{console.log("Listening the 3000. port")});
