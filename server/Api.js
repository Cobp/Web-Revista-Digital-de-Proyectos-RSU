const { styleText } = require('node:util')
process.loadEnvFile()

console.log(styleText("bold", styleText("red", process.env.API_KEY)));
console.log(styleText("underline", styleText("magenta", process.env.DB_HOST)));
console.log(styleText("cyan", process.env.DB_HOST_USER));
console.log(styleText("green", process.env.PASSWORD));