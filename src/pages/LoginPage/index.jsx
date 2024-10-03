import { useForm } from "react-hook-form";
import "../../app.css";
import LoginForm from "../../components/LoginForm";
import api from "../../services/api.js";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  async function handleLoginsSubmit(data) {
    try {
      const response = await api.post("/user/login", {
        email: data.email,
        password: data.password,
      });
      const token = response.data.token;
      const userName = response.data.userName;

      localStorage.setItem("token", token);
      localStorage.setItem("userName", userName);
      console.log("response ", response);

      navigate("/dashboard");
    } catch (error) {
      console.log("erro ", error.response.data.message);

      alert(error.response.data.message);
    }
  }

  return (
    <LoginForm
      handleLoginsSubmit={handleLoginsSubmit}
      handleSubmit={handleSubmit}
      register={register}
      err={errors}
    />
  );
};
export default LoginPage;
