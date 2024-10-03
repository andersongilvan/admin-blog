import style from "./style.module.css";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const CardPost = ({ post, userName, deletar, edit }) => {
  return (
    <div className={style.CardPost}>
      <header>
        <img src={post.thumb} alt={post.titulo} className={style.img} />
      </header>
      <div className={style.body}>
        <div className={style.containerTitle}>
          <h2> {post.titulo} </h2>
        </div>
        <div className={style.containerDescriprion}>
          <p> {post.descricao} </p>
        </div>
        <div className={style.containerContent}>
          
        </div>
      </div>
      <footer>
        <div className={style.containerIcons}>
        <MdDeleteOutline className={style.icon} onClick={() => deletar(post._id)} />
        <CiEdit className={style.icon} onClick={() => edit(post._id)} />
        </div>
         @{userName}
         
      </footer>
    </div>
  );
};
export default CardPost;
