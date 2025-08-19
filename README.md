# Web-Horizon-Hackathon — Hotel Room Booking System

A modern, single-page web app to **browse hotels**, **view rich hotel pages**, and **book rooms** from one place. It also **aggregates listings from other platforms** (e.g., Booking, MakeMyTrip, Agoda) so users can compare and book from a **single website**.

---

## ✨ Key Features

- 🔎 **Search & Filter**: City/date/guests, price range, ratings, amenities.
- 🏨 **Hotel Pages**: Photo gallery, room types, amenities, policies, map.
- 🛏️ **Real-time Availability**: Check room availability by date and guests.
- 💳 **Booking Flow**: Select room → guest details → payment (mock/plug-in) → confirmation.
- 🧾 **Bookings Dashboard**: See, modify, or cancel your bookings.
- 🔗 **Multi-Platform Listings**: Show prices/links from other platforms side-by-side.
- 🔐 **Auth**: Email/password login, JWT session (optional).
- 🌓 **Responsive UI**: Built with **React + Material UI** (light/dark).
- 🌐 **i18n-Ready**: Multi-language scaffolding (optional).

---

## 🧱 Tech Stack

- **Frontend**: React (Vite/CRA/Next.js), **Material UI (MUI)**, React Router
- **State**: React Query / Redux Toolkit (choose one)
- **API**: REST/GraphQL backend (Node.js/Express or any), mockable with MSW/JSON Server
- **Auth**: JWT (access/refresh) or NextAuth (if Next.js)
- **Payments**: Stripe/Razorpay sandbox (optional)
- **Maps**: Leaflet/Google Maps (optional)
- **Testing**: Vitest/Jest + React Testing Library
- **Lint/Format**: ESLint + Prettier

> If you only need a frontend demo for the hackathon, you can use **JSON Server** or **MSW** to mock APIs.

---

## 📁 Project Structure (Frontend)


---

## 🚀 Quick Start

### 1) Clone & Install
```bash
git clone https://github.com/gaurav031/Web-Horizon-Hackthone/
cd web-horizon-hackathon
npm install   # or yarn / pnpm
npm run dev

