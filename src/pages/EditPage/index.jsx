import { useNavigate, useParams } from "react-router-dom";
import { authContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { postByID, updatePost } from "../../services/postService";
import Container from "../../components/Container";
import { useForm } from "react-hook-form";
import CreationForm from "../../components/CreationForm";

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
      <CreationForm
        register={register}
        handleSubmit={handleSubmit}
        handler={handlerPostSubmit}
      />
    </Container>
  );
};
export default EditPage;


