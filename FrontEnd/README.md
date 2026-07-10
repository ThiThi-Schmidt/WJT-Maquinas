### FRONT END

O **WJT Máquinas** é uma plataforma full-stack desenvolvida para gerenciamento e controle de estoque de máquinas e ferramentas. O sistema conta com controle de autenticação estrito e níveis de acesso (RBAC), permitindo que apenas usuários com a função de administrador (`ADMIN`) realizem alterações críticas como criação, edição e exclusão de produtos.

---

## Funcionalidades Principais

 **Autenticação Segura:** Tela de login integrada a um contexto global de autenticação (`AuthContext`).

 **Persistência de Sessão:** Gerenciamento de tokens JWT utilizando o `localStorage` do navegador para manter o usuário conectado.

 **Níveis de Acesso (RBAC):** Redirecionamento inteligente baseado no cargo do usuário (Administradores são levados à rota `/adm`, enquanto clientes comuns permanecem na interface padrão).

 **Gerenciamento de Estoque (CRUD):** Painel administrativo que possibilita listar, criar, editar e excluir produtos em tempo real.

 **Tratamento de Erros:** Validações de formulários na interface gráfica e exibição amigável de mensagens vindas da API.

---

## Tecnologias Utilizadas

* **Framework:** Next.js (App Router)
* **Biblioteca Principal:** React
* **Linguagem:** TypeScript 
* **Estilização:** Tailwind CSS 

---

## Execução

1. Abra o terminal e escolha o cmd(command prompt) ou bash para utilizar os comandos corretamente:
   ```bash
   cd FrontEnd

   npm install

   npm run dev

## Utils/config.ts ou use ipconfig e altere a API para Endereço IPv4
   export const API_BASE_URL = "http://localhost:3001"


2. Como mecher no site:
   ```
   Entre na area de login, logue com uma conta existente mas se não tiver porfavor seja redirecionando para o cadastro crie sua conta corrente, para acessar 100% o site.
   
   Logo após os cliente ou você logar, os clientes seram redirecionandos para a página principal e vão ter a capacidade de adicionar ao carrinho os produtos, mas se você logar como administrador você é redirecionado para a area admin onde vai ter uma lista de todos o pedidos e vai poder por enquanto apenas mudar a classificação das encomendas.

   Logado como admin, no topo da area vai estar um botão de produtos que ao clicar você será redirecionando para uma area onde poderá criar, atualizar e excluir os produtos e ainda ter uma lista de todos criados e depois você pode acessar seu site para ver seu novo produto criado.
   ``` 

3. Coisas importantes!!:
   ```
   Criar a conta administradora no back-end.
   Apenas o login funciona com adm no front-end // Óbvio.
   Forma de pagamentos? Não temos.
   Reclamações ou pedidos por email não estão funcionando por enquanto.
   

4. Contas Test:
   ### Login
   ```
   ADMIN: admin@wjt.com // é um email exclusivo do site mas ele não muda nada, você pode só criar uma conta admin com email normal.

   CLIENTE: fulano@email.com
   CLIENTE: fulana@email.com
   ETC
   ```