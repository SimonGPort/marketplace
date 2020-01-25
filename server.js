let express = require("express");
let app = express();
let reloadMagic = require("./reload-magic.js");
let multer = require("multer");
let upload = multer({
  dest: __dirname + "/upload"
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
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const users = [];
const sessions = {};

app.post("/signup", upload.none(), async (req, res) => {
  let username = req.body.username;
  let pwd = req.body.password;
  let email = req.body.email;
  console.log("name", username);
  try {
    const user = await dbo.collection("users").findOne({ username: username });
    if (user) {
      return res.send(JSON.stringify({ success: false }));
    }
    await dbo
      .collection("users")
      .insertOne({ username: username, password: pwd, email: email });
    let sessionId = "" + Math.floor(Math.random() * 1000000);
    sessions[sessionId] = req.body.username;
    res.cookie("sid", sessionId);
    res.send(JSON.stringify({ success: true }));
  } catch (err) {
    console.log("/signup error", err);
    res.send(JSON.stringify({ success: false }));
    return;
  }
});

app.post("/login", upload.none(), async (req, res) => {
  let username = req.body.username;
  let pwd = req.body.password;
  console.log("name", username);
  try {
    const user = await dbo.collection("users").findOne({ username: username });
    if (user) {
      let sessionId = "" + Math.floor(Math.random() * 1000000);
      sessions[sessionId] = req.body.username;
      res.cookie("sid", sessionId);
      res.send(JSON.stringify({ success: true }));
      return;
    }
    return;
  } catch (err) {
    console.log("/login error", err);
    res.send(JSON.stringify({ success: false }));
    return;
  }
});

app.post("/sellingABook", upload.single("imgFile"), (req, res) => {
  console.log("can access");
  let sessionId = req.cookies.sid;
  let seller = sessions[sessionId];
  let title = req.body.title;
  let category = req.body.category;
  let description = req.body.description;
  let img = "/uploads/" + req.file.filename;
  let price = req.body.price;
  console.log("image", img);
  if (seller === undefined) {
    console.log("The user need to login");
    res.send(JSON.stringify({ success: false }));
    return;
  }
  try {
    dbo.collection("books").insertOne({
      seller: seller,
      title: title,
      category: category,
      description: description,
      img: img,
      price: price
    });
    console.log("The book has been register");
    res.send(JSON.stringify({ success: true }));
  } catch (err) {
    console.log("/book registration fail", err);
    res.send(JSON.stringify({ success: false }));
    return;
  }
});

app.post("/autoLogin", (req, res) => {
  let sessionId = req.cookies.sid;
  let username = sessions[sessionId];
  if (username === undefined) {
    console.log("an user enter the website without autoLogin");
    res.send(JSON.stringify({ success: false }));
    return;
  }
  console.log("an user enter the website with autoLogin");
  res.send(JSON.stringify({ success: true, username: username }));
});

app.post("/logout", (req, res) => {
  const sessionId = req.cookies.sid;
  delete sessions[sessionId];
  console.log("logout sucess");
  res.send(JSON.stringify({ success: true }));
});

reloadMagic(app);

app.use("/", express.static("build"));
app.use("/upload", express.static("upload"));
app.use("/", express.static("public"));

// Your endpoints go after this line

// Your endpoints go before this line

app.all("/*", (req, res, next) => {
  // needed for react router
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(4000, "0.0.0.0", () => {
  console.log("Server running on port 4000");
});
