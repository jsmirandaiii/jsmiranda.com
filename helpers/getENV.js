function getENV() {
  switch (process.env.NODE_ENV.toLowerCase()) {
    case "production":
      return "production";
    case "development":
      return "development";
    case "maintenance":
      return "maintenance";
    default:
      return "maintenance";
  }
}

module.exports = getENV;
