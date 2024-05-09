const express = require("express");
const app = express();
const path=require('path')
const cors=require('cors')

app.use(cors());
app.use(express.json());
//const WeatherService = require("./src/services/weatherService");
const router=require("./src/routers/weatherRouter");

app.use("/", router);
const publicDirectoryPath = path.join(__dirname, "../public");


const PORT =process.env.PORT|| 3001;
console.log(PORT);
app.listen(PORT, () => console.log(`server running on port ${PORT}`));

module.exports = { app };
