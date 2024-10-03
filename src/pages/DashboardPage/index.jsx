import ButtonLink from "../../components/ButtonLink";
import ContainerOptions from "../../components/ContainerOptions";

const DashboardPage = () => {
  return (
    <ContainerOptions>
      <ButtonLink url={"/posts"}>POSTS</ButtonLink>
      <ButtonLink url={"/create-post"}>CRIAR UM POST</ButtonLink>
      <ButtonLink url={"/projects"}>PROJETOS</ButtonLink>
      <ButtonLink url={"/projects/create"}>CRIAR UM PROJETO</ButtonLink>
    </ContainerOptions>
  );
};
export default DashboardPage;
