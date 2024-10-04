import Button from "../Button";
import style from "./style.module.css";

const CreationProjectForm = ({register, handleSubmit, handleProjectSubmit}) => {
  return (
    <form onSubmit={handleSubmit(handleProjectSubmit)} className={style.form}>
      <div className={style.containerInput}>
        <label>titulo</label>
        <input type="text" {...register("title")} required />
      </div>
      <div className={style.containerTextArea}>
        <label>descricao</label>
        <textarea {...register("description")} required />
      </div>
      <div className={style.containerInput}>
        <label>link do projeto</label>
        <input type="text" {...register("link")} required />
      </div>
      <div className={style.containerInput}>
        <label>imagem de capa</label>
        <input type="text" {...register("image")} required />
      </div>
      <Button>Enviar</Button>
    </form>
  );
};
export default CreationProjectForm;

/* titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    link: { type: String, required: true },
    imagem: { type: String, required: true }
     */
