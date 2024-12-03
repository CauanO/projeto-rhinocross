## Status do Projeto

[![Completo](https://img.shields.io/badge/Projeto-Completo-green)](#)

---

# RhinoCross - Sistema de Gestão de Academia de Crossfit

## Sobre o Projeto

O **RhinoCross** é um sistema desenvolvido para auxiliar na gestão de academias de crossfit, especialmente no gerenciamento de planos, mensalidades e interações com clientes. Este sistema visa proporcionar uma experiência eficiente e organizada para administradores e usuários.

---

## Funcionalidades

- Página inicial interativa com apresentação da empresa.
- Informações sobre o que é crossfit, com vídeos interativos.
- Demonstração e gerenciamento de planos (mensais, trimestrais e anuais).
- Formulário para cadastro de novos clientes.
- Localização da academia integrada no site.
- Integração com o sistema "Tecnofit" para gerenciamento geral.

---

## Tecnologias Utilizadas

- **HTML**
- **CSS**
- **JavaScript**
- **Node.js**
- **Express.js**
- **Express-Handlebars**
- **Body-Parser**

---

## Instalação

1. **Clone o repositório**:
   ```bash
   git clone <url-do-repositorio>
   cd rhinocross
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor**:
   ```bash
   npm start
   ```

4. **Acesse o sistema** em [http://localhost:8081](http://localhost:8081).

---

## Dependências

As dependências utilizadas no projeto estão listadas no arquivo `package.json`:

```json
{
  "dependencies": {
    "body-parser": "^1.20.2",
    "express": "^4.19.2",
    "express-handlebars": "^7.1.2",
    "mysql2": "^3.9.7",
    "sequelize": "^6.37.3"
  }
}
```

---

## Estrutura do Projeto

- `app.js`: Arquivo principal que inicializa o servidor e configurações.
- `src/views/`: Páginas HTML renderizadas com Handlebars.
- `src/models/`: Modelos utilizados para o banco de dados.
- `public/`: Arquivos estáticos (CSS, imagens, etc.).

---

## Escopo da Aplicação

O escopo foi planejado utilizando ferramentas simples, como o Paint da Microsoft, para garantir um desenvolvimento prático e objetivo. Ele inclui:

- **Página inicial (index)**: Banner interativo, vídeos e informações sobre a academia.
- **Formulários**: Para cadastro e gerenciamento de clientes.
- **Planos**: Apresentação de planos com interação.
- **Contato**: Informações e formulário para contato com a academia.
