### BACK END

O **WJT Máquinas** é uma plataforma full-stack desenvolvida para gerenciamento e controle de estoque de máquinas e ferramentas. O sistema conta com controle de autenticação estrito e níveis de acesso (RBAC), permitindo que apenas usuários com a função de administrador (`ADMIN`) realizem alterações críticas como criação, edição e exclusão de produtos.

---

## Estrutura do Projeto

O repositório é dividido de forma modular em duas aplicações principais:
* **`BackEnd/`**: API RESTful responsável pelas regras de negócio, autenticação e persistência de dados.
---

##  Tecnologias Utilizadas

### **Back-end**
 **Runtime:** Node.js

 **Framework:** Express (TypeScript)

 **Linguagem:** TypeScript

 **Autenticação:** JWT (JSON Web Tokens)

 **Banco de Dados:** SQLlite 

---

## Execução

### Configuração do Back-end

1. Abra o terminal e escolha o cmd(command prompt) ou bash para utilizar os comandos corretamente:
   ```bash ou cmd
   cd BackEnd

   npm install

   npx prisma generate

   npm run dev

2. Acessando o test.http, você encontra todas as areás:
   ### USUÁRIOS
   ```
   cadastro // o cadastro do admin só ocorre no back-end.
   login
   atuailizar
   deletar
   ``` 

   ### PRODUTOS
   ```
   criar
   atualizar
   deletar
   ```
   ### CATEGORIAS
   ```
   criar
   ```

3. Contas Test:
   ### Login
   ```
   ADMIN: admin@wjt.com // é um email exclusivo do site mas ele não muda nada, você pode só criar uma conta admin com email normal.

   CLIENTE: fulano@email.com
   CLIENTE: fulana@email.com
   ETC
   ```
