const express = require("express");

const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const boardRouter = require("./routers/boardRouter");

const app = express();
const PORT = 4000;

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/board", boardRouter);

app.listen(PORT, () => {
  console.log(`NEXT BOARD BACKEND _ ${PORT} REST API SERVER START!`);
});
