const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//cors
const cors = require("cors");
app.use(cors());

//env
const dotenv = require("dotenv");
dotenv.config();

//login
const { auth, requiresAuth } = require("express-openid-connect");

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};

app.use(auth(config));

app.get("/", (req, res) => {
  try {
    res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
  } catch (e) {
    console.log(e);
  }
});

app.get("/users", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

//body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

// If the app is listeneing at a port, run this route
app.use("/", require("./routes/index"));

// Funtion for listening at a port
app.listen(port, () => {
  console.log(`🎵 Listening on port ${port} 🎵`);
});
