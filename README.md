#  Altacade LMS Platform  

A full-stack **AI-powered tutoring platform** connecting students with personalized AI-driven learning experiences. Built with modern tools for scalability, real-time interaction, and intelligent content delivery.

---

## 📌 Project Overview  

This platform enables:  
- **Real-time AI tutoring** using Google's Generative AI  
- **Interactive chat & Q/A sessions**  
- **File uploads & resource sharing**  
- **JWT-based authentication & secure APIs**  
- **Responsive frontend with React & Vite**  

---

## 🧠 Tech Stack  

### **Backend**  
- **Runtime:** Node.js  
- **Framework:** Express.js  
- **Database:** MongoDB (via Mongoose)  
- **Auth:** JWT, bcrypt, Google Auth Library  
- **AI Integration:** Google Generative AI (`@google/generative-ai`)  
- **Real-time:** Socket.io  
- **File Upload:** Multer  
- **Email:** Nodemailer, Resend  
- **Environment:** Dotenv  

### **Frontend**  
- **Framework:** React 18  
- **Build Tool:** Vite  
- **Routing:** React Router DOM  
- **State Management:** React Query  
- **UI Components:** Custom + Lucide React Icons  
- **Styling:** Tailwind CSS + PostCSS  
- **Notifications:** Sonner Toasts  
- **Markdown Support:** React Markdown  

---

## 📁 Project Structure  

```
Altacade/
├── backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── routes/           # API routes
│   │   ├── middleware/       # Auth, validation, uploads
│   │   ├── services/         # Business logic
│   │   ├── models/           # MongoDB models
│   │   └── utils/            # Helpers, configs
│   ├── uploads/              # Uploaded files
│   ├── server.js             # Entry point
│   ├── router.js             # Route loader
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── node_modules/
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/           # Page-level components
│   │   ├── services/        # API calls, sockets
│   │   ├── data/            # Static data, constants
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── vite.config.js
│   ├── package.json
│   └── .env.example
│
├── .gitignore
└── README.md
```

---

## ⚙️ Setup Instructions  

### **1. Clone the Repository**  
```bash
git clone [https://github.com/Mohan-I/Altacade-LMS.git]
cd Altacade-LMS
```

### **2. Backend Setup**  
```bash
cd backend
npm install
cp .env.example .env
# Add your environment variables (MongoDB URI, JWT secret, Google AI key, etc.)
npm run dev
```

### **3. Frontend Setup**  
```bash
cd ../frontend
npm install
cp .env.example .env
npm run dev
```

---

## 🛠️ Environment Variables  

### **Backend (.env)**  
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_AI_API_KEY=your_google_ai_key
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
CLIENT_URL=http://localhost:5173
```

### **Frontend (.env)**  
```env
VITE_API_BASE_URL=http://localhost:5000
VITE_SOCKET_URL=http://localhost:5000
```

---

## 🚀 Scripts  

### **Backend**  
```bash
npm start      # Run production server
npm run dev    # Run with nodemon (development)
```

### **Frontend**  
```bash
npm run dev    # Start dev server
npm run build  # Build for production
npm run preview # Preview production build
```

---

## 🔐 Key Features  

✅ **User Authentication** – Secure signup/login with JWT & bcrypt  
✅ **AI-Powered Chat** – Google Generative AI for intelligent tutoring  
✅ **Real-time Communication** – Socket.io for live Q/A and chat  
✅ **File Uploads** – Support for study materials, images, and documents  
✅ **Email Notifications** – Integrated with Resend & Nodemailer  
✅ **Markdown Support** – For rich content rendering  
✅ **Responsive UI** – Built with Tailwind CSS for all devices  

---

## 🧪 API Endpoints (Examples)  

| Method | Endpoint           | Description          |
|--------|--------------------|----------------------|
| POST   | `/api/auth/login`  | User login           |
| POST   | `/api/auth/signup` | User registration    |
| POST   | `/api/chat/`       | AI chat session      |
| GET    | `/api/questions/`  | Fetch Q/A history    |
| POST   | `/api/upload/`     | File upload          |
| GET    | `/api/calls/`      | Live session details |

---

## 📦 Dependencies (Highlights)  

**Backend:**  
- `express` – Web framework  
- `@google/generative-ai` – AI integration  
- `socket.io` – Real-time communication  
- `mongoose` – MongoDB ODM  
- `jsonwebtoken` – Authentication  
- `multer` – File handling  

**Frontend:**  
- `react` & `react-dom` – UI library  
- `react-query` – Data fetching  
- `socket.io-client` – Real-time client  
- `tailwindcss` – Styling  
- `lucide-react` – Icons  
- `sonner` – Toasts  

---

## 🤝 Contributing  

1. Fork the repository  
2. Create a feature branch (`git checkout -b feature/awesome-feature`)  
3. Commit changes (`git commit -m 'Add awesome feature'`)  
4. Push to branch (`git push origin feature/awesome-feature`)  
5. Open a Pull Request  

---

## 👥 Authors  

- **Team Lead 1: Full Stack React/Node Developer** – [Mohan Yadav](https://github.com/Mohan-I)
- **Team Lead 2: Backend Developer & DSA Expert** – [Kehav Thakur](https://github.com/Keshav0543)
- **Team Lead 3: UI/UX Developer & System Design** – [Vikas Thakur](https://github.com/viking-vikas)  
- **AI Integration** – Powered by Google Generative AI  

---

## 🆘 Support  

For issues, feature requests, or contributions, please open an issue in the [GitHub repository](https://github.com/Mohan-I/Altacade).  

---

### ⭐ If you like this project, give it a star on GitHub!  

---

> **Note:** This is a development version. Some features may be experimental. Always check the `.env.example` files for required configurations.

---

**Built with ❤️ and modern web technologies.**
