var unirest = require("unirest");

var req = unirest("POST", "https://mailgunzakutynskyv1.p.rapidapi.com/addAddressToUnsubscribeTable");

req.headers({
	"x-rapidapi-host": "MailGunzakutynskyV1.p.rapidapi.com",
	"x-rapidapi-key": "f584d32ad1mshf0cebe5f7850049p16710bjsn468c2f3c3760",
	"content-type": "application/x-www-form-urlencoded"
});

req.form({});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});