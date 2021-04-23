NLW#5 - Next Week Level 

# Dia 2 - Iniciando com banco de dados

Educadora | Daniele Evangelista - Dani

Aluno | Felipe Dantas dos Nascimento

## Projeto - Criar uma aplicação Back-End

[x] O que aprendemos ontem
metódos http
Uso do insomnia para usar outros métodos http
[x] O que veremos hoje
Estruturar a aplicaçãopara uso de banco de dados
opções de banco de dados
criaremos tabelas
criaremos repositórios
entenderemos o que são migracions e repositories
[x] Quais são as formas de trabalhar com banco de dados
3 formas de usar banco de dados e tipos de bancos de dados
Bancos relacionais - Postgres, Oracle, MySQL
Bancos não relacionais - MongoDB
A primeira coisa que pensamos para escolher um banco de dados é o tipo dele
No Nosso caso iremos usar um relacional
* Primeira forma - Drivers de Banco de Dados
Exemplo: https://www.postgresql.org/docs/current/tutorial-start.html
"A primeira forma de usar um banco de dados é através de um drive nativo por exemplo o postgres" 
Usamos ele instalando o Drive do Banco de dados escolhido
Não podemos garantir que os drives instalados trabalhem da mesma forma
Em um drive teremos que escrever "na mão" nossas queryes (é necessesário um conhecimento melhor no drive nativo)
Quando usamos drives nativos ficamos preso na estrutura do drive, o código tem que atender ele e migrar o código precisa ser reescrito todo o código, utilizar o drive é recomendavel apenas quando sabe-se que não se vai mudar de modelo de armazenamento de dados.
* Segunda Forma - Queryes Builders
Exemplo: http://knexjs.org/
São ferramentas que auxiliam nas criações um exemplo é o Knex.js, um dos mais conhecidos no ambiente Node.js, a estrutura será a mesma para diversos bancos de dados instalando o drive e usando eles mas usando um código mais genérico.
* Terceira Forma - Framework de relacionamento entre objeto e entidades (ORM - Object Relational Mapper) Mapeamento de Objeto-Relacional
Dois exemplos são o TypeORM e Sequelize
Exemplo: https://typeorm.io/#/
Exemplo: https://sequelize.org/
Quando trabalhamos com TypeORM temos uma entidade (Classe) Usuario por exemplo e também temos uma tabela chamada Usuario
Os TypeORM conecta nossa tabela no banco de dados com nosso objeto na aplicação, ele mapeia o objeto com a estrutura do banco de dados. Possui estruturas que facilita o Select e outros, mais simples que drives nativos e queryes builders
Iremos usar o TypeORM
[x] Configurando o typeorm
Para isso precisamos fazer 3 etapas 
* Instalar o TypeORM
npm install typeorm || yarn add typeorm
* Instalar o Reflect
npm install reflect-metadata || yarn add reflect-metadata
* Instalar o Banco de dados
npm install sqlite3 || yarn add sqlite3
* Podemos fazer a instalação em um só comando
yarn add typeorm reflect-metadata sqlite3
* Arquivos de configurações
https://typeorm.io/#/using-ormconfig
Nesse arquivo que configuramos se o qual Banco de Dados estamos usando, configurações de mapeamentos de entidade, para mapear migrations, se o banco de dados pedir usuario e senha nesse arquivo que configuramos isso
Esse arquivo deve ficar na raiz do projeto, porque o TypeORM busca o arquivo ormconfig.json na raiz do projeto
[x] O que são migration?
Digamos que 3 desenvolvedores estão trabalhando no mesmo projeto
Um recebe a responsabilidade de criar a parte de usuarios
Outro a responsabilidade de criar a funcionalidade das mensagens
A migrations é uma forma de gerir quais tabelas existem em um  bancos de dados do projeto e quais não existem, executando essas migrations podemos criar as tabelas em nosso bancos que não existem, deixando nosso ambiente completo para testar funcionalidades, ele facilita na hora de subir o banco de dados do projeto para a produção apenas executando as migrations, "basicamente as migrations são os históricos relacionados a tudo que é feito no banco de dados"
modelo de entidade e relacionamentos da tabela
https://lucid.app/lucidchart/02123b6f-df18-4da4-ab0c-4dcf701b72a5/edit?beaconFlowId=2ACE4850688A0CB5&page=0_0#
* Formas de criar migrations 
Usando o CLI
https://typeorm.io/#/using-cli
Utilizando o proprio orm (iremos usar dessa forma)
Instalando o typeorm
Estrutura de dados
Tabela de Connections 
Tabela de Users - cadastro de usuario
Tabela de Messages - 
Tabela de Settings - O proprio administrador administra
Toda tabela precisa de um identificador (PK - primary key pode ser um identificador)
[x] Criando as migrations
* primeira migrations por tabela de settings
comando para criar a migration
yarn typeorm migration:create -n CreateSettings
quando criamos uma migration ele cria uma classe com métodos para criar uma tabela, metodo "up", e para excluir uma tabela, metodo "down".
tipo uuid - universally unique identifier (indentificador unico universal) 
https://pt.wikipedia.org/wiki/Identificador_%C3%BAnico_universal
Formas de ver nossas tabelas
extensão do vs code SQLite explorer
ferramenta de gerenciamento de banco de dados Beekeeper
https://www.beekeeperstudio.io/
[x] Criando as entidades
Criando a entidade que representa a tabela de settings na aplicação
Nessa parte de entidade ele da erro por conta das configurações do TypeScript que precisamos deixar ok no tsconfig.json
são dois locais com as seguintes configurações, basta descomenta-los, costumam ficar na linha 64 e 65
"emitDecoratorMetadata":  true,
"experimentalDecorators": true,
sobre uuid 
O nosso typeORM consegue colocar uma configuração que responsabiliza o banco de dados criar esses identificador mas vamos escolher responsabilizar o projeto por conta das caracteristicas únicas de cada banco de dado implementar isso, dessa forma não precisamos focar nos detalhes de implementação desse tipo de dado pelo banco de dados, 
o comando para instalar a biblioteca uuid - (universally unique identifier)
yarn add uuid
Precisamos usar a instalação de tipagem para o typescript
yarn add @types/uuid -D
sobre as versões que devemos escolher de uuid
v1 - cria uuid baseada no mac address da máquina que executa
v3 - cria uuid por hash
v5 - cria uuid por hash
v4 - cria de forma aleatória o uuid
[x] Criando os repositórios
Repósitório - "Estrutura de uma classe responsável por fazer toda a manipulação de dados na aplicação", "eles serão responsaveis por fazer a comunicação entre entidade e tabela do banco de dados", "representação e manipulação de dados tem a ver com repositórios, criamos ele para fazer todas essas manipulações".
Para cada entidade criamos um repositório
Documentação falando como trabalhar com os repositórios 
https://typeorm.io/#/working-with-repository
as datas estão sendo salvas em UTC
[x] criando as rotas das configurações
[x] criar o controller

## Atalhos
Ctrl + K e depois M

## Recap da aula
O que aprendi na aula?
aprendi as diversas abordagens de banco de dados baseado em seus tipos
aprendi a abordagem mais generico do typeorm e como ele facilita o projeto de banco de dados
aprendi a criar uma migration
aprendi a criar uma classe para objeto
aprendi porque gerar uuid no projeto e não deixar essa responsabilidade para o banco de dados 

## O que veremos na próxima aula?
finalizar a configuração de tabelas
vamos ver a parte de relacionamento entre tabelas 
o que é e como funciona a parte de relacionamento do banco de dados

## código para brinde!

embuscadoproximonivel

## Comandos

* Instalar o TypeORM
npm install typeorm || yarn add typeorm

* Instalar o Reflect
npm install reflect-metadata || yarn add reflect-metadata

* Instalar o Banco de dados
npm install sqlite3 || yarn add sqlite3

* Podemos fazer a instalação em um só comando
yarn add typeorm reflect-metadata sqlite3

* Para criar uma migration de uma tabela chamada settings 
yarn typeorm migration:create -n CreateSettings

* comando para instalar a biblioteca uuid - (universally unique identifier)
yarn add uuid


