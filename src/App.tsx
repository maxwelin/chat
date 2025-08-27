import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./Providers/AuthContext";
import HomePage from "./Pages/HomePage";
import ProtectedRoute from "./Components/ProtectedRoute";
import NotFound from "./Components/NotFoundComponents/NotFound";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import ChatPage from "./Pages/ChatPage";
import { ChatContextProvider } from "./Providers/ChatContext";
import ChatRoomsPage from "./Pages/ChatRoomsPage";
import EditPage from "./Pages/EditPage";
import DeletePage from "./Pages/DeletePage";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ChatContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/chatrooms" element={<ChatRoomsPage />} />
                <Route path="/profile/edit" element={<EditPage />} />
                <Route path="/profile/delete" element={<DeletePage />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </ChatContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
