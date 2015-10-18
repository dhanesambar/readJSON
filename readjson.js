var fs = require('fs');

fs.readFile(__dirname + '/news.json', function(err, data) {
    var jsonObj = JSON.parse(data);
    var jumrec = jsonObj.length; //menghitung jumlah baris
    for (var i = 0; i<jumrec; i++) { //looping utk menampilkan data sejumlah baris
      console.log("Headline News" + "\t" + "= " + jsonObj[i].headlines);
      console.log("Body News" + "\t" + "= " + jsonObj[i].Body);
      console.log("Post Date" + "\t" + "= " + jsonObj[i].posted_on);
      console.log("Post By" + "\t\t" + "= " + jsonObj[i].posted_by + "\n");
    }
});
