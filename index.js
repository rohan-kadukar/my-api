const express = require('express');
const fs = require('fs'); // File system module to read the data.json file
const app = express();
const port = process.env.PORT || 3000;

// Endpoint to serve data from data.json
app.get('/data', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return res.status(500).json({ error: 'Failed to read data' });
        }
        res.json(JSON.parse(data));
    });
});

// Start the server
app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});
