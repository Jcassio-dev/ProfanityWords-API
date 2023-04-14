<p align="center">
 <a href="#Description">Descrição</a> •
 <a href="#Features">características</a> • 
 <a href="#Technologies">Tecnologias</a> •
 <a href="#How to use">Como usar</a> •
 <a href="#Software">Software</a> 
</p>

 # API -  Detector de textos impróprios

#### Response Format:
```bash
JSON
```
#### Database:
```bash
SQLite
```

## Methods:

#### Words
```bash
GET - EndPoint/words - Retorna todas as palavras adicionadas na tabela words em formato de {id: number, title: string, created_at: date}
```
```bash
POST - EndPoint/words - Adiciona uma palavra na tabela words - Só é necessário enviar o título: {title}
```

#### Sugestions
```bash
GET - EndPoint/sugestions - Retorna todas as palavras adicionadas na tabela sugestions em formato de {id: number, title: string, created_at: date}
```
```bash
POST - EndPoint/sugestions - Adiciona uma palavra na tabela sugestions - Só é necessário enviar o título: {title}
```
```bash
DELETE - EndPoint/sugestions - Remove todas as palavras da tabela sugestions - Não é necessário enviar nada
```

<div id="Description">

## Descrição

API desenvolvida para o desafio do BitLab que consiste em criar um filtro de palavras ofensivas, com o auxílio da API é possível alimentar uma base de dados com todas as palavras a serem censuradas e também obter sugestões de palavras não inclusas, a partir da colaboração dos usuário.

</div> 

<div id="Characteristics">

## Caracteristicas:
- NodeJS;
- Database Manipulation;
- HTTP (Routes and Methods);
- Routes & request params;


</div>
<div id="Technologies">

## Tecnologias:

- Languages: `javascript`
- Libraries: `node` `express` `express-async-errors` `knex` `pm2` `sqlite` `sqlite3` `path` `cors`
- Version control: `Git & Github`

</div>
<div id="How to use">

## Como usar localmente:

#### Clone esse repositório

```bash
$ git clone https://github.com/Jcassio-dev/ProfanityWords-API.git
```

#### Acesse a pasta do projeto no terminal/cmd

```bash
$ cd /ProfanityWords-API
```

#### Instale as dependências

```bash
$ npm install
```

#### Execute a aplicação no modo de desenvolvimento

```bash
$ npm run dev
```
#### O server será iniciado - Vá até a porta informada
```bash
localhost:port
```
</div>
<div id="Software">

## Software

VSCode
</div>
