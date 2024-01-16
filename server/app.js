import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()
const PORT = process.env.PORT || 8888

const app = express()

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log('Db successfuly connected'))
  .catch((error) => console.error('Db connecting errore: ' + error))

app.use(express.json())
app.use(cors())

app.listen(PORT, (error) => {
    if(error){ console.error(error);}
    else console.log(`Server runing on port: ${PORT}`);
})