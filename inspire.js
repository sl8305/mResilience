var unirest = require("unirest");

var req = unirest("GET", "https://timshim-quotes-v1.p.rapidapi.com/quotes");

req.headers({
	"x-rapidapi-host": "timshim-quotes-v1.p.rapidapi.com",
	"x-rapidapi-key": "f584d32ad1mshf0cebe5f7850049p16710bjsn468c2f3c3760"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});