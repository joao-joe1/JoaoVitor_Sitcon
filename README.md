## Estrutura do Banco de Dados

A estrutura do banco de dados é uma parte fundamental do projeto, uma vez que define como os dados são organizados e armazenados. O arquivo `schema.prisma` é o coração dessa estrutura e é onde definimos os modelos, campos e relacionamentos que compõem o nosso banco de dados.

### Prisma Schema e seu Papel

O arquivo `schema.prisma` utiliza a linguagem do Prisma Schema para representar a estrutura do banco de dados. Essa linguagem é poderosa e flexível, permitindo que descrevamos os detalhes das tabelas, campos e associações entre eles de maneira declarativa.

### Definindo Modelos e Campos

Dentro do `schema.prisma`, cada modelo representa uma entidade principal no nosso sistema, como `Paciente`, `Profissional`, `TipoSolicitacao`, `Procedimento` e `Solicitacao`. Cada modelo é definido com seus campos específicos, que representam os atributos da entidade.

### Estabelecendo Relacionamentos

Além dos campos individuais, o Prisma Schema nos permite estabelecer relacionamentos entre os modelos. Por exemplo, a tabela `Solicitacao` está associada aos modelos `Paciente`, `Profissional` e `TipoSolicitacao`. Esses relacionamentos são representados dentro do `schema.prisma`, permitindo que consultas complexas sejam executadas para recuperar dados interligados.

### Integridade de Dados

O Prisma Schema também nos auxilia na garantia da integridade dos dados. Ao definir as restrições adequadas nos campos e estabelecer relações apropriadas, podemos garantir que os dados armazenados no banco de dados estejam sempre coerentes e precisos.

### Gerando o Prisma Client

Uma vez que o `schema.prisma` é definido, utilizamos o Prisma CLI para gerar o Prisma Client. O Prisma Client é uma ferramenta que nos permite interagir com o banco de dados de forma intuitiva e segura, oferecendo funções e métodos que correspondem diretamente aos modelos e campos que definimos no `schema.prisma`.

---