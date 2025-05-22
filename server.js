const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is live!');
});

app.post('/predict', (req, res) => {
  const message = req.body.message;
  const response = { reply: `You said: ${message}` };
  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
