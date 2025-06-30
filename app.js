const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
require("dotenv/config");

// Middleware
app.use(cors({ exposedHeaders: ["auth-token"] }));
app.use(express.json());

// Import routes
const routes = require("./app/router");
app.use(routes);

// Serve static files from React
app.use(express.static(path.join(__dirname, "client", "build")));

// Serve React app only if request is not API
app.get("*", (req, res) => {
  if (req.path.startsWith("/api")) {
    return res.status(404).send("API route not found.");
  }
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Start server
PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("QBrain server is up! Listening on port " + PORT);
});
