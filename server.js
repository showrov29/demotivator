const express = require("express");
const app = express();
const { run } = require("./gemini");
const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
	const insult = await run(req.query.text);
	console.log(req.query);
	console.log("🚀 ~ app.get ~ insult:", insult);
	res.render("index", { insult });
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
