<h1 align="center">House Rules</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/Gui1703/House-Rules-Nuxt?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/Gui1703/House-Rules-Nuxt?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Gui1703/House-Rules-Nuxt?color=56BEB8">
</p>

<p align="center">
  <a href="#dart-about">Sobre</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Características</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requerimentos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Inicialização</a> &#xa0; | &#xa0;
  <a href="https://github.com/Gui1703" target="_blank">Autor</a>
</p>

<br>

## :dart: Sobre ##

O projeto foi concebido e implementado utilizando Nuxt 2 Options como base tecnológica. Após a fase de autenticação na tela inicial, a funcionalidade é executada por meio da action do Vuex, transferindo o access_token para o state. Em seguida, o usuário é redirecionado para a interface principal, denominada 'house_rules'. Nesta interface, ocorre a integração com a API fornecida, sendo que o token é incluído em cada requisição, obtido a partir do state.

As operações de edição e exclusão de uma regra foram implementadas em um arquivo separado, utilizando o modal do Bootstrap para a interação do usuário. Além disso, foram criados componentes reutilizáveis, como input, select e button, com o intuito de abstrair as funcionalidades e prevenir a duplicação de código.

Para garantir a segurança do sistema, foi desenvolvida uma middleware que impede o avanço no site caso o usuário não esteja autenticado, proporcionando uma experiência de usuário mais segura e controlada.

## :sparkles: Características ##

:heavy_check_mark: Vuex;\
:heavy_check_mark: Bootstrap;\

## :rocket: Tecnologias ##

The following tools were used in this project:

- [Nuxt2](https://v2.nuxt.com/)
- [Vuex](https://vuex.vuejs.org/)
- [Bootstrap](https://getbootstrap.com/)

## :white_check_mark: Requerimentos ##

Antes de iniciar :checkered_flag:, você precisa ter [Git](https://git-scm.com) e [Node](https://nodejs.org/en/) instalados.

## :checkered_flag: Inicialização ##

```bash
# Clone o projeto
$ git clone https://github.com/Gui1703/house_rules

# Acesso
$ cd house_rules

# Instalar dependencias
$ yarn

# Rodar o projeto
$ yarn dev

# O servidor será iniciado em <http://localhost:3000>
```


Feito com :heart: por <a href="https://github.com/Gui1703" target="_blank">Guilherme</a>

&#xa0;

<a href="#top">Voltar ao topo</a>
