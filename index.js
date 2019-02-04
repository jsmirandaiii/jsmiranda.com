var express = require("express");
var path = require("path");
var opn = require("opn");
var app = express();
var port = 3000 || process.env.PORT;

app.use(express.static(path.resolve("./public/assets")));
app.get("/", function(req, res) {
  return res.sendFile(path.resolve("./public/index.html"));
});
app.listen(port, function(err) {
  if (err) throw new Error(err);
  console.log(`Application is running at port ${port}`);
  opn(`http://localhost:${port}`);
});
