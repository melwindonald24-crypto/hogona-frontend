import { AuthProvider } from "./auth/context/authContext.jsx";
import { AuthPage } from "./auth/pages/AuthPage.jsx";

function App() {

  return (<AuthProvider>
    <AuthPage/>
  </AuthProvider>
  )
}

export default App
