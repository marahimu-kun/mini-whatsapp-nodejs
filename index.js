const mongoose = require("mongoose");
const express = require("express");
const app = express();
const Chat = require("./models/chat.js");
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

main()
  .then((res) => {
    console.log("Connected to MongoDB");
    console.log(res);
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/WhatsApp");
}

app.get("/chats", async (req, res) => {
  let allChats = await Chat.find({});
  console.log(allChats);
  res.render("index", { chats: allChats });
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/chats/new", (req, res) => {
  res.render("new");
});

app.post("/chats", async (req, res) => {
  let { sender, receiver, message, timestamp } = req.body;
  let newChat = new Chat({
    sender: sender,
    sender: req.body.sender,
    receiver: req.body.receiver,
    message: req.body.message,
    timestamp: new Date(),
  });
  newChat
    .save()
    .then(() => {
      console.log("Chat saved successfully");
    })
    .catch((err) => {
      console.error("Error saving chat:", err);
    });
  console.log(newChat);
  res.redirect("/chats");
});

app.get("/chats/:id/edit", async (req, res) => {
  let chatId = req.params.id;
  let chat = await Chat.findById(chatId);
  res.render("edit", { chat: chat });
});

app.put("/chats/:id", async (req, res) => {
  let chatId = req.params.id;
  let { sender, receiver, message } = req.body;

  let updatedChat = await Chat.findByIdAndUpdate(
    chatId,
    {
      sender,
      receiver,
      message,
      timestamp: new Date(),
    },
    { new: true, runValidators: true }
  );

  console.log(updatedChat);
  res.redirect("/chats");
});

app.post("/chats/:id/delete", async (req, res) => {
  let chatId = req.params.id;
  await Chat.findByIdAndDelete(chatId);
  console.log("Chat deleted successfully");
  res.redirect("/chats");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080...");
});
