import { useContext } from "react";
import ButtonLink from "../../components/ButtonLink";
import ContainerOptions from "../../components/ContainerOptions";
import LogoutButton from "../../components/LogoutButton";
import { authContext } from "../../context/AuthContext";


const DashboardPage = () => {
  const { logout } = useContext(authContext);

  return (
    <ContainerOptions>
      <ButtonLink url={"/posts"}>POSTS</ButtonLink>
      <ButtonLink url={"/create-post"}>CRIAR UM POST</ButtonLink>
      <ButtonLink url={"/projects"}>PROJETOS</ButtonLink>
      <ButtonLink url={"/projects/create"}>CRIAR UM PROJETO</ButtonLink>
      <LogoutButton logout={logout}>Sair</LogoutButton>
    </ContainerOptions>
  );
};
export default DashboardPage;
