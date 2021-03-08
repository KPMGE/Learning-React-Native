const http = require("https");

const options = {
	"method": "GET",
	"hostname": "love-calculator.p.rapidapi.com",
	"port": null,
	"path": "/getPercentage?fname=John&sname=Alice",
	"headers": {
		"x-rapidapi-key": "50a6ef8643msh531ca5ca3434591p17b1fcjsn56f86d5f0c88",
		"x-rapidapi-host": "love-calculator.p.rapidapi.com",
		"useQueryString": true
	}
};

function getPercentage(name1, name2) {
  optios.path = `/getPercentage?fname=${name1}&sname=${name2}`;

  const req = http.request(options, function (res) {
    const chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      const body = Buffer.concat(chunks);
      // console.log(body.toString());
      let obj = JSON.parse(body.toString());
      return obj["percentage"];
    });
  });

  req.end();
}

console.log(getPercentage("Kevin", "Laura"));