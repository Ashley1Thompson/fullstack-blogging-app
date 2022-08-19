const express = require('express');
const sequelize = require('./config/connection');
const model = require('./models');
const app = express();
const PORT = process.env.PORT || 3001;


sequelize.sync(force = true).then(() => {
  app.listen(PORT, () => {
    console.log('listening on PORT # http://localhost:3001');
    });
});