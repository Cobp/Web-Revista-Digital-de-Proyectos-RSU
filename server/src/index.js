import app from './app.js';
import { connectDB } from './db.js';

process.loadEnvFile()

connectDB()

app.listen(process.env.DB_HOST)
console.log('Server listening on port ' + process.env.DB_HOST);