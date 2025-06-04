const app = require('./app');
const config = require('./config');

const PORT = config.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
