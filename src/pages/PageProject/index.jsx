import { useContext, useEffect, useState } from "react";
import Container from "../../components/Container";
import { authContext } from "../../context/AuthContext";
import { get, remove } from "../../services/projectService.js";
import CardProject from "../../components/CadrProject";
import { useNavigate } from "react-router-dom";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [load, setLoad] = useState(true);
  const { tokenExist } = useContext(authContext);
  const navigate = useNavigate();

  async function getAllProjects() {
    try {
      const response = await get(tokenExist);
      setLoad(false);
      setProjects(response);
     // console.log("response: ", response);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    getAllProjects();
  }, []);

  async function deleteProject(id) {
    const confirm = window.confirm(
      "Tem certeza que deseja deletar este projeto?"
    );
    try {
      if (confirm) {
        const response = await remove(id, tokenExist);
        alert(response.data.message);
        getAllProjects();
      }
      return;
    } catch (error) {
      console.log("ERRO: ", error.response.data);
    }
  }

   function edit(projectID) {
   // console.log("id post: ", projectID);
    navigate(`/edit-project/${projectID}`)
  }

  return (
    <Container>
      {load ? (
        <p>Carregando...</p>
      ) : projects.length > 0 ? (
        projects.map((project) => (
          <CardProject
            deleteProject={deleteProject}
            key={project._id}
            project={project}
            edit={edit}
          />
        ))
      ) : (
        <p>nao há projetos</p>
      )}
    </Container>
  );
};
export default ProjectPage;
