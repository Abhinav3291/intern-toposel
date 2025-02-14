const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI); // Just the URI is enough now

      console.log('MongoDB Connected');
    } catch (error) {
      console.error('MongoDB Connection Error:', error);
      process.exit(1); // Exit the process if connection fails
    }
  };

module.exports = { connectDB };