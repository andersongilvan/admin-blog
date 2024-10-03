import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api.js";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();

  const tokenExist = localStorage.getItem("token");
  

  useEffect(() => {
    if (!tokenExist) {
      navigate("/");
    }
  }, []);

  async function login(data) {
    try {
      const response = await api.post("/user/login", {
        email: data.email,
        password: data.password,
      });

      const token = response.data.token;
      const userName = response.data.userName;

      // Salva no localStorage

      localStorage.setItem("token", token);
      localStorage.setItem("userName", userName);

      setToken(token);
      setUserName(userName);

      return response.data;
    } catch (error) {
      error.response.data;
    }
  }

  async function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/");
  }

  return (
    <authContext.Provider
      value={{ token, tokenExist, userName, login, logout }}
    >
      {children}
    </authContext.Provider>
  );
};
