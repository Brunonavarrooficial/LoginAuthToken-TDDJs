### Login Auth Token TDD

Aplicação de login e authenticação usando boas praticas de arquitetura, clean code e testes unitarios TDD.

> Dependencias do _**[package.json]:**_

```
"dependencies": {
   "dotenv": "^16.0.3",
   "express": "^4.18.2",
   "mariadb": "^3.0.2",
   "pg": "^8.8.0",
   "sequelize": "^6.25.8"
 },
 "devDependencies": {
   "jest": "^29.3.1",
   "nodemon": "^2.0.20",
   "sequelize-cli": "^6.5.2",
   "sqlite3": "^5.1.2",
   "supertest": "^6.3.1"
 }
```

> Utilizando:

`dotenv` para ultilizar variáveis de ambiente
de arquivo `.env`

`express` e `nodemon` pra conexão e rotas

utilizando controllers para rotas de teste 👇🏻

<img src='./assets/projectJs.png' alt="graphml-files" style="height: 150px; width:250px;"/>

---

Banco de dados Mysql com `mariadb` integrado em
instancias de vm no google cloud em um container
de docker

`sequelize-cli` para criar migrates para db

`jest` para testes TDD

`sqlite3` para armazenar migrates de teste em desenvolvimento

Feita configuração no `"scripts":` para os testes 👇🏻

```
 "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js --ignore __tests__",
    "pretest": "ENV=test sequelize db:migrate",
    "test": "ENV=test jest",
    "posttest": "ENV=test sequelize db:migrate:undo:all"
  },

```
