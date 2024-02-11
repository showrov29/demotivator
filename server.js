const express = require("express");
const app = express();
const { run } = require("./gemini");
const PORT = process.env.PORT || 3000;
app.get("/", async (req, res) => {
	let x = await run("hello gemini");
	res.send(x);
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
