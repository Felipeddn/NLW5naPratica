NLW#5 - Next Week Level

# Dia 1 - Fundamentos do NodeJS 

Educadora | Daniele Evangelista - Dani

Aluno | Felipe Dantas dos Nascimento

## Projeto - Criar uma aplicação Back-End

[] Overview da trilha NodeJS

[x] O que faremos nessa aula?
[x] Dicas para ir até o fim do projeto
    [x] fazer parte da comunidade
    Local onde é possível tirar dúvidas
    [x] Tirar dúvidas 
    [x] Se conectar com outros devs
    [x] Se apresentar no #network 
    [x] Desafio com prêmios exclusivos
        [x] Um código por aula
        [x] Para participar, basta ir até o fim, com foco ...
[] Apresentação do projeto
Será um chatbot de suporte onde ele ajuda o cliente e armazena todas as conversas


[x] conteúdo técnico
[x] configuração do ambiente
[x] O que é o NodeJS?
* criado pelo rain down
* O criador queria uma linguagem não bloqueante Non-blocking IO (sem bloqueio de entrada e saída)
* O Event loop é um single Thread mas ele delega para Posix Async Threat que suporta várias solicitações
* No momento do event loop ele é single Thread - que vai distribuindo essas requisições para 4 Threads, esses 4 pode ser editados considerando a máquina
* Isso melhora o processamento.
* Se usamos uma linguagem com Blocking devemos esperar uma requisição por vez.
* O Node tem módulos básicos que facilita muito nossos trabalhos.
* O processamento do NodeJS é rapido

[x] O que é uma API (Application Programing Interface)
Um modelo que podemos usar em nossas aplicações - onde o front end faz uma requisição e o back retorna um objeto JSON 
Um back end pode servir para diversos clientes! Mobile e Desktop por exemplo   
cada rota representa um comando
Exemplos de API
calculo de frete
validação de cpf
validação de cep

Back - End pode consumir API alem dos clientes Front e mobile

[x] Por que usar o Typescript?
O TypeScript é um superset que da um recurso de tipagem forte para o JavaScript
Podemos definir os retornos e o tipo de recursos

## Conteúdo Técnico

[] Criar o projeto com NodeJS
    [] dependencias e comandos
    - começar projeto
    yarn init
    - instalar express
    yarn add express
    - instalar tipagem do express
    yarn add types/express -D
    - instalar o typescript
    yarn add typescript -D
    - cria um arquivo de configuração do TypeScript
    yarn tsc --init
    - um "tradutor" para o node entender "import" "from" ao inves de "module.exports" "require()"
    yarn add ts-node-dev -D

    [] - METODOS HTTP que utilizaremos
    GET = Buscas
    POST = Criação
    PUT = Update
    DELETE = excluir
    PATCH = alterar uma informação expecifica

    [x] Criar primeira rota
    [x] Conhecer os tipos de métodos
    [x] Criar rotas POST
    os navegadores por padrão funcionam apenas com o método get, por isso usaremos o insomnia para o método post
    [x] Configurar o insomnia
    Para solucionar essa questão do método post no navegador vamos usar a aplicação insomnia

## Atalhos
Ctrl + K e depois M

## Recap da aula
O que aprendi na aula?

os comandos yarn init, yarn add
package.json - script e visualizar dependências
um pouco sobre dependências do Node

conceitos do que é o NodeJS
conceitos do que é uma API, um pouco do conceito cliente servidor
conceitos do que é um TypeScript e seus beneficios
criei uma rota com do verbo HTTP GET e visualizei seu efeito no navegador
criei uma rota com do verbo HTTP POST e visualizei seu efeito no aplicativo Insomnia

## O que veremos na próxima aula?

implementaremos banco de dados 
vamos criar um banco de dados do zero
criar tabelas  
entender conceitos de migration

## código para brinde!

missaoespacial