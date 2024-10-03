import { useForm } from "react-hook-form";

import LoginForm from "../../components/LoginForm";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../context/AuthContext.jsx";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const { login } = useContext(authContext);

  async function handleLoginsSubmit(data) {
    try {
      const response = await login(data);
      navigate("/dashboard");
    } catch (error) {
      alert(error.data);
      console.log(error.response.data);
    }
  }

  return (
    <LoginForm
      handleLoginsSubmit={handleLoginsSubmit}
      handleSubmit={handleSubmit}
      register={register}
    />
  );
};
export default LoginPage;
