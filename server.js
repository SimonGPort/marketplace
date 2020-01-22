let express = require("express");
let app = express();
let reloadMagic = require("./reload-magic.js");
let multer = require("multer");
let upload = multer({
  dest: __dirname + "/build/images"
});
let mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;
let ObjectId = mongodb.ObjectID;
let dbo = undefined;
let url =
  "mongodb+srv://bob:bobsue@cluster0-moshr.azure.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(url, { useUnifiedTopology: true })
  .then(client => {
    dbo = client.db("media-board");
  })
  .catch(err => console.log(err));
// const cookieParser = require("cookie-parser");
// app.use(cookieParser());

const users = [];
const sessions = {};

app.post("/signup", upload.none(), async (req, res) => {
  let name = req.body.username;
  let pwd = req.body.password;
  let email = req.body.email;
  console.log("name", name);
  try {
    const user = await dbo.collection("users").findOne({ username: name });
    if (user) {
      return res.send(JSON.stringify({ success: false }));
    }
    await dbo
      .collection("users")
      .insertOne({ username: name, password: pwd, email: email });
    res.send(JSON.stringify({ success: true }));
  } catch (err) {
    console.log("/signup error", err);
    res.send(JSON.stringify({ success: false }));
    return;
  }
});

reloadMagic(app);

app.use("/", express.static("build")); // Needed for the HTML and JS files
app.use("/", express.static("public")); // Needed for local assets

// Your endpoints go after this line

// Your endpoints go before this line

app.all("/*", (req, res, next) => {
  // needed for react router
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(4000, "0.0.0.0", () => {
  console.log("Server running on port 4000");
});
