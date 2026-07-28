# Hogona Frontend

Hogona Frontend is a React and Vite application that is being set up with an authentication layer. It contains the foundation for logging in, registering, logging out, and sharing authentication state through React Context.

## Tech stack

- React 19
- Vite 8
- Axios for HTTP requests
- ESLint with the React Hooks and React Refresh rules

## Project structure

```text
src/
|-- auth/
|   |-- components/       # Login and registration UI components
|   |-- hooks/            # Auth-related React hooks and handlers
|   `-- services/         # Requests to the backend auth API
|-- context/              # Shared authentication state
|-- App.jsx               # Root application component
`-- main.jsx              # React entry point
```

## Getting started

### Prerequisites

- Node.js 20 or later
- An authentication backend running locally or at a reachable URL

### Install dependencies

```bash
npm install
```

### Configure the backend URL

Create a `.env` file in the project root:

```env
VITE_BACKEND_URL=http://localhost:3000
```

Vite only exposes variables prefixed with `VITE_` to browser code. Restart the development server after editing this file.

### Start the development server

```bash
npm run dev
```

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Creates an optimized production build in `dist/`. |
| `npm run preview` | Serves the production build locally. |
| `npm run lint` | Checks the project with ESLint. |

## Authentication API contract

The auth service sends credentialed `POST` requests to the configured backend:

| Action | Endpoint | Expected response used by the frontend |
| --- | --- | --- |
| Login | `/login` | An object containing `user`. |
| Register | `/register` | An object containing `message`. |
| Logout | `/logout` | An object containing `message`. |

Because requests use `withCredentials: true`, the backend must be configured to allow credentials from the frontend origin.

## Current status

The project has the authentication state, request service, and handler foundations in place. The root `App` component and form components are currently placeholders, so the authentication flow still needs to be connected to visible UI before it can be used by an end user.
