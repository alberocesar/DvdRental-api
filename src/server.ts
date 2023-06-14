import app from "./app";

const port = process.env.PORT || 3000;

//chamar o app (rotas)
app.get("/", (req, res) => {
    res.send("DVD Rental API");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});