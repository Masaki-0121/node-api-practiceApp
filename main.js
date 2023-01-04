const request = require("request");
const dotenv = require("dotenv").config();
//dont forget adding .config()//

const argument = process.argv[2];

const options = {
  url: `https://api.openweathermap.org/data/2.5/weather?q=${argument}&units=metric&appid=${process.env.API_KEY}`,
  method: "GET",
  json: true,
};
// units=metric& make it Celsius

request(options, (error, res, body) => {
  console.log(body.main.temp);
});
