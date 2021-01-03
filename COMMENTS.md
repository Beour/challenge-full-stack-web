# Teste Grupo A Educação

## Arquitetura 

### Servidor

    Tentei ao máximo manter os conceitos separados entre Rotas e Serviços. Onde as rotas são responsáveis por gerenciar os serviços (em forma de models) de conexão ao banco e de gerenciamento de erros.
    Já os serviços são responsáveis pelas buscas propriamente ditas no banco. Utilizei para tal um banco mySQL construído localmente e utilizando a ferramenta phpMyadmin para administrá-lo


### FrontEnd

    No front estruturei em forma de componentes, que são gerenciados pelo controller (app.vue). Cada componente é responsável exclusivamente pelas ações definidas
- Edit: Editar um registro selecionado
- Student: Cadastrar um aluno novo
- Home: Listagem e exclusão de registros. Também é a conexão ao Edit

## Bibliotecas utilizadas no projeto

- Express
- Vuetify
- Axios
- Cors
- BodyParser
- vee-validate
- vue-router

## O que eu melhoraria

- Validação server-side dos dados de entrada
- Finalização da classe de validação e mensagem de erros no backend


## Requisitos não entregues

