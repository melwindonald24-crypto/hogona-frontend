# Hogona Frontend

An in-progress React frontend for Hogona. The project establishes the client-side foundations for account registration, sign-in, sign-out, access-token storage, and authenticated API requests.

> **Project status:** Early development. The authentication service and supporting hooks are present, but the application shell, routes, and form components are not yet connected into a usable interface.

## Highlights

- React 19 application powered by Vite 8
- Authentication state shared with React Context
- Login, registration, and logout request helpers built with Axios
- Form state prepared with React Hook Form
- Access-token refresh helper for authenticated requests
- ESLint configured with React Hooks and React Refresh rules

## Technology

| Area | Tooling |
| --- | --- |
| UI | React, React DOM |
| Build tooling | Vite, `@vitejs/plugin-react`, React Compiler preset |
| Forms | React Hook Form |
| Routing | React Router DOM |
| HTTP | Axios |
| Code quality | ESLint, React Hooks rules, React Refresh rules |

## Project structure

```text
.
|-- shared/
|   `-- services/
|       `-- authenticator.js       # Token refresh and authenticated-request helper
|-- src/
|   |-- auth/
|   |   |-- components/            # Login and registration component placeholders
|   |   |-- context/
|   |   |   `-- authContext.js     # User, loading, and access-token state
|   |   |-- hooks/
|   |   |   |-- useAuthForm.js     # Form mode and submission orchestration
|   |   |   `-- useAuthHandlers.js # Login, registration, and logout handlers
|   |   `-- services/
|   |       `-- authServices.js    # Requests to the auth backend
|   |-- App.jsx                    # Root component (currently a placeholder)
|   `-- main.jsx                   # React entry point
|-- .env                           # Local configuration; never commit this file
|-- eslint.config.js
|-- package.json
`-- vite.config.js
```

## Prerequisites

- Node.js 20 or later
- npm 10 or later
- A backend that implements the authentication endpoints listed below

## Installation

Install dependencies:

```bash
npm install
```

Create a `.env` file at the repository root:

```env
VITE_BACKEND_URL=http://localhost:3000
```

`VITE_BACKEND_URL` is the base URL of the backend API. Vite only exposes environment variables whose names begin with `VITE_`; do not put secrets in this file, because values exposed to Vite are included in the browser bundle.

Restart the development server after changing environment variables.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Creates an optimized production bundle in `dist/`. |
| `npm run preview` | Serves the production bundle locally. |
| `npm run lint` | Runs ESLint across the project. |

## Authentication API integration

All requests include `withCredentials: true`, so the backend must permit credentialed requests from the frontend origin and configure CORS accordingly.

| Action | Method | Endpoint | Response consumed by the client |
| --- | --- | --- | --- |
| Login | `POST` | `/login` | An object containing `user` and `accessToken` |
| Register | `POST` | `/register` | An object containing `message` |
| Logout | `POST` | `/logout` | An object containing `message` |
| Refresh token | `POST` | `/refresh` | A refreshed access-token response |

The shared `authenticator` service adds an `Authorization: Bearer <token>` header, retries requests after a 401 response by refreshing the token, and redirects to `/login` if refresh fails.

## Current development notes

The following items need to be completed before the frontend is ready for use:

- Create `src/index.css` or remove its import from `src/main.jsx`; the current production build cannot resolve that file.
- Connect `AuthProvider` around the application root.
- Build and render the login and registration form components.
- Configure routes and connect the installed React Router dependency.
- Resolve the current React Hooks lint warning in `useAuthHandlers.js`.
- Add tests for the auth hooks, request services, and UI flows.

## Verification

Use these commands before opening a pull request:

```bash
npm run lint
npm run build
```

At the time this README was updated, lint reports one warning and the build is blocked by the missing `src/index.css` file described above.

## Contributing

Keep changes small and focused. Do not commit `.env` files, generated `dist/` output, or dependency folders. Run lint and a production build locally whenever the project is in a buildable state.
