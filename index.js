var express = require("express");
var path = require("path");
var helmet = require("helmet");
var app = express();
var port = process.env.PORT || 3000;

app.disable("x-powered-by");
app.set("trust proxy", true);

app.use(
  helmet.hsts({
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
    setIf: function(req, res) {
      return req.secure;
    }
  }),
  function(req, res, next) {
    if (!req.secure) {
      return res.redirect(301, "https://" + req.headers.host + req.originalUrl);
    }
    next();
  },
  express.static(path.resolve("./public/assets"))
);

app.get("/", function(req, res) {
  return res.sendFile(path.resolve("./public/index.html"));
});

app.listen(port, function(err) {
  if (err) throw new Error(err);
  console.log(`Application is running at port ${port}`);
});
