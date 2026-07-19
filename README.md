# 🌟 Bookoro - Hotel Booking Platform

🔗 **CLIENT SIDE LIVE LINK:** https://bookoro-app.web.app

---

## 📖 Project Overview

**Bookoro** is a modern and user-friendly hotel booking platform that allows users to explore available rooms, view detailed information, make bookings, manage reservations, and share reviews.  

The platform provides a smooth booking experience with secure authentication, responsive design, interactive UI elements, and real-time data management. It is built with modern web technologies to ensure performance, usability, and scalability.

---

## 🚀 Main Technologies Used

### Frontend:
- ⚛️ React.js
- 🎨 Tailwind CSS
- 🌼 Daisy UI
- 🔥 Firebase Authentication
- 🛣️ React Router
- 🌐 Axios
- 🎞️ Framer Motion
- 🗺️ React Leaflet
- 📦 Swiper Slider

### Backend:
- 🟢 Node.js
- 🚂 Express.js
- 🍃 MongoDB
- 🔐 JWT Authentication

### Deployment:
- 🌍 Firebase Hosting (Client)
- ☁️ Vercel (Server)

---

# ✨ Main Features

## 🔐 Authentication System
- User registration with:
  - Name
  - Email
  - Photo URL
  - Password
- User login using Email/Password.
- Google authentication support.
- Protected routes for authenticated users.
- Password validation:
  - Minimum 6 characters
  - At least one uppercase letter
  - At least one lowercase letter
- User profile displayed in the navbar after login.
- Success and error messages using React Toastify.

---

## 🏠 Homepage Features
- Responsive navigation bar.
- Dynamic hero/banner slider.
- Featured rooms section.
- Interactive hotel location map using React Leaflet.
- Latest user reviews section.
- Special offers and promotions popup.
- Additional attractive sections for better user engagement.
- Responsive footer.
- Custom 404 error page.

---

## 🛏️ Room Management Features
- View all available hotel rooms.
- Server-side room filtering by price range.
- Detailed room information page.
- Room availability checking system.
- Users can view room reviews and ratings.
- Booking system with date selection.

---

## 📅 Booking Features
- Booking confirmation modal with room summary.
- Users can select booking dates.
- Prevents booking unavailable rooms.
- My Bookings page for logged-in users.
- Update booking date functionality.
- Cancel booking with confirmation modal.
- Booking cancellation validation based on booking date.
- Room becomes available again after cancellation.

---

## ⭐ Review System
- Users can submit reviews only for booked rooms.
- Review includes:
  - Username
  - Rating (1-5)
  - Comment
  - Timestamp
- Latest reviews displayed first.
- Reviews shown on room details page.

---

# 📂 Project Structure

```
Bookoro/
│
├── public/
│   └── images, icons, static files
│
├── src/
│   │
│   ├── assets/
│   │   └── Images and media files
│   │
│   ├── Components/
│   │   ├── Navbar
│   │   ├── Footer
│   │   ├── Banner
│   │   ├── RoomCard
│   │   └── Shared Components
│   │
│   ├── Pages/
│   │   ├── Home
│   │   ├── Rooms
│   │   ├── RoomDetails
│   │   ├── Login
│   │   ├── Register
│   │   └── MyBookings
│   │
│   ├── Routes/
│   │   ├── Router Setup
│   │   └── Private Routes
│   │
│   ├── Context/
│   │   └── Authentication Context
│   │
│   ├── Hooks/
│   │   └── Custom Hooks
│   │
│   ├── Utils/
│   │   └── Helper Functions
│   │
│   ├── Firebase/
│   │   └── Firebase Configuration
│   │
│   └── main.jsx
│
├── .env
├── package.json
└── README.md
```

---

# 📦 Dependencies Used

```json
{
  "@tailwindcss/vite": "^4.1.8",
  "aos": "^2.3.4",
  "axios": "^1.9.0",
  "date-fns": "^4.1.0",
  "firebase": "^11.9.0",
  "framer-motion": "^12.17.0",
  "leaflet": "^1.9.4",
  "lottie-react": "^2.4.1",
  "react": "^19.1.0",
  "react-awesome-reveal": "^4.3.1",
  "react-dom": "^19.1.0",
  "react-icons": "^5.5.0",
  "react-leaflet": "^5.0.0",
  "react-router": "^7.6.2",
  "react-toastify": "^11.0.5",
  "sweetalert2": "^11.6.13",
  "swiper": "^11.2.8",
  "tailwindcss": "^4.1.8"
}
```

---

# ⚙️ How to Run Locally

Follow these steps to run the project on your local machine:

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/bookoro-client.git
```

### 2️⃣ Go to the project directory

```bash
cd bookoro-client
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Create Environment Variables

Create a `.env` file in the root directory and add:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_API_URL=your_server_url
```

### 5️⃣ Start the development server

```bash
npm run dev
```

The project will run on:

```
http://localhost:5173
```

---

# 🔗 Important Links

🌍 **Live Website:**  
https://bookoro-app.web.app

💻 **Client Repository:**  
https://github.com/MasadRayan/Bookoro-Client

🖥️ **Server Repository:**  
https://github.com/MasadRayan/Bookoro-Server

---

# 🔒 Security Features

✅ Firebase configuration secured using environment variables.  
✅ MongoDB credentials secured using environment variables.  
✅ JWT authentication implemented for private routes.  
✅ Protected API routes with authentication verification.

---

# 🎨 UI/UX Highlights

✨ Fully responsive for mobile, tablet, and desktop.  
✨ Modern hotel booking interface.  
✨ Smooth animations using Framer Motion and AOS.  
✨ Clean spacing, alignment, and recruiter-friendly design.  
✨ Interactive components for better user experience.

---

## 👨‍💻 Developer

**Masad Rayan**

Built React, Node.js, Express & MongoDB.
