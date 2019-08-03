const express = require("express");
const Nexmo = require("nexmo");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  const nexmo = new Nexmo({
    apiKey: "45330349",
    apiSecret: "pE22nV4Oeg2QBRjk"
  });

  const from = "6282281817090";
  const to = req.body.to;
  const text = req.body.text;

  nexmo.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
      res.send({
        status: "error",
        message: err,
        data: []
      });
    } else {
      if (responseData.messages[0]["status"] === "0") {
        res.send({
          status: "success",
          message: `Succes Send SMS to ${to}`,
          data: responseData.messages
        });
      } else {
        res.send({
          status: "error",
          message: responseData.messages[0]["error-text"],
          data: []
        });
      }
    }
  });
});

const port = process.env.PORT || 4321;
app.listen(port, process.env.IP, () => {
  console.log("server berjalan pada port : ", port);
});
