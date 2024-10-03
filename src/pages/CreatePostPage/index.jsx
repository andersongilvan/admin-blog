import ContainerOptions from "../../components/ContainerOptions";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/index.jsx";
import { useForm } from "react-hook-form";
import { createPost } from "../../services/postService.js";
import { useContext } from "react";
import { authContext } from "../../context/AuthContext.jsx";

const CreatePostPage = () => {
  const navigate = useNavigate();
  const { tokenExist } = useContext(authContext);
  const { register, handleSubmit } = useForm();

  async function handlerPostSubmit(data) {
    try {
      await createPost(data, tokenExist);

      alert("Post criado com sucesso!");
      navigate("/posts");
    } catch (error) {
      console.log("ERRO ", error);
      alert("Falha ao criar o post, tente novamente.");
    }
  }
  return (
    <ContainerOptions>
      <h1>Criação de posts</h1>

      <form onSubmit={handleSubmit(handlerPostSubmit)} className="form">
        <div className="container-input">
          <label>Titulo</label>
          <input type="text" {...register("title")} required />
        </div>

        <div className="container-input">
        <label>Descrição</label>
          <textarea {...register("description")} required />
        </div>

        <div className="container-input">
        <label>Post</label>
          <textarea {...register("content")} required />
        </div>

        <div className="container-input">
        <label>URL da imagem</label>
          <input type="text" {...register("image")} required />
        </div>

        <Button>Enviar</Button>
      </form>
    </ContainerOptions>
  );
};

export default CreatePostPage;

/*
const postsSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: [true, "O campo TITULO é obrigatório"] },
    descricao: {
      type: String,
      required: [true, "O campo DESCRIÇÃO é obrigatória"],
    },
    conteudo: {
      type: String,
      required: [true, "O campo CONTEÚDO é obrigatória"],
    },
    thumb: { type: String, required: [true, "O campo THUMB é obrigatória"] },
  },
  { versionKey: false, timestamps: true }
);

const post = mongoose.model("posts", postsSchema);

export default post;

*/

// const response = await api.post("/posts", {
//   titulo: data.title,
//   descricao: data.description,
//   conteudo: data.content,         thumb: data.image
//  }, {headers: {Authorization: `Bearer ${tokenExist}`}})
//   alert("Post criado com sucesso!")
//  navigate("/posts")
