const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');
const cors =require('cors');
const { createServer } = require('http');
const { Server } = require('socket.io');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken'); 
const authRoutes = require('./routes/auth');
const questionRoutes = require('./routes/question');
//const geminiRoutes = require('./routes/gemini');
const meetingRoutes = require('./routes/meeting');
const availabilityRoutes = require('./routes/availability');
const geminiSession = require('./routes/geminiSession');

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true
  }
}); 

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));

app.set('io', io);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });


io.use((socket, next) => {
  const cookies = socket.handshake.headers.cookie;
  
  if (!cookies) {
    console.log('⚠️  Socket connection without cookies');
    return next(); // Allow connection but won't join role rooms
  }

  // Parse cookies manually
  const cookieObj = {};
  cookies.split(';').forEach(cookie => {
    const [key, value] = cookie.trim().split('=');
    cookieObj[key] = value;
  });

  const token = cookieObj.token;

  if (!token) {
    console.log('⚠️  Socket connection without token');
    return next();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.userId = decoded.user.id;
    socket.userRole = decoded.user.role;
    socket.userEmail = decoded.user.email;
    console.log(`✅ Socket authenticated: ${decoded.user.email} (${decoded.user.role})`);
    next();
  } catch (error) {
    console.error('⚠️  Socket authentication failed:', error.message);
    next(); // Allow connection but without auth
  }
});


io.on('connection', (socket) => {
  console.log(`🔌 User connected: ${socket.id}`);
  
  // Join role-based rooms
  if (socket.userRole === 'student') {
    socket.join('students');
    console.log(`👨‍🎓 Student ${socket.userEmail} joined 'students' room`);
  } else if (socket.userRole === 'tutor') {
    socket.join('tutors');
    console.log(`👨‍🏫 Tutor ${socket.userEmail} joined 'tutors' room`);
  } else {
    console.log(`👤 Guest connected without authentication`);
  }
  
  socket.on('disconnect', () => {
    console.log(`❌ User disconnected: ${socket.id}`);
  });
});


app.get('/', (req, res) => {
  res.json({ 
    message: '🎓 Student-Tutor Platform API',
    status: 'Running',
    version: '1.0.0',
    socketConnections: io.engine.clientsCount
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/questions', questionRoutes);
//app.use('/api/gemini', geminiRoutes);
app.use('/api/gemini', geminiSession);
app.use('/api/meetings', meetingRoutes);
app.use('/api/availability', availabilityRoutes);


app.use((req, res) => {
  res.status(404).json({ 
    success: false,
    error: 'Route not found',
    path: req.path 
  });
});


app.use((err, req, res, next) => {
    console.error('❌ Server Error:', err);
    res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: err.message
    });
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
    console.log('=================================');
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`🌐 Access the API at http://localhost:${PORT}/`);
    console.log('✅ Socket.io ready with JWT auth');
    console.log('=================================');
});