const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://khadijajutt173:dENk8V8a5Bt7bsyb@cluster0.3ycj6.mongodb.net/myvibe?retryWrites=true&w=majority&appName=Cluster0');
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
