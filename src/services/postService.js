
import api from "./api";

export async function createPost(data, token) {

  console.log("funcao createPost: ", data);

  try {
    const response = await api.post(
      "/posts",
      {
        titulo: data.title,
        descricao: data.description,
        conteudo: data.content,
        thumb: data.image,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return response.data;
  } catch (error) {
    console.log("ERRO -> ", error);
    throw error;
  }
}

export async function getAllPosts(token) {
  try {
    const response = await api.get("/posts", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("ERRO AO BUSCAR POSTS: ", error.message);
    throw error;
  }
}

export async function deletePost(idPost, token) {
  try {
    await api.delete(`/posts/${idPost}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error("Erro ao deletar o post: ", error.message);
    throw error;
  }
}

 export async function postByID(idPost, token) {
    try {
         const response = await api.get(`/posts/${idPost}`, {headers: {Authorization: `Bearer ${token}`}})
         return response.data
     } catch (error) {
         console.log(`ERRO: ${error}`);
        
         throw error
     }
 }

export async function updatePost(data, idPost, token) {
   
    try {
         const response = await api.put(`/posts/${idPost}`,{
            titulo: data.title,
            descricao: data.description,
            conteudo: data.content,
            thumb: data.image,
        }, {headers: {Authorization: `Bearer ${token}`}})

        return response.data;
       
    } catch (error) {
        console.error("Erro ao atualizar o post:", error.response.data.message);
        throw error; 
    }
}


