# Byte & Beans — Coffee Store

This repository contains a small e-commerce-like example for a coffee shop built with React (Vite) as the client and a minimal Express + MongoDB server for product management. The live site is available at: https://coffee-a2be7.web.app/

## Table of contents
- Overview
- Tech stack
- Repository layout
- Key pages and components
- Client routes and loader behavior
- Server API (endpoints & payloads)
- Environment variables
- Local development (run & test)
- Build & deploy notes
- Security, caveats & future improvements
- Troubleshooting
- Contacts

## Overview

Byte & Beans is a small single page application that showcases a coffee product catalog with basic admin functionality (add, update, delete) and authentication using Firebase. The project is split into two parts:

- coffee_client — React front-end using Vite, Tailwind/DaisyUI and Firebase Authentication.
- coffee-store-server — Simple Express server exposing REST endpoints backed by MongoDB.

The client fetches the coffee list from the server, and authenticated users can manage products.

## Tech stack

- Frontend: React 19 + Vite
- Styling: TailwindCSS + DaisyUI (utility-first, with custom fonts)
- Routing: react-router-dom (v7)
- Auth: Firebase Authentication (email/password + Google)
- UI icons: react-icons
- Alerts: SweetAlert2
- Backend: Node.js + Express
- DB: MongoDB (Atlas connection used via env vars)

## Repository layout

Top-level folders:

- `coffee_client/` — React app. Key files:
  - `package.json` — client dependencies and scripts (dev, build, preview)
  - `src/main.jsx` — app entry and route definitions
  - `src/Layout.jsx` — common header, nav and footer layout
  - `src/components/` — components (auth, provider, Add/Update forms, Admin products, firebase config)
  - `src/pages/` — route pages (Home, Shop, Cart, ProductDetail, About)
  - `src/components/firebase/firebase.config.js` — firebase initialization; requires env vars

- `coffee-store-server/` — Express API server. Key files:
  - `index.js` — server entry; exposes REST endpoints against MongoDB
  - `package.json` — server scripts and dependencies

## Key pages and components (analysis)

- `Layout.jsx` — Top-level layout used by `react-router`. Implements responsive navigation, mobile drawer, login/logout display and site branding (logo from `src/assets/more/logo1.png`). It reads the authenticated user from `AuthContext` and conditionally shows the Dashboard link.

- Authentication
  - `components/provider/AuthProvider.jsx` wraps the app and provides `user`, `loading`, `register`, `login`, `loginWithGoogle`, `logout` using Firebase Auth.
  - `components/auth/Login.jsx` and `components/auth/Registration.jsx` (registration file present in project) implement forms. Login supports Google Sign-in.

- Product management
  - `AddCoffee.jsx` — form to create a new coffee product. Sends a POST to `/coffee` with the form payload.
  - `UpdateCoffee.jsx` — loads a single coffee by id and sends a PUT to `/coffee/:id` to update.
  - `AdminProducts.jsx` — lists all coffees and allows delete (DELETE `/coffee/:id`) and navigation to update.

- Shop/Cart UI
  - `Cart.jsx` — central product listing component used on `/shop` and embedded in the home page. Fetches GET `/coffee` and renders cards with Buy/Wishlist actions. It supports two render modes: `embedded` (used in Home & Shop) and full-page.
  - `Home.jsx` — marketing hero, features, embedded product gallery (uses `Cart` with `embedded` true) and an image gallery.

-## Client routes

Routes are declared in `src/main.jsx` using `createBrowserRouter`.

- `/` (index) — Home page. In development the route loader fetches `GET http://localhost:5000/coffee` (see `src/main.jsx`). In production the app should point to the deployed API (see "Production API" below).
- `/login` — Login page
- `/register` — Registration page
- `/update` — Update form (expects `?id=` query parameter)
- `/cart` — Cart page
- `/shop` — Shop listing (re-uses Cart component)
- `/about` — About page
- `/admin` — Dashboard (protected: wrapped in `PrivateRoute`) — `AdminProducts.jsx`
- `/product/:id` — Product details page
- `/add` — Add product page (protected)

Routing notes:
- `PrivateRoute` is used to restrict admin/add pages to authenticated users. Ensure `AuthProvider` is correctly mounted (it is in `main.jsx`).

## Production API (Vercel)

The server API has been deployed to Vercel and is available at:

- https://byten-beans-1.onrender.com/coffee

Use this base URL in production for all API requests. Recommended approach for the client is to set an environment variable `VITE_API_BASE` to the base host and use it when composing fetch URLs. Example value:

VITE_API_BASE=https://byten-beans-1.onrender.com

Then, in the client, compose calls as:

```
// runtime/build-time in Vite
const apiBase = import.meta.env.VITE_API_BASE || 'http://localhost:5000'
fetch(`${apiBase}/coffee`)
```

This allows local development to use `localhost` while production builds use the Vercel-hosted API.

## Server API (coffee-store-server)

The server is a minimal Express app using the official MongoDB driver. It connects to Atlas using `DB_user` and `DB_pass` env vars.

Endpoints (all under `/`):

- GET /coffee
  - Response: array of coffee documents
- GET /coffee/:id
  - Response: single coffee document (or empty object)
  - Errors: 400 for invalid id
- POST /coffee
  - Body: JSON representing a coffee document. Common fields used by the client:
    - name, quantity, supplier, taste, category, price, chef, details, photo
  - Response: result object containing insertion metadata (insertedId)
- PUT /coffee/:id
  - Body: updated fields to $set in Mongo
  - Response: update result (modifiedCount)
  - Errors: 400 for invalid id
- DELETE /coffee/:id
  - Response: delete result (deletedCount)

Additional endpoints:
- POST /users — inserts user document into `users` collection (used by client if needed)

Server environment & connection string

- The server expects `DB_user` and `DB_pass` in its environment (read from `.env` via dotenv in development). It uses these to build the MongoDB Atlas connection string. Example `.env`:

  DB_user=yourAtlasUser
  DB_pass=yourAtlasPassword
  PORT=5000

Security note: Never commit secrets or credentials to source control. Use environment-specific secrets in production (e.g., cloud provider secret manager).

## Environment variables (client)

The client reads Firebase variables using Vite's import.meta.env. Required variables (see `src/components/firebase/firebase.config.js`):

- VITE_FIREBASE_API_KEY
- VITE_FIREBASE_AUTH_DOMAIN
- VITE_FIREBASE_PROJECT_ID
- VITE_FIREBASE_STORAGE_BUCKET
- VITE_FIREBASE_MESSAGING_SENDER_ID
- VITE_FIREBASE_APP_ID

Create a `.env` (or `.env.local`) in `coffee_client/` with the variables prefixed with `VITE_`. Example:

VITE_FIREBASE_API_KEY=AIza...
VITE_FIREBASE_AUTH_DOMAIN=yourproject.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=yourproject
VITE_FIREBASE_STORAGE_BUCKET=yourproject.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=1234567890
VITE_FIREBASE_APP_ID=1:123:web:abcdef

Server environment (in root of `coffee-store-server`) should include:

DB_user=atlasUser
DB_pass=atlasPassword
PORT=5000

## Local development (quick start)

1. Clone the repo (already in this workspace).

2. Start the server

  - Open a terminal, cd to `coffee-store-server/` and install deps:

  npm install

  - Create a `.env` with `DB_user` and `DB_pass` (see above). For local development you can run a local MongoDB instance and adjust the connection string in `index.js`.

  - Start the server:

  npm start

  The server listens on port 5000 by default.

3. Start the client

  - Open a second terminal, cd to `coffee_client/` and install dependencies:

  npm install

  - Create a `.env` file in `coffee_client/` with the required `VITE_` Firebase variables.

  - Start the dev server:

  npm run dev

  Vite will start (default http://localhost:5173). The app hits the backend at `https://byten-beans-1.onrender.com` — confirm both services are running.

4. Test the app

  - Visit `http://localhost:5173` (or the port Vite reports). Register or login with Firebase to access admin routes.

## Build & Deploy notes

- Client: Run `npm run build` in `coffee_client` to generate production assets (Vite). Deploy the `dist/` output to a static host (Firebase Hosting, Netlify, Vercel, etc.). When deploying the client, ensure the Firebase env vars are provided by the host (Vite's build uses import.meta.env values at build-time).
- Server: The Express server can be deployed to Node hosts (Heroku, Render, Railway, Fly.io, etc.). Provide `DB_user` and `DB_pass` as environment variables on the host.
- CORS / API host: The client currently fetches directly to `https://byten-beans-1.onrender.com`. For production, change client fetch URLs to the deployed API host, or implement a runtime API base via env var (recommended). Example approach: create VITE_API_BASE and use `${import.meta.env.VITE_API_BASE}/coffee`.



## Troubleshooting

- Missing Firebase env variables: `firebase.config.js` throws a helpful error listing missing `VITE_` variables. Add them to `.env` in `coffee_client`.
- Server connection issues: Ensure `DB_user` and `DB_pass` are valid and Atlas IP whitelist allows connections (or use `0.0.0.0/0` while developing, though it is not recommended for production).
- CORS issues: The server includes `cors()` by default. If you see CORS errors, ensure correct origins are allowed or set `origin` option in `cors()`.



