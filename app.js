const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	
	res.send("Hello worlds");

});

app.listen(port, () => console.log(`Server example on port ${port}`));
