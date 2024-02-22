const express = require("express");
const app = express();
const port = 3000;

require("dotenv");

app.use(express.static("public"));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// const accountSid = process.env.ACCOUNT_SID;
// const authToken = process.env.AUTH_TOKEN;
const client = require("twilio")(
  "AC1f008c2866fba17a56c3c1bab3922382",
  "d54acc213193438dbe1e3c207e813fe3"
);

app.post("/whatsapp", (req, res) => {
  const recipient = req.body.phoneNumber;

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  console.log(otp);
  client.messages
    .create({
      body: `your OTP is ${otp}`,
      //   from: "whatsapp: +918431737314",
      from: `whatsapp: +13156460295`,
      to: `whatsapp: +91${recipient}`,
    })
    .then((message) => console.log(message.sid));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
