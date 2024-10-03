import Button from "../Button";
import style from "./style.module.css";

const CreationForm = ({ handleSubmit, handler, register }) => {
  return (
    <form className={style.form} onSubmit={handleSubmit(handler)}>
      <div className={style.containerInput}>
        <label>Titulo</label>
        <input type="text" {...register("title")} required />
      </div>
      <div className={style.containerTextArea}>
        <label>Descrição</label>
        <textarea {...register("description")} />
      </div>

      <div className={style.containerTextArea}>
        <label>Post</label>
        <textarea type="text" {...register("content")} required />
      </div>
      <div className={style.containerInput}>
        <label>Titulo</label>
        <input type="text" {...register("image")} required />
      </div>
      <Button>enviar</Button>
    </form>
  );
};

export default CreationForm;
