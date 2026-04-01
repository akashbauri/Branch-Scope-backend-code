require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/programs", require("./routes/programs"));
app.use("/timeline", require("./routes/timeline"));
app.use("/blogs", require("./routes/blogs"));
app.use("/outcomes", require("./routes/outcomes"));
app.use("/ai", require("./routes/ai"));

app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
