# Zerodha Full-Stack Web Application

A full-stack web application inspired by Zerodha, built to manage trading activities, portfolios, and real-time dashboards. The project contains three main components: **frontend**, **backend**, and **dashboard**, all integrated to provide seamless user experience.

---

## Table of Contents

* [Project Overview](#project-overview)
* [Folder Structure](#folder-structure)
* [Tech Stack](#tech-stack)
* [Database](#database)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)

---

## Project Overview

This project is designed to simulate a simplified trading platform similar to Zerodha. It allows users to:

* View and manage portfolio holdings.
* Place and track orders.
* Monitor positions in real-time.
* Access a user-friendly dashboard with charts and analytics.

The application is structured into three main folders:

1. **frontend** – React-based client for user interaction.
2. **backend** – Node.js + Express server handling APIs, authentication, and database interaction.
3. **dashboard** – Admin and analytics dashboard built with React for visualizing trading data.

---

## Folder Structure

```
Zerodha/
│
├─ backend/        # Node.js server, API routes, database models
│   ├─ controllers/
│   ├─ models/
│   ├─ routes/
│   ├─ utils/
│   └─ index.js
│
├─ dashboard/      # React dashboard with charts, portfolio, and order management
│   ├─ src/
│   ├─ public/
│   └─ package.json
│
├─ frontend/       # React frontend for main user interface
│   ├─ src/
│   ├─ public/
│   └─ package.json
│
└─ README.md
```

---

## Tech Stack

**Frontend:**

* React.js
* Tailwind CSS / CSS3
* Axios for API requests

**Backend:**

* Node.js
* Express.js
* MongoDB with Mongoose ORM
* JWT for authentication
* bcrypt for password hashing

**Dashboard:**

* React.js
* Chart.js / Recharts for data visualization

**Database:**

* MongoDB (NoSQL database)
* Collections: Users, Orders, Holdings, Positions

---

## Database Setup

1. Install **MongoDB** locally or use a cloud provider like **MongoDB Atlas**.

2. Create a database named `zerodha`.

3. Collections to include:

   * `users` – Stores user authentication and profile info.
   * `orders` – Tracks buy/sell orders.
   * `holdings` – User portfolio holdings.
   * `positions` – Current trading positions.

4. Configure `.env` in `backend/`:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
```

---

## Installation

### Backend

```bash
cd backend
npm install
npm start   # Runs server on http://localhost:5000
```

### Frontend

```bash
cd frontend
npm install
npm start   # Runs frontend on http://localhost:3000
```

### Dashboard

```bash
cd dashboard
npm install
npm start   # Runs dashboard on http://localhost:3001 (or another port)
```

---

## Usage

1. Start the backend server.
2. Start the frontend application.
3. Start the dashboard for analytics.
4. Register a new user and start placing orders or checking holdings.
5. Dashboard provides visual insights of your trades and portfolio.

---

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m "Add feature"`
4. Push to your branch: `git push origin feature-name`
5. Create a Pull Request.

---

## License

This project is **MIT Licensed**. See `LICENSE` for details.

---

> Built with ❤️ by Likhitha J
