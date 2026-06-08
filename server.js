const https = require("https");

module.exports = (req, res) => {

  const options = {
    hostname: "app.base44.com",
    path: "/api/apps/69eabbe48b257f7737097f4e/entities/Student",
    method: "GET",
    headers: {
      api_key: "48e999e43f7d4b11bc3896afa62cd578"
    }
  };

  const request = https.request(options, response => {

    let data = "";

    response.on("data", chunk => {
      data += chunk;
    });

    response.on("end", () => {
      res.status(200).send(data);
    });

  });

  request.on("error", error => {
    res.status(500).json({
      error: error.message
    });
  });

  request.end();
};
