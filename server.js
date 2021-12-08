const path = require('path');
var express = require('express'); // express web server framework
const session = require('express-session'); //session middleware for express
var cors = require('cors'); // CORS middleware
//CORS (cross-origin resource sharing) - allows restricted resources from a website (ie spotify) to be used by another website (ie our app)
var cookieParser = require('cookie-parser'); //cookie parsing middleware, creates an object keyed by cookie names

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
sess.store.sync();

var app = express();
const PORT = process.env.PORT || 8888;

app.use(session(sess));

// Handlebars hook up
const hbs = exphbs.create({})
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public' )))
   .use(cors())
   .use(cookieParser());
app.use(express.json());


app.use(require('./controllers/'));

sequelize.sync({ force: false}).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});