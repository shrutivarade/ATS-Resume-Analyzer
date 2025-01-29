const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
// const open = require("open"); // Import the open package
const cors = require('cors'); 
dotenv.config();

const app = express();

// Enable CORS
app.use(cors());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Example API endpoint to get the API key
app.get('/api/openai-key', (req, res) => {
  res.json({ apiKey: process.env.OPENAI_API_KEY });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  // open(`http://localhost:${PORT}/index.html`); // Open in the default browser
});
