// Create express app
const express = require("express");
var cors = require('cors');
const app = express();
const db = require ("./database.js");
// Server port
const HTTP_PORT =  process.env.PORT || 8000;
// Start server
app.listen(HTTP_PORT, () => {
    console.log(`Server running on port ${HTTP_PORT}`)
});
// Root endpoint

app.use(cors());
app.options('*', cors());

app.get("/api/users", (req, res) => {
  const sql = `SELECT * FROM users ORDER BY user_id limit ${req.query.limit} offset ${(req.query.page - 1) * req.query.limit}`;
  const params = [];
  db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data":rows
      })
    });
});

app.get("/api/statistic", (req, res) => {
  const sql = "select * from users_statistic"
  const params = []
  db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data":rows
      })
    });
});

app.get("/api/pages", (req, res) => {
  const sql = "SELECT COUNT(*) FROM users"
  const params = []
  db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data":rows
      })
    });
});

app.get("/", (req, res) => {
    res.json({"message":"Ok"})
});

// Insert here other API endpoints

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});
