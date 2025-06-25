const express = require('express');
const { readFile } = require('fs');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
}); 

const dashboardRoutes = require('./routes/dashboard');
app.use('/dashboard', dashboardRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port', process.env.PORT || 3000);
});