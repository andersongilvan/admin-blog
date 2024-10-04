import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageDefault from "../pages/Pagedefault";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";

import { AuthProvider } from "../context/AuthContext";
import PagePost from "../pages/PagePost";
import EditPage from "../pages/EditPage";
import CreatePage from "../pages/CreatePage";
import ProjectPage from "../pages/PageProject";

const Router = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PageDefault />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/create/:path" element={<CreatePage />} />
            <Route path="/edit-page/:id" element={<EditPage />} />
            <Route path="/posts" element={<PagePost />} />
            <Route path="/projects" element={<ProjectPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Router;
