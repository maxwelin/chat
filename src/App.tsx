import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./Providers/AuthContext";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import ProtectedRoute from "./Components/ProtectedRoute";
import Chat from "./Components/Chat";
import NotFound from "./Components/NotFound";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/chat" element={<Chat />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </>
  );
}

export default App;
