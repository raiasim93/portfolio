const express = require("express");
const app = express();

const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"]
};

app.use(cors(corsOptions));

app.get("/api", (req, res)=> {
    res.json({fruits: ["apple", "orange", "banana", "mango"]});
});

app.listen(8080, ()=> {
    console.log("Server running at port 8080");
});