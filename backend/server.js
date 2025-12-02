const express = require('express');
const sql = require('mssql');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true, // Use this if you're on Azure.
        trustServerCertificate: true // Change to true for local dev / self-signed certs
    }
};

// Connect to Database
sql.connect(dbConfig).then(pool => {
    if (pool.connected) {
        console.log('Connected to SQL Server');
    }
}).catch(err => {
    console.error('Database Connection Failed! Bad Config: ', err);
});

// Root Route
app.get('/', (req, res) => {
    res.send('Backend is running successfully!');
});

// Test Route
app.get('/api/test', (req, res) => {
    res.json({ message: 'API is working!', timestamp: new Date() });
});

app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}/`);
});