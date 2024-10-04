import ContainerOptions from "../../components/ContainerOptions/index.jsx";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createPost } from "../../services/postService.js";
import { useContext } from "react";
import { authContext } from "../../context/AuthContext.jsx";
import CreationForm from "../../components/CreationForm/index.jsx";
import CreationProjectForm from "../../components/CreationProjectForm/index.jsx";
import Container from "../../components/Container/index.jsx";
import { create } from "../../services/projectService.js";
import ButtonLink from "../../components/ButtonLink/index.jsx";

const CreatePage = () => {
  const { path } = useParams();

  console.log("path: ", path);

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

 async function handeleProjectSubmit(dataProject) {
    console.log("data project ", dataProject);

    try {
      const response = await create(dataProject, tokenExist)
      alert("Projet criado com sucesso!")
      navigate("/projects")
    } catch (error) {
      alert(error.message)
      console.log("ERRO: ", error.message);
      
    }
    
  }

  if (path === "post") {
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
  }

  else if (path === "project") {
    return (
      <Container>
        <h1>Criação de projetos</h1>
        <CreationProjectForm
          register={register}
          handleSubmit={handleSubmit}
          handleProjectSubmit={handeleProjectSubmit}
        />
      </Container>
    );
  }

  else return (
    <>
    <p>ERROR 404 Página não encontrada</p>
    <ButtonLink url={"/dashboard"}>Dashboard</ButtonLink>
    </>
  ) 
};

export default CreatePage;
