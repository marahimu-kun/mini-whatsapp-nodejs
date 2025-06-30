const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then((res) => {
    console.log("Connected to MongoDB");
    console.log(res);
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/WhatsApp");
}

let chat1 = new Chat({
  sender: "Alice",
  receiver: "Bob",
  message:
    "Hello Bob! How are you? Hope you are doing well. Let me know if you need anything. Take care! :-)",
  timestamp: new Date(),
});

let allChats = [
  {
    sender: "Alice",
    receiver: "Bob",
    message:
      "Hello Bob! How are you? Hope you are doing well. Let me know if you need anything. Take care! :-)",
    timestamp: new Date(),
  },
  {
    sender: "Bob",
    receiver: "Alice",
    message:
      "Hi Alice! I'm doing well, thank you! How about you? Let me know if you need anything.",
    timestamp: new Date(),
  },
  {
    sender: "Alice",
    receiver: "Bob",
    message: "I'm good too, thanks for asking! Just wanted to check in.",
    timestamp: new Date(),
  },
  {
    sender: "Bob",
    receiver: "Alice",
    message: "No problem! Always here to chat.",
    timestamp: new Date(),
  },
  {
    sender: "Alice",
    receiver: "Bob",
    message: "Great! Let's catch up soon.",
    timestamp: new Date(),
  },
  {
    sender: "Bob",
    receiver: "Alice",
    message: "Sure! Looking forward to it.",
    timestamp: new Date(),
  },
];

Chat.insertMany(allChats);
