require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/books', bookRoutes);

app.get('/', (req, res) => {
  res.send('API Quản lý sách 234662_ToChiHuy đang chạy...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});