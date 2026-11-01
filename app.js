const express = require('express');

const app = express();

const PORT = 3000;

// Route 1: Home page
app.get('/', (req, res) => {
    res.status(200).send('Welcome to Karthika Kasthuri Node.js Lab 1!');
});

// Route 2: About page
app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'Karthika kasthuri',
        section: 'AIDE-2A'
    });
});

// Route 3: Current date and time
app.get('/time', (req, res) => {
    res.status(200).json({
        currentDateTime: new Date()
    });
});

// 404 - Unknown routes
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});