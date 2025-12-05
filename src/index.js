import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "API is working" });
});

app.get("/user", (req, res) => {
	res.json({ message: "User GET working", users: ["John", "Anshul"] });
});

app.post("/user", (req, res) => {
	res.json({ message: "User POST working", received: req.body });
});

app.get("/todo", (req, res) => {
	res.json({ message: "Todo GET working", todos: ["Task 1", "Task 2"] });
});

app.post("/todo", (req, res) => {
	res.json({ message: "Todo POST working", received: req.body });
});

const PORT = 4000;
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
