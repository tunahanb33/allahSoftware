require('dotenv/config');
require('./database/dbConnection');
require('./sql/sqlConnection');
const tokenCheck = require('./middlewares/tokenCheck');
const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
app.use(express.json());
app.use(require('cors')());

app.use('/api/auth', authRoutes);
app.use('/api/admin', tokenCheck, adminRoutes);
app.use('/api', tokenCheck, apiRoutes);

app.listen(process.env.SERVER_PORT, () => console.log(`${process.env.SERVER_PORT} portu dinleniyor.`));