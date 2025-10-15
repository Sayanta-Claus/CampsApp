#  CampsApp

A full-stack campground listing web application built using Node.js, Express, MongoDB, EJS, and Bootstrap. Users can register, log in, post campgrounds, leave reviews, and more.


---

## 🌐 Live Demo

[Visit the Live App here](https://campsapp.onrender.com/)


---


##  Features

- User authentication with Passport.js
- CRUD operations for campgrounds
- Star ratings & review system
- Flash messages and form validation
- RESTful routes
- EJS templating and partial views
- MongoDB Atlas integration
- Responsive design with Bootstrap

---

##  Tech Stack

| Layer      | Tech                            |
|------------|---------------------------------|
| Backend    | Node.js, Express                |
| Views      | EJS templates                   |
| Database   | MongoDB with Mongoose           |
| Auth       | Passport.js (Local Strategy)    |
| Hosting    | Railway                         |
| CSS        | Bootstrap 5                     |

---

##  Local Development Setup

### 1. Clone the repository


git clone https://github.com/Sayanta-Claus/CampsApp.git
<br>
cd your-repo

### 2. Install dependencies


npm install


### 3. Configure environment variables

Create a `.env` file in the root directory:
<br>
Initialize your environment variables like MongoDB_URI, Cloudinary key and Maptiler_api_key

### 4. Run the app locally

npm start

Then visit: [http://localhost:3000](http://localhost:3000)

---

## 🚀 Deployment on Render

### Steps

- Push your repo to GitHub, go to [https://render.com/](render.com) → New → Web Service, connect GitHub and pick your branch.
- Set Environment: Node; Build Command: npm install; Start Command: npm start (Render provides PORT).
- Add env vars (MONGODB_URI, CLOUDINARY_*, MAPTILER_KEY, SESSION_SECRET, etc.) in Environment tab, then create the service and open the Render URL when deploy finishes.

---


## 🙋‍♂️ Feedback & Contributions

This project is built for learning purposes. Feedback and improvements are welcome!

---



