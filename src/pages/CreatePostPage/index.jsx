import ContainerOptions from "../../components/ContainerOptions";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/index.jsx";
import { useForm } from "react-hook-form";
import { createPost } from "../../services/postService.js";
import { useContext } from "react";
import { authContext } from "../../context/AuthContext.jsx";
import CreationForm from "../../components/CreationForm/index.jsx";

const CreatePostPage = () => {
  const navigate = useNavigate();
  const { tokenExist } = useContext(authContext);
  const { register, handleSubmit } = useForm();

  async function handlerPostSubmit(data) {

    console.log("Data: ", data);
    

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

    <CreationForm 
      handleSubmit={handleSubmit}
      register={register}
      handler={handlerPostSubmit}
    />
    
    </ContainerOptions>
  );
};

export default CreatePostPage;

