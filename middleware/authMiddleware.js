const jwt = require('jsonwebtoken');
const express = require('express');
const authenticateToken = (req, res, next) => {

  const app = express();
app.get('/getUser', authenticateToken, (req, res) => {
        
res.json({ message: 'User data fetched successfully' });
      });
      // console.log(req.header('Authorization'))
  const token = req.header('Authorization'); 
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; 
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
module.exports = authenticateToken;