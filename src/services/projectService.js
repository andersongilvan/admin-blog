import api from "./api.js";

export async function create(data, token) {
  try {
    const response = await api.post(
      "/projects",
      {
        titulo: data.title,
        descricao: data.description,
        link: data.link,
        imagem: data.image,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    console.log("ERRO: ", error);
    throw error;
  }
}

export async function get(token) {
  try {
    const response = await api.get("/projects", {
      headers: {
        Authorization: `Bearer ${token}
        `,
      },
    });
    return response.data;
  } catch (error) {
    console.log("ERRO: ", error);

    throw error;
  }
}

export async function remove(id, token) {
  try {
    const response = await api.delete(`/projects/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    throw error;
  }
}

/* routes.get("/projects", auth, ProjectController.getAll);
routes.post("/projects", auth, ProjectController.create);
routes.get("/projects/:id", auth, ProjectController.getByID);
routes.put("/projects/:id", auth, ProjectController.updatet);
routes.delete("/projects/:id", auth, ProjectController.delete);
 */

/* titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    link: { type: String, required: true },
    imagem: { type: String, required: true }
     */
