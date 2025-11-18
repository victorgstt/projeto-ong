# 🌍 Plataforma Digital - ONG 

> "Conectando propósitos, transformando vidas através da tecnologia."

![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Tech](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JS-blue)

## 📖 Sobre o Projeto

Este projeto consiste no desenvolvimento de uma plataforma web completa para uma Organização Não Governamental (ONG). O objetivo é resolver a falta de presença digital no terceiro setor, oferecendo um portal onde a instituição pode divulgar seus projetos, prestar contas e, principalmente, captar novos voluntários.

O desenvolvimento simulou um ambiente profissional, focando em **semântica HTML5**, **arquitetura CSS moderna** e **lógica de programação com JavaScript** (manipulação de DOM, Arrays e Callbacks).

---

## 🚀 Funcionalidades

* **Home Page Dinâmica:** Carregamento de cards de projetos via JavaScript (simulando consumo de API).
* **Sistema de Filtragem:** Página de projetos com filtros por categoria (Educação, Sustentabilidade, etc.) utilizando o método `.filter()`.
* **Validação de Formulários:** Cadastro de voluntários com validação de dados em tempo real no *client-side* antes do envio.
* **Layout Responsivo:** Design adaptável para Mobile, Tablet e Desktop (Mobile First) utilizando CSS Grid e Flexbox.
* **Navegação Semântica:** Estrutura de menus e links acessíveis.

---

## 🛠 Tecnologias Utilizadas

O projeto foi construído utilizando a "tríade" do desenvolvimento web, sem frameworks, para consolidar os fundamentos:

* **HTML5:** Uso estrito de tags semânticas (`<header>`, `<main>`, `<section>`, `<article>`, `<fieldset>`).
* **CSS3:**
    * Variáveis CSS (`:root`) para design system (cores e fontes).
    * Flexbox para alinhamentos de menu e formulários.
    * CSS Grid para galeria de projetos.
    * Media Queries para responsividade.
* **JavaScript (ES6+):**
    * Manipulação do DOM (`document.querySelector`, `innerHTML`).
    * Manipulação de Arrays (`map`, `filter`, `join`).
    * Funções de Callback e Event Listeners.
    * Simulação de Banco de Dados via arquivo JSON/Object (`data.js`).

---

## 📂 Estrutura de Arquivos

A arquitetura de pastas foi organizada para garantir escalabilidade e manutenção:

```text
projeto-ong/
│
├── assets/                  # Imagens e ícones (SVG/PNG)
├── css/
│   ├── global.css           # Reset, variáveis de cor e tipografia
│   ├── layout.css           # Estilos estruturais (Header, Footer, Grids)
│   └── responsive.css       # Ajustes para telas menores
│
├── js/
│   ├── data.js              # "Banco de dados" (Array de Objetos)
│   ├── script.js            # Lógica de renderização da Home
│   └── form-validation.js   # Lógica de validação do formulário
│
├── pages/                   # Páginas internas
│   ├── projetos.html
│   ├── voluntariado.html
│   └── contato.html
│
├── index.html               # Página Principal
└── README.md                # Documentação do Projeto