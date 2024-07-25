const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	
	res.send("Hello worlds");

});

app.get("/demo", (req, res) => {
	
	res.set("X-full-stack", "4life");
	res.status(418);
	res.send("Nope =)");

});

app.listen(port, () => console.log(`Server example on port ${port}`));
