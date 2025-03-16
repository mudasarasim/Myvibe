require('dotenv').config(); // Load environment variables first

const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');

const app = express();

// Connect to the Database
connectDB().catch((err) => {
  console.error("Database connection failed", err);
  process.exit(1); // Exit process with failure
});

// Middleware
app.use(cors()); // Configure CORS if necessary
app.use(express.json()); // For parsing JSON requests

// Serve static files (React app build)
const buildPath = path.join(__dirname, "../myibe-web/build");
app.use(express.static(buildPath));

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Import Routes
const playlistSongsRoutes = require('./routes/playlistSongs');
const authRoutes = require('./routes/auth');
const musicRoutes = require('./routes/music');
const playlistRoutes = require('./routes/playlistRoutes');
const getsongRoutes = require('./routes/getSongsRoutes');
const timeSlotRoutes = require('./routes/timeSlotRoutes');
const qrCodeRoutes = require('./routes/qrCodeRoutes');

// Define API routes
app.use('/api/playlist-songs', playlistSongsRoutes);
app.use('/api/playlist', getsongRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/music', musicRoutes);
app.use('/api/playlists', playlistRoutes);
app.use('/api/timeslots', timeSlotRoutes);
app.use('/api/qrcode', qrCodeRoutes);

// Serve React app for all other routes (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

const PORT = process.env.PORT || 5000;

// Create HTTP server and integrate with Socket.io
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*", // Allow any origin. Adjust this for production for security.
    methods: ["GET", "POST"]
  }
});

// WebSocket connection
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for 'songAdded' events
  socket.on('songAdded', (queue) => {
    io.emit('queueUpdated', queue); // Broadcast updated queue to all clients
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start server
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
