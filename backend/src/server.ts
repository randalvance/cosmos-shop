import express from 'express';

const app: express.Application = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});