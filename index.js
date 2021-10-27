// modules setup
const express = require('express');
const mongoose = require('mongoose');


const app = express();

// port setup
app.set('port', process.env.PORT || 3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

async function start() {
  try {
    await mongoose.connect('mongodb+srv://${{ secrets.MONGODB_USER }}:${{ secrets.MONGODB_PASSWORD}}0.c5iuq.mongodb.net/users', {
      useNewUrlParser: true,
      useFindAndModify: false
    });
    // app.get('/', (req, res) => {
    //   res.send('Hello World!');
    //   res.end();
    // });
    app.listen(app.get('port'), () => {
      console.log('App started on port', app.get('port'))
    });
  } catch (e) {
    console.log(e);
  };
};

start();
