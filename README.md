# Vouchr
🧩 Problem Statement
NGOs and non-profit organizations often struggle with managing large numbers of volunteers, tracking event participation, and coordinating tasks efficiently. The lack of a centralized, structured system leads to poor communication, missed opportunities, and ineffective resource utilization — especially during high-impact campaigns or crisis response efforts.

📌 Project Name
Vouchr – A Volunteer Management System

Vouchr is built to help NGOs streamline volunteer registration, event coordination, and real-time participation tracking — all from a single, purpose-driven platform.

Our quote: "Powering social impact through better volunteer coordination."

1. 👥 User Module
Feature	API
Register/Login (JWT)	POST /auth/register, POST /auth/login
Roles: Volunteer/Admin	role field in user
Profile Update	PUT /users/:id
List volunteers by skill/impact	GET /volunteers?skill=cleanup

2. 📆 Event Module
Feature	API
Create event (admin)	POST /events
Volunteer signup	POST /events/:id/signup
Limit volunteers per event	Enforced via logic
Filter events	GET /events?city=bangalore
Upload event posters (optional)	POST /events/upload

3. ✅ Attendance & Geo Check-in
Feature	API
QR or Geo check-in	POST /events/:id/checkin (send location)
Auto mark hours	via backend logic
Track total hours	GET /users/:id/hours
📍 For geo-tagging: We’ll use latitude, longitude and calculate check-in radius.

4. 📊 Badges + Report Cards
Feature	API
Auto-badges (e.g., 50+ hours)	GET /users/:id/badges
Download volunteer report	GET /users/:id/report.pdf

5. 💬 Real-Time Event Chat (WebSockets)
Feature	API
Join event group chat	WebSocket /events/:id/chat
Send messages live	Socket emit
Admin notices	System broadcast via socket
📚 Learn: WebSocket + Express + Socket.IO

6. 💳 Payment Integration (for Donations or Volunteer Kits)
Feature	API
Donate for cause	POST /donate
Razorpay/Stripe integration	Backend logic
Generate receipt	Auto-download / Email
📚 Learn: Payment gateways, webhook verification

7. 🔐 Admin Dashboard APIs
Feature	API
View all volunteers	GET /admin/volunteers
View event stats	GET /admin/events/:id/stats
Export CSV reports	GET /admin/events/export


## Overall folder structure
Vouchr/
├── server/   → Node.js + Express + Prisma + PostgreSQL
├── client/   → React + Tailwind + Axios
├── README.md → Docs
└── .gitignore


## Frontend folder structure
client/
├── public/
│   └── index.html
│
├── src/
│   ├── components/               # Reusable UI elements
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── BadgeCard.jsx
│
│   ├── pages/                    # Route-level screens
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Events.jsx
│   │   ├── EventDetails.jsx
│   │   ├── Profile.jsx
│   │   ├── Chat.jsx
│   │   ├── AdminDashboard.jsx
│   │   └── Donation.jsx
│
│   ├── services/                 # Axios calls to backend
│   │   ├── authService.js
│   │   ├── eventService.js
│   │   └── donationService.js
│
│   ├── hooks/                    # Custom hooks
│   │   └── useAuth.js
│
│   ├── contexts/                 # React Context (auth, etc.)
│   │   └── AuthContext.jsx
│
│   ├── App.jsx                   # Main app
│   ├── main.jsx                  # ReactDOM entry
│   └── index.css
│
├── .env
├── package.json
└── README.md


## Backend Folder structure
server/
├── prisma/
│   └── schema.prisma             # DB schema (tables/models)
│
├── src/
│   ├── controllers/              # API handler logic
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   │   ├── event.controller.js
│   │   ├── attendance.controller.js
│   │   ├── chat.controller.js
│   │   └── donation.controller.js
│   │
│   ├── routes/                   # Route definitions
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   ├── event.routes.js
│   │   ├── attendance.routes.js
│   │   ├── chat.routes.js
│   │   └── donation.routes.js
│   │
│   ├── middlewares/             # Auth, validation, etc.
│   │   ├── authMiddleware.js
│   │   ├── roleMiddleware.js
│   │   └── errorHandler.js
│   │
│   ├── services/                 # Business logic layer
│   │   ├── user.service.js
│   │   ├── event.service.js
│   │   ├── donation.service.js
│   │   └── attendance.service.js
│   │
│   ├── utils/                    # Helper functions
│   │   ├── generateToken.js
│   │   ├── locationUtils.js
│   │   └── paymentUtils.js
│   │
│   ├── sockets/                  # WebSocket (chat system)
│   │   └── index.js
│   │
│   ├── config/                   # Prisma, DB, etc.
│   │   ├── db.js
│   │   └── socket.js
│   │
│   ├── index.js                  # Entry point
│   └── app.js                    # Express app instance
│
├── .env
├── package.json
└── README.md


migration script
```
npx prisma migrate dev --name init
npx prisma generate
```



Plan: 
✅ Step 1: Authentication & User Roles (✔️ DONE)
Goal: Register/Login with JWT, set up basic middleware and roles
🔧 Already done:
POST /auth/register
POST /auth/login
Role support (Volunteer/Admin)

2. Step 2: User Profile Management - 11-12.30
Goal: Allow volunteers to update their profiles and view skill-based volunteers
GET /users/:id – Get profile
PUT /users/:id – Update profile
GET /volunteers?skill=education – Search/filter volunteers
📚 Learn: Prisma filters, basic query params

3. Step 3: Event Management Module (Admin) - 12.30-2
Goal: Admin creates and publishes events
POST /events – Create event
GET /events – List all events (filters by city/date)
GET /events/:id – Event details
POST /events/upload – Upload posters (optional)
📚 Learn: Relational DB design (event ↔ volunteers), image upload with Multer

4. Step 4: Volunteer Signup for Events 3-4.30
Goal: Volunteers join available events (with volunteer limits)
POST /events/:id/signup
Enforce max-volunteer-per-event logic
📚 Learn: Event-user many-to-many mapping, validation logic

5. Step 5: Geo Check-in + Attendance 4.30-6
Goal: Volunteers check in using geolocation
POST /events/:id/checkin – Send location
GET /users/:id/hours – Get total contributed hours
📚 Learn: Geo-fencing (radius), calculating distances using Haversine formula

6. Step 6: Auto Badges & Report Cards 6.30-8
Goal: Recognize contributions with badges, generate PDF reports
GET /users/:id/badges
GET /users/:id/report.pdf
📚 Learn: PDFKit or Puppeteer, badge logic from backend

7. Step 7: Real-Time Event Chat (Socket.IO)  9-10.30
Goal: Enable event-specific chats
Socket join: /events/:id/chat
socket.emit("message", data)
Admin broadcast: "Event starts in 10 mins"
📚 Learn: WebSocket basics, Socket.IO server/client integration

🟨 Step 8: Donations & Payment Gateway  2-4
Goal: Allow donations or volunteer kit payments
POST /donate
Use Stripe or Razorpay
Webhook: Confirm payment
Auto-generate receipt (PDF or email)
📚 Learn: Payment API, webhook handling, confirmation flows

🟧 Step 9: Admin Dashboard APIs  4-6
Goal: Admin can analyze and export platform data
GET /admin/volunteers
GET /admin/events/:id/stats
GET /admin/events/export – Download CSV
📚 Learn: Aggregations with Prisma, CSV export using json2csv or fast-csv

🟩 Step 10: Final Touches & Cleanup
Goal: Test, secure, document
Add route protection middleware
Input validation (Zod or Joi)
Error handling layer
Write README.md with screenshots
Optional: Deploy on Render/Vercel
📚 Learn: Clean code practices, deployment, middleware patterns