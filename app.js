const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, './src/public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './src/views/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});