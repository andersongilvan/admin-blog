import style from "./style.module.css";
import { FaRegUser } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import Button from "../Button";

const LoginForm = ({ handleLoginsSubmit, register, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit(handleLoginsSubmit)} className={style.form}>
      <div className={style.containerInput}>
        <input
          type="text"
          placeholder="E-mail"
          {...register("email")} required
        />
        <FaRegUser className={style.user} />
      </div>
      <div className={style.containerInput}>
        <input
          type="password"
          placeholder="Senha"
          {...register("password")} required
        />
        
        <FiLock className={style.lock} />
      </div>
      
      <Button>Login</Button>
    </form>
  );
};
export default LoginForm;
