const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable for Render compatibility

// Endpoint "data"
app.get('/data', (req, res) => {
    res.json({ message: 'Hello, this is your data endpoint!' });
});

// Start the server
app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});
