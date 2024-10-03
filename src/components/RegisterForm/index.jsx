import Button from "../Button";
import style from "./style.module.css";

const RegisterForm = ({ handlePostSubmit, register, handleSubmit, err }) => {
  return (
    <form onSubmit={handleSubmit(handlePostSubmit)} className={style.form}>
      <div className={style.containerInput}>
      
        <input
          type="text"
          placeholder="Titulo..."
          {...register("title", { required: "O campo é obrigatório" })}
        />
        {err.title && <span className={style.spanInput}>{err.title.message}</span>}
      </div>
      <div className={style.containerTextArea}>
        <textarea
          placeholder="Desrição..."
          {...register("description", { required: "O campo é obrigatório" })}
        />
         {err.description && <span className={style.spanTextArea}> {err.description.message} </span>}
      </div>
      <div className={style.containerTextArea}>
        <textarea
          placeholder="Conteúdo..."
          {...register("content", { required: "O campo é obrigatório" })}
        />
        {err.content && <span className={style.spanTextArea}> {err.content.message} </span>}
      </div>
      <div className={style.containerInput}>
        <input
          type="text"
          placeholder="URL da imagem..."
          {...register("image", { required: "O campo é obrigatório" })}
        />
        {err.image && <span className={style.spanInput}> {err.image.message} </span>}
      </div>
      <Button>Enviar</Button>
    </form>
  );
};
export default RegisterForm;
