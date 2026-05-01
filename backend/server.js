const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const connectDB = require('./config/db');
const connectCloudinary = require('./config/cloudinary');

const { notFound, errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();

// ✅ CONNECT DATABASE (FIXED)
connectDB();

// ☁️ Cloudinary setup (optional)
if (process.env.CLOUDINARY_CLOUD_NAME) {
  connectCloudinary();
} else {
  console.log("Cloudinary not configured");
}

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/lost', require('./routes/lostItemRoutes'));
app.use('/api/found', require('./routes/foundItemRoutes'));
app.use('/api/matches', require('./routes/matchRoutes'));
app.use('/api/claims', require('./routes/claimRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error middleware
app.use(notFound);
app.use(errorHandler);

// Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});