import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageDefault from "../pages/Pagedefault";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import CreatePostPage from "../pages/CreatePostPage";
import { AuthProvider } from "../context/AuthContext";
import PagePost from "../pages/PagePost";
import EditPage from "../pages/EditPage";

const Router = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PageDefault />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/create-post" element={<CreatePostPage />} />
            <Route path="/edit-page/:id" element={<EditPage />} />
            <Route path="/posts" element={<PagePost />} />
          </Route>
          
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Router;
