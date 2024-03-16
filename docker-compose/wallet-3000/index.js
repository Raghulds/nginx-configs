const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

app.use('/health', (req, res) => {
    res.json({ message: 'Im listening 3000!' });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});