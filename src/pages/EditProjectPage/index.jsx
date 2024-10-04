import { useNavigate, useParams } from "react-router-dom";
import Container from "../../components/Container";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../context/AuthContext";
import { getByID, update } from "../../services/projectService.js";
import { useForm } from "react-hook-form";

import CreationProjectForm from "../../components/CreationProjectForm/index.jsx";

const EditProjectPage = () => {
  const { id } = useParams();
  const { tokenExist } = useContext(authContext);
  const { register, handleSubmit, setValue } = useForm();
  const [project, setProject] = useState(null);
  const navigate = useNavigate();

  async function getProjectByID() {
    try {
      const response = await getByID(id, tokenExist);
      console.log("response: ", response);
      setProject(response);
      setValue("title", response.titulo);
      setValue("description", response.descricao);
      setValue("link", response.link);
      setValue("image", response.imagem);
    } catch (error) {}
  }

  async function handleProjectSubmit(data) {
    try {
      const response = await update(data, id, tokenExist);
      //  console.log("response: ", response);
      alert("Atualização realizada com sucesso!");
      navigate("/projects");
    } catch (error) {
      alert("Falha na atualização");
      console.error("ERRO: ", error);
    }
  }

  useEffect(() => {
    getProjectByID();
  }, []);

  return (
    <Container>
      <CreationProjectForm
        register={register}
        handleSubmit={handleSubmit}
        handleProjectSubmit={handleProjectSubmit}
      />
    </Container>
  );
};
export default EditProjectPage;
