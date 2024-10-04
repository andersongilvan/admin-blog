import { useContext, useEffect, useState } from "react";
import CardPost from "../../components/CardPost";

import { authContext } from "../../context/AuthContext";
import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";
import { useNavigate } from "react-router-dom";
import { deletePost, getAllPosts } from "../../services/postService.js";

const PagePost = () => {
  const { tokenExist, userName } = useContext(authContext);
  const [post, setPost] = useState([]);
  const [load, setLoad] = useState(true);

  const navigate = useNavigate();

  async function loadPosts() {
    try {
      const data = await getAllPosts(tokenExist);
      setPost(data);
      setLoad(false);
    } catch (error) {
      console.log("Erro ao carregar posts", error.message);
    }
  }

  useEffect(() => {
    loadPosts();
  }, []);

  async function deletar(idPost) {
    const confirm = window.confirm("Tem certeza que deseja deletar este post?");

    if (!confirm) return;

    try {
      await deletePost(idPost, tokenExist);
      alert("Post deletado com sucesso!");
      loadPosts();
    } catch (error) {
      alert("Falha ao deletar!");
      console.log("Erro ao deletar post:", error.message);
    }
  }

  async function edit(idPost) {
   
    navigate(`/edit-page/${idPost}`);
  }

  return (
    <>
      <Container>
        {load ? (
          <p>Carregando...</p>
        ) : post.length > 0 ? (
          post.map((post) => (
            <CardPost
              key={post.id}
              post={post}
              userName={userName}
              deletar={deletar}
              edit={edit}
            />
          ))
        ) : (
          <h2>Não há posts</h2>
        )}
      </Container>
      <ButtonLink url={"/dashboard"}>Dashboard</ButtonLink>
    </>
  );
};
export default PagePost;
