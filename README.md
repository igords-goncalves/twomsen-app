# Server Side Rendering APP

[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![linkedin](https://badgen.net/badge/icon/linkedin?icon=linkedins&label)](https://www.linkedin.com/in/igords-goncalves/)

Aplicação para registro de frase motivacionais, nome e email do criador.

## 🗨 Sobre o Projeto
Este projeto é uma aplicação Server-Side Rendering (SSR) desenvolvida para aprimorar as habilidades e o entendimento do funcionamento de monolitos e aplicações antigas. O foco principal é explorar o processo de renderização de páginas no servidor e a comunicação direta entre o backend e o frontend.

| 💙 | 👀  |
| -------- | -------- |
| ![Linha 2, Coluna 1](https://github.com/igords-goncalves/twomsen-app/assets/79734585/e8c2ca69-af51-4f8e-b00f-86afa6a9f99c) | ![Linha 2, Coluna 2](https://github.com/igords-goncalves/twomsen-app/assets/79734585/f4f5eac1-9129-4372-b3f2-a682deeb51be) |
| ![Linha 3, Coluna 1]() | ![Linha 3, Coluna 2]() |

## Objetivos principais
- Praticar o desenvolvimento de aplicações SSR, onde as páginas são renderizadas no servidor antes de serem enviadas ao cliente.
- Entender os conceitos e benefícios de monolitos, uma arquitetura de software que reúne todas as funcionalidades em um único sistema.
- Utilizar a linguagem JavaScript tanto no frontend quanto no backend, empregando o Node.js para criar o servidor e a renderização das páginas.
- Explorar a tecnologia de templates EJS (Embedded JavaScript), que permite a geração de HTML dinâmico no lado do servidor.
- Experimentar o framework Express.js para facilitar a criação das rotas do servidor e a comunicação com o cliente.
- Construir o backend do projeto seguindo o padrão Model-View-Controller (MVC), para uma estrutura organizada e fácil manutenção.
- Utilizar o banco de dados MySQL ou MariaDB para armazenar e recuperar os dados da aplicação.
- Explorar o framework Tailwind CSS para estilizar a interface, possibilitando a criação de designs modernos e responsivos.

## Funcionalidades

- Renderização das páginas no servidor com dados do banco de dados, eliminando a necessidade de requisições HTTP adicionais.
- Exibição de frases motivacionais armazenadas no banco de dados na página inicial.
- Formulário de submissão para cadastrar novas frases motivacionais no banco de dados.
- Utilização de Tailwind CSS para a estilização dos elementos da página, proporcionando uma experiência visual agradável.

## Estrutura do projeto

- `/src`: Contém todos os arquivos do projeto, incluindo as pastas para os modelos (models), visões (views) e controladores (controllers).
- `/src/models`: Responsável pela comunicação com o banco de dados, contendo o arquivo `database.js` para a configuração da conexão e o `userModel.js` para representar a tabela de usuários.
- `/src/views` : Contém os arquivos EJS que representam as páginas da aplicação, como a página inicial e o formulário de submissão.
- `/src/controllers`: Responsável por manipular as requisições e respostas do servidor, contendo o arquivo `userController.js` para gerenciar a criação e recuperação de dados dos usuários.
- `/public`: Armazena os arquivos estáticos, como o CSS gerado pelo Tailwind.

## 💻 Como Instalar e Executar

Clone este repositório em sua máquina local.
````
git clone https://github.com/igords-goncalves/twomsen-app.git
````
Execute o comando comando no terminal para instalar as dependências necessárias.
````
npm install
````
Execute o comando comando no terminal para iniciar o projeto.
````
npm run dev
````

## 🤝 Como Contribuir

Faça um fork deste repositório - [*Como criar um fork*](https://docs.github.com/en/get-started/quickstart/fork-a-repo)

Crie uma nova branch com a sua contribuição
````
git checkout -b minha-contribuicao
````
Commit suas alterações
````
git commit -m "Descrição das suas alterações"
````
Faça um push para a sua branch
````
git push origin minha-contribuicao
````
Abra um pull request - [*Como abrir um pull request*](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)


## ⚙ Principais Tecnologias Utilizadas

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)

![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## Licença
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.
