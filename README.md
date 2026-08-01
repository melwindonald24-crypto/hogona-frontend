# Hogona Frontend

Hogona is a React and Vite frontend with a focused authentication experience. It provides registration and login forms, client-side form validation, loading feedback, API error messages, and helpers for authenticated requests with access-token refresh.

## Features

- Login and registration modes powered by React Hook Form
- Shared authentication state through React Context
- Loading state prevents duplicate form submissions while a request is pending
- Backend validation and request errors displayed in the form
- Axios-based authentication requests with credential support
- Access-token storage, refresh, and retry support for authenticated requests
- Tailwind CSS styling and the Fraunces display font

## Tech stack

| Area | Technology |
| --- | --- |
| UI | React 19, React DOM |
| Build tooling | Vite 8, React Compiler, Tailwind CSS |
| Forms | React Hook Form |
| HTTP client | Axios |
| Routing | React Router DOM |
| Linting | ESLint, React Hooks, React Refresh |

## Prerequisites

- Node.js 20 or later
- npm 10 or later
- A running Hogona backend API

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root:

   ```env
   VITE_BACKEND_URL=http://localhost:3000
   ```

3. Start the backend API on the configured address.

4. Start the frontend:

   ```bash
   npm run dev
   ```

5. Open the URL printed by Vite, normally `http://localhost:5173`.

> `VITE_BACKEND_URL` is exposed to the browser by Vite. Do not store secrets in this variable or in any other `VITE_` variable. Restart the development server after editing `.env`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Creates a production-ready bundle in `dist/`. |
| `npm run preview` | Serves the production bundle locally. |
| `npm run lint` | Runs ESLint across the project. |

## Authentication flow

`AuthPage` selects the login or registration form. `useAuthForm` coordinates form state and submission, while `useAuthHandlers` updates shared authentication state and delegates requests to `authServices`.

```text
LoginForm / RegisterForm
          |
          v
      useAuthForm
          |
          v
    useAuthHandlers
          |
          v
     authServices
          |
          v
      Backend API
```

For a failed request, the service error is propagated to `useAuthForm`, where it is stored as a React Hook Form root error and displayed below the fields. Switching between login and registration clears that root error.

## Backend API contract

The frontend sends credentialed requests (`withCredentials: true`). Configure backend CORS to allow the frontend origin and credentials.

| Action | Method | Endpoint | Expected response |
| --- | --- | --- | --- |
| Login | `POST` | `/login` | `{ user, accessToken }` |
| Register | `POST` | `/register` | `{ message }` |
| Logout | `POST` | `/logout` | `{ message }` |
| Refresh token | `POST` | `/refresh` | `{ accessToken }` |

Non-successful responses should use an HTTP error status and return an `error` field, for example:

```json
{ "error": "Please register before signing in." }
```

## Project structure

```text
src/
├── auth/
│   ├── components/       # Auth form, fields, buttons, errors, and layout
│   ├── context/          # Shared authentication state
│   ├── hooks/            # Form orchestration and auth request handlers
│   ├── pages/            # Authentication page
│   └── services/         # Login, registration, and logout API calls
├── App.jsx               # Application root and AuthProvider
└── main.jsx              # React entry point

shared/services/
└── authenticator.js      # Authenticated request and token-refresh helper
```

## Verification

Run these checks before committing changes:

```bash
npm run lint
npm run build
```

## Contributing

Keep changes small and scoped. Do not commit `.env`, `dist`, or `node_modules`. Ensure linting and production builds succeed before opening a pull request.
