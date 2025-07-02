# 💬 Mini WhatsApp Clone with Node.js & MongoDB

A mini WhatsApp-style messaging app built using **Node.js**, **Express.js**, **MongoDB**, and **EJS**. This project was developed to practice CRUD operations and MongoDB integration in a backend application.

---

## 📌 Features

- ✉️ Add new chat messages  
- 🧾 View all chats  
- ✏️ Edit existing messages  
- ❌ Delete specific chats  
- 📅 Timestamps on all messages  
- 🎨 Simple frontend using EJS  
- 🧠 RESTful routing with method-override  

---

## 🛠 Tech Stack

- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- EJS (Embedded JavaScript Templates)  
- Method-Override  
- HTML + CSS  

---

## 📁 Project Structure

├── index.js            → Your main server file (runs the Express app)
├── models/             → Folder for Mongoose schemas (MongoDB models)
│   └── chat.js         → Schema for storing chat messages
├── views/              → Folder for EJS templates (HTML-like files)
│   ├── index.ejs       → Page to show all chats
│   ├── new.ejs         → Form to create a new chat
│   └── edit.ejs        → Form to edit a chat
├── public/             → Folder for static assets (CSS, images, JS)
├── package.json        → File that lists your app’s metadata & dependencies

---

## 🚀 How to Run

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/mini-whatsapp-nodejs
   cd mini-whatsapp-nodejs
   
2. Install dependencies
   ```
   npm install
   
3. Start MongoDB
   Make sure MongoDB is running locally at:
   ```
   mongodb://127.0.0.1:27017/WhatsApp
   
4. Run the server
   ```
   node index.js
   
5. Open in browser
   ```
   http://localhost:8080/chats

---

## 🎯 Purpose
This project was built as part of my MongoDB CRUD practice. It simulates a basic messaging system like WhatsApp, helping me learn backend logic, EJS templating, and database integration.

---

## 🙌 Why I Built This

This project was built as a hands-on way to practice backend development using MongoDB and Node.js. I wanted to create a mini version of a real-world messaging app, like WhatsApp, to explore how data flows between users, how CRUD operations work in a chat system, and how server-side rendering with EJS feels in action.  

---

## 👤 Author

Made by marahimu_kun
Built with ❤️ for learning and fun!

---

## 📜 License

MIT License














