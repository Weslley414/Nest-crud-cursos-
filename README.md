# Nest CRUD Cursos

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

**Projeto back-end:** CRUD completo de cursos desenvolvido em **NestJS**, focado em boas práticas de desenvolvimento, modularização e construção de APIs RESTful escaláveis.

---

## 📌 Descrição
Projeto de estudo que implementa funcionalidades de **CRUD (Create, Read, Update, Delete)** para gerenciamento de cursos, permitindo praticar:  

- Estrutura modular do NestJS  
- Criação de rotas RESTful  
- Validação de dados com DTOs  
- Conexão com banco de dados PostgreSQL  
- Boas práticas de código e organização  

Ideal para aprendizado de **NestJS**, desenvolvimento de APIs escaláveis e apresentação em portfólio.

---

## 🚀 Tecnologias usadas
- Node.js  
- NestJS  
- TypeScript  
- PostgreSQL  
- Class-validator (validação de dados)  
- TypeORM (ORM para banco de dados)  
- [Outras dependências se houver]

---

## 📂 Estrutura do projeto
src/
├─ modules/
│ ├─ cursos/
│ │ ├─ controllers/ # Rotas da API
│ │ ├─ services/ # Lógica de negócio
│ │ └─ dtos/ # Validação de dados
├─ main.ts # Ponto de entrada do projeto

yaml
Copiar código
> Estrutura modular, organizada e escalável.

---

## 🎯 Funcionalidades
### Endpoints da API

| Método | Rota           | Descrição                 | Exemplo de payload |
|--------|----------------|---------------------------|------------------|
| POST   | `/cursos`      | Criar novo curso          | `{ "nome": "Curso A", "descricao": "Descrição do curso" }` |
| GET    | `/cursos`      | Listar todos os cursos    | - |
| GET    | `/cursos/:id`  | Buscar curso por ID       | - |
| PATCH  | `/cursos/:id`  | Atualizar curso           | `{ "nome": "Curso Atualizado" }` |
| DELETE | `/cursos/:id`  | Deletar curso             | - |

> Os DTOs garantem que os dados recebidos estejam validados antes de serem processados.

---

## ⚙️ Como rodar
1. Clone o repositório:
```bash
git clone https://github.com/Weslley414/Nest-crud-cursos-.git
