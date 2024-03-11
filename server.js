import express from 'express'
import dotenv from 'dotenv'
import router from './Routes/mission.js';

const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.json());
dotenv.config();

// Routes
app.use(router)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})