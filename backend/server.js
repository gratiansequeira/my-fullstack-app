const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Allow cross-origin requests from frontend (optional for dev)
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});