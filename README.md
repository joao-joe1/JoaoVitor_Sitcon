## Esquema do Banco de Dados

O arquivo `schema.prisma` define a estrutura do banco de dados do projeto usando a linguagem do Prisma Schema. Ele descreve os modelos (tabelas), os campos de cada modelo e os relacionamentos entre eles.

Para saber mais sobre como funciona o Prisma Schema e como você pode definir a estrutura do banco de dados, confira a [documentação oficial do Prisma Schema](https://pris.ly/d/prisma-schema).

Aqui está um trecho do arquivo `schema.prisma`:

```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Paciente {
  // Definição dos campos do modelo Paciente
}

model Profissional {
  // Definição dos campos do modelo Profissional
}

model Solicitacao {
  // Definição dos campos do modelo Solicitacao
}```