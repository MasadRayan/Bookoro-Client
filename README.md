# 🌟 Bookoro
 --> CLIENT SIDE LIVE LOCATION: 🔗 https://bookoro-app.web.app

--> Bookoro is a modern hotel booking platform that enables users to discover, review, and book hotel rooms seamlessly with interactive design and secure authentication.

# 🔐 Authentication Features

1. New users can register with name, email, photoURL, and secure password.
2. Existing users can login using email/password or Google social login.
3. Protected routes: Only logged-in users can access My Bookings and booking/review features.
4. Password validation with uppercase, lowercase, and minimum 6 characters enforced.
5. Success and error notifications using React Toastify.
6. User profile photo displayed in navbar after login.

# 🏠 Home Page Features

1. Responsive navbar with navigation links to Rooms, My Bookings(only logged in user), Login/Register.
2. Dynamic banner slider with title, description, and button linking to Rooms page.
3. Interactive map showing hotel location using React Leaflet.
4. Featured rooms section showing top 6 rooms with "Review" buttons linking to details.
5. User reviews carousel displaying latest reviews sorted by timestamp.
6. Popup modal showing special offers and promotions on homepage load.
7. Two additional attractive and relevant sections to engage users.
8. Custom 404 page with friendly image and navigation back to home.

# 📱 Responsive Layout

* Fully responsive design optimized for mobile, tablet, and desktop.
* Built with Tailwind CSS and Daisy UI for smooth adaptive UI.

# 🔄 Routing Structure

* / → Home (banner + featured rooms + map + reviews + extra sections)
* /rooms → Rooms listing with server-side price filter
* /rooms/:id → Room details + booking + reviews
* /login & /register → Authentication pages
* /my-bookings → User’s booked rooms (protected route)
*  * → 404 Not Found Page

# 🛌 Room & Booking Features

1. Display all rooms from MongoDB with images and details.
2. Booking modal with date picker for selecting booking date.
3. Booking allowed only if the room is available.
4. My Bookings page to update or cancel bookings with confirmation modals.
5. Booking cancellation allowed only up to 1 day before booking date.
6. Review modal for users to post rating, comment, and see their username read-only.


# 🌈 UI/UX & Animations

* Smooth animations with Framer Motion and React Awesome Reveal.
* Toast notifications for actions using React Toastify and SweetAlert2.
* Interactive sliders/carousels implemented with Swiper.
* Scroll animations with AOS.
* Engaging Lottie animations integrated.

# 🔧 Tools & Packages Used

1. React (v19.1.0)
2. Tailwind CSS & @tailwindcss/vite (v4.1.8)
3. Firebase (v11.9.0) Authentication
4. MongoDB (secured via env variables)
5. Axios (v1.9.0) for API calls
6. React Router (v7.6.2)
7. React Leaflet & Leaflet (v5.0.0 / v1.9.4) for maps
8. Framer Motion (v12.17.0)
9. React Awesome Reveal (v4.3.1)
10. React Icons (v5.5.0)
11. React Toastify (v11.0.5)
22. SweetAlert2 (v11.6.13)
13. Swiper (v11.2.8)
14. Date-fns (v4.1.0) for date manipulation
15. AOS (v2.3.4)
16. Lottie React (v2.4.1)

# 🖥️ Backend & Server Info

1. Backend built with Node.js, Express, and MongoDB.
2. JWT authentication for securing private routes.
3. Server-side filtering of rooms by price.
4. Environment variables used for Firebase config and MongoDB URI.
