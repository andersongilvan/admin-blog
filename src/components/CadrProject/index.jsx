import style from "./style.module.css";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

 const CardProject = ({ project, deleteProject, edit }) => {
  return (
    <div className={style.CardPost}>
      <header>
        <img src={project.imagem} alt={project.titulo} className={style.img} />
      </header>
      <div className={style.body}>
        <div className={style.containerTitle}>
          <h2> {project.titulo} </h2>
        </div>
        <div className={style.containerDescriprion}>
          <p> {project.descricao} </p>
        </div>
      </div>
      <footer>
        <div className={style.containerIcons}>
        <MdDeleteOutline className={style.icon} onClick={() => deleteProject(project._id)} />
        <CiEdit className={style.icon} onClick={() => edit(project._id)} />
        </div>
         <a href={project.link} target="_blank" rel="noopener noreferrer">Link</a>
        
         
      </footer>
    </div>
  );
};
export default CardProject;
