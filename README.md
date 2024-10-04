# Sistema Admin do Blog

Este é o **Sistema Admin** do seu blog, desenvolvido para gerenciar seus **projetos** e **posts** de forma simples e eficiente. A aplicação é responsável pelo **CRUD** (Criar, Ler, Atualizar e Deletar) dos projetos e posts, possibilitando o cadastro dos seus trabalhos e a organização do conteúdo do blog de maneira dinâmica e responsiva.

## Tecnologias Utilizadas

### Frontend:
- **[React](https://reactjs.org/)** com **[Vite](https://vitejs.dev/)**: Utilizado para construir a interface de usuário de forma rápida e eficiente.
- **[React Router DOM](https://reactrouter.com/)**: Implementação para gerenciar rotas e navegação entre as páginas do sistema de maneira fluida.
- **CSS** com foco em **responsividade**: O design da aplicação se adapta a diferentes tamanhos de tela, oferecendo uma boa experiência em dispositivos móveis e desktops.
- **[Axios](https://axios-http.com/)**: Biblioteca usada para realizar requisições HTTP ao backend de forma eficiente e simplificada.
- **Páginas Dinâmicas**: As páginas são renderizadas dinamicamente, exibindo dados como projetos e posts de acordo com as informações do banco de dados.

### Backend:
- **[Node.js](https://nodejs.org/)** e **[Express](https://expressjs.com/)**: O backend foi desenvolvido utilizando Node.js com o framework Express, facilitando a criação de rotas e a lógica do servidor.
- **[MongoDB](https://www.mongodb.com/)**: Banco de dados NoSQL utilizado para armazenar os projetos e posts do blog de maneira eficiente.

## Funcionalidades

- **CRUD de Projetos**: 
  - Criar novos projetos, listar projetos já cadastrados, editar informações e deletar projetos.
  
- **CRUD de Posts**:
  - Criar, listar, editar e excluir posts do blog, permitindo que o conteúdo seja atualizado dinamicamente.

- **Autenticação de Administradores** (via backend): Para acessar o sistema, é necessário realizar login com credenciais válidas, garantindo que apenas usuários autorizados possam fazer alterações no conteúdo.

## Como Executar o Projeto

### Frontend:

1. Clone o repositório:
    ```bash
    git clone https://github.com/andersongilvan/admin-blog
    ```

2. Navegue até o diretório do frontend:
    ```bash
    cd sistema-admin-blog/frontend
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Execute o projeto:
    ```bash
    npm run dev
    ```

### Backend:

1. Navegue até o diretório do backend:
    ```bash
    cd sistema-admin-blog/backend
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Execute o servidor:
    ```bash
    npm start
    ```

## Estrutura do Projeto

O projeto está dividido em duas partes: **frontend** e **backend**. O frontend é responsável pela interface e interações do usuário, enquanto o backend lida com a lógica de negócios, gerenciamento de dados e integração com o banco de dados.

```bash
sistema-admin-blog/
├── frontend/
│   ├── src/
│   ├── public/
│   └── ...
├── backend/
│   ├── routes/
│   ├── models/
│   └── ...
└── README.md
