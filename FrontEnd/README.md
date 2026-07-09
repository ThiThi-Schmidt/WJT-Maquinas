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

### **Pré-requisitos**
Certifique-se de ter o **Node.js** (versão 18 ou superior) instalado em sua máquina.

###

1. Abra o terminal e escolha o cmd(command prompt) ou bash para utilizar os comandos corretamente:
   ```bash
   cd FrontEnd

   npm install

   npm run dev

## Utils/config.ts ou usse ipconfig e altere a API para Endereço IPv4
   export const API_BASE_URL = "http://localhost:3001"


2. Para fazer login aperte no botão de usuário no header do site, e se não tiver conta escolha a classificação cliente ou administrador na area do cadastro:

   Todos podem fazer o cadastro do admin e login por enquanto...


   