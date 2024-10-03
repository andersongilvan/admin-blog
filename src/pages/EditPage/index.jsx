import { useNavigate, useParams } from "react-router-dom";
import { authContext } from "../../context/AuthContext";

import { useContext, useEffect, useState } from "react";

import { postByID, updatePost } from "../../services/postService";
import Container from "../../components/Container";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";

const EditPage = () => {
  const navigate = useNavigate();
  const { tokenExist } = useContext(authContext);
  const params = useParams();
  const id = params.id;
  const [post, setPost] = useState(null);

  const { register, handleSubmit, setValue } = useForm();

  async function getPostByID() {
    try {
      const response = await postByID(id, tokenExist);
      setPost(response);
      setValue("title", response.titulo);
      setValue("description", response.descricao);
      setValue("content", response.conteudo);
      setValue("image", response.thumb);
    } catch (error) {
      console.error("Erro ao buscar o post:", error.message);
    }
  }

  async function handlerPostSubmit(data) {
    try {
      const response = await updatePost(data, id, tokenExist);
      alert("Post atualizado com sucesso!");
      navigate("/posts");
    } catch (error) {
      console.error("ERRO: ", error.message);
    }
  }

  useEffect(() => {
    getPostByID();
  }, []);

  return (
    <Container>
      <h1>Edição de posts</h1>
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
    </Container>
  );
};
export default EditPage;
