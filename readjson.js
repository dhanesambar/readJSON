var fs = require('fs');

fs.readFile(__dirname + '/news.json', function(err, data) {
    var jsonObj = JSON.parse(data);
    console.log("Headline News = " + jsonObj[0].headlines);
    console.log("Body News = " + jsonObj[0].Body);
    console.log("Post Date = " + jsonObj[0].posted_on);
    console.log("Post By = " + jsonObj[0].posted_by);


    var jumrec = jsonObj.length;
    for (var i = 0; i<jumrec; i++) {
      console.log("Headline News = " + jsonObj[i].headlines);
      console.log("Body News = " + jsonObj[i].Body);
      console.log("Post Date = " + jsonObj[i].posted_on);
      console.log("Post By = " + jsonObj[i].posted_by);
    }
});
