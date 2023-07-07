require("dotenv").config();

const express = require("express");

const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connectei a base de dados!");
    app.emit("Pronto");
  })
  .catch((e) => console.log(e));

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const routes = require("./routes");
const path = require("path");
// const helmet = require("helmet");

const {
  middlewareLocal,
  checkCsrfError,
  csrfMiddleware,
} = require("./src/middlewares/middleware.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(helmet());
const csrf = require("csurf");
app.use(express.static(path.resolve(__dirname, "public")));


const sessionOptions = session({
  secret: "afpoaioshogsdfj;",
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

app.use(sessionOptions);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(csrf());

app.use(middlewareLocal);
app.use(csrfMiddleware);
app.use(checkCsrfError);
app.use(routes);

// app.get('/contato', (req, res) => {
//     res.send('Obg por entrar em contato conosco')
// })
app.on("Pronto", () => {
  app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor está executando");
  });
});
