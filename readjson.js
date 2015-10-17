var fs = require('fs');

fs.readFile(__dirname + '/news.json', function(err, data) {
    var jsonObj = JSON.parse(data);
    console.log("Headline News = " + jsonObj.Headline);
    console.log("Body News = " + jsonObj.Body);
    console.log("Post Date = " + jsonObj.posted_on);
    console.log("Post By = " + jsonObj.posted_by);

});
