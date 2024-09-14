const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// In-Memory-Datenstruktur für Scam-Emails
let emails = [];

// API-Route zum Abrufen aller Einträge
app.get('/api/emails', (req, res) => {
  res.json(emails);
});

// API-Route zum Hinzufügen eines neuen Eintrags
app.post('/api/emails', (req, res) => {
  const { email, morsecode } = req.body;
  emails.push({ email, morsecode });
  res.json({ message: 'Email added successfully', emails });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
