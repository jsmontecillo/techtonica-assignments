import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 4040;

app.use(cors());
app.listen(PORT, () => console.log(`Hi! Server running on port http://localhost:${PORT}`));

