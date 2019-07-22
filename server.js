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
      console.log(err);
    } else {
      if (responseData.messages[0]["status"] === "0") {
        res.send({
          status: "success",
          data: [],
          err: null
        });
      } else {
        res.send({
          status: "error",
          data: [],
          err: responseData.messages[0]["error-text"]
        });
      }
    }
  });
});

app.post("/edo", (req, res) => {
  const nexmo = new Nexmo({
    apiKey: "b0040e97",
    apiSecret: "SS7MO2kKHfUCsm2d"
  });

  const from = "6282279266979";
  const to = req.body.to;
  const text = req.body.text;

  nexmo.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
      console.log(err);
    } else {
      if (responseData.messages[0]["status"] === "0") {
        res.send({
          status: "success",
          data: [],
          err: null
        });
      } else {
        res.send({
          status: "error",
          data: [],
          err: responseData.messages[0]["error-text"]
        });
      }
    }
  });
});

const port = process.env.PORT || 4321;
app.listen(port, process.env.IP, () => {
  console.log("server berjalan pada port : ", port);
});
