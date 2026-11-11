<div align="center">

# ✅ Lista de Tarefas

**To-do list com front-end em Angular e API REST em Node.js/Express.**

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

</div>

## 💡 Sobre

Lista de tarefas simples: o front-end em Angular (standalone, com SSR) consome uma API em Express que guarda as tarefas em memória. Dá para adicionar, listar, concluir e remover tarefas.

> O repositório traz o código-fonte do app Angular (`src/`) e a API (`backend/`), mas não os arquivos de configuração do workspace Angular (`package.json`, `angular.json`). Para rodar o front-end, copie `src/` para um projeto criado com `ng new` (com SSR).

## ✨ Funcionalidades

- Adicionar tarefa
- Listar tarefas
- Marcar tarefa como concluída
- Remover tarefa

## 🛠️ Tecnologias

- **Front-end:** Angular, TypeScript, Angular SSR
- **Back-end:** Node.js, Express, CORS

## 📌 Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/tarefas` | Lista as tarefas |
| `POST` | `/tarefas` | Adiciona uma tarefa |
| `PUT` | `/tarefas/:id` | Marca a tarefa como concluída |
| `DELETE` | `/tarefas/:id` | Remove a tarefa |

## 🚀 Como rodar

API (porta 3000):

```bash
git clone https://github.com/KevinLopes23/Lista-de-Tarefas.git
cd Lista-de-Tarefas/backend
npm install
node server.js
```

O front-end consome a API em `http://localhost:3000/tarefas` (configurado em `src/app/api.service.ts`).

## 📄 Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE).

## 👤 Autor

Feito por [Kevin Lopes](https://github.com/KevinLopes23)
