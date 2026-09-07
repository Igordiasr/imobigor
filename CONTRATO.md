# ImobIgor

A aplicação ImobIgor tem como objetivo consolidar os conhecimentos adquiridos sobre a linguagem de programação Java, com o framework Spring Boot e sobre a linguagem de programação JavaScript, com as bibliotecas React e Axios.

## Arquitetura do projeto

O projeto foi arquitetado para utilizar o Java para o desenvolvimento do back-end, o JavaScript para o desenvolvimento do front-end e decidi utilizar o banco de dados H2 para a persistência dos dados.
A escolha do banco de dados H2 foi definida com o objetivo de aprofundar meus conhecimentos em relação a esta tecnologia.

### Tecnologias usadas

- Java 21
- Spring Boot
- JavaScript
- Node.js
- React
- Axios

### Estrutura do projeto

A estrutura do projeto foi desenvolvida para separar front-end e back-end em diretórios distintos, facilitando a manutenção quando necessário.


#### Visão geral
```
imobigor
└──backend
└──frontend
└──CONTRATO.md
└──README.md
```

#### Front-end
```
frontend/
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── imagens...
│   │   └── ícones...
│   │
│   ├── components/
│   │   ├── CardsImovel/
│   │   │   ├── CardsImovel.jsx
│   │   │   └── CardsImovel.module.css
│   │   │
│   │   ├── DetalheImovel/
│   │   │   ├── DetalheImovel.jsx
│   │   │   └── DetalheImovel.module.css
│   │   │
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.css
│   │   │
│   │   ├── ImovelForm/
│   │   │   ├── ImovelForm.jsx
│   │   │   └── ImovelForm.module.css
│   │   │
│   │   └── Modal/
│   │       ├── Modal.jsx
│   │       └── Modal.module.css
│   │
│   ├── pages/
│   │   ├── Cadastro/
│   │   │   ├── Cadastro.jsx
│   │   │   └── Cadastro.module.css
│   │   │
│   │   ├── Imoveis/
│   │   │   ├── Imoveis.jsx
│   │   │   └── Imoveis.module.css
│   │   │
│   │   └── Imovel/
│   │       ├── Imovel.jsx
│   │       └── Imovel.module.css
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── routes.jsx
│
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

#### Back-end
```
backend/
├── .idea/
│
├── .mvn/
│   └── wrapper/
│       └── maven-wrapper.properties
│
├── data/
│   └── imobiliaria.mv.db
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── school.sptech.imobigor/
│   │   │       ├── controller/
│   │   │       │   └── ImobiliariaController.java
│   │   │       │
│   │   │       ├── model/
│   │   │       │   └── Imovel.java
│   │   │       │
│   │   │       ├── repository/
│   │   │       │   └── ImovelRepository.java
│   │   │       │
│   │   │       ├── service/
│   │   │       │   └── ImovelService.java
│   │   │       │
│   │   │       └── ImobIgorApplication.java
│   │   │
│   │   └── resources/
│   │       ├── application.properties
│   │       └── schema.sql
│   │
│   └── test/
│
├── target/
│
├── .gitattributes
├── .gitignore
├── mvnw
├── mvnw.cmd
└── pom.xml
```

## Executando o projeto

Para a plena execução do projeto garanta que o projeto possui todas as dependências necessárias. Dentro do diretório frontend/ execute o comando `npm install`, este comando importará todas as dependências necessárias caso elas não sejam encontradas no diretório.
Com as dependências devidamente instaladas, podemos executar a aplicação conforme os comandos listados abaixo:
| Comando | O que ele executa? |
| --- | --- |
| `npm install` | Instala todas as dependências necessárias para iniciar o servidor local do front-end da aplicação |
| `npm run dev` | Inicia um servidor local do front-end da aplicação. Inicialmente foi configurado o endereço `http://localhost:5173` como acesso inicial a aplicação |
| `mvn spring-boot:run` | Inicia o servidor local do back-end da aplicação. Os endpoints podem ser acessados a partir da URL base `http://localhost:8080` |
Após a execução dos comandos acima, você poderá acessar a aplicação através do endereço configurado para o front-end.

## Páginas e componentes

O front-end da aplicação foi desenvolvido para atender os requisitos em suportar ao menos uma requisição do tipo `GET` e uma requisição do tipo `POST`. O conteúdo dessas páginas são gerados de forma dinâmica pelos componentes, conforme dados persistidos no banco de dados H2.

### Páginas e suas responsabilidades

| Página   | Responsabilidade                                                                                                                                                                                                                        |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cadastro | Responsável pelo método `POST` da aplicação, enviando os dados de um imóvel para a inserção no banco de dados através do endpoint `http://localhost:8080/imoveis`                                                                       |
| Imovel   | Responsável pelos métodos `GET` e `DELETE` da aplicação, buscando dados de um determinado imóvel pelo id e, se necessário, excluindo esse imóvel pelo id. Em ambos os casos, utilizando o endpoint `http://localhost:8080/imoveis/{id}` |
| Imoveis  | Responsável pelo método `GET` da aplicação, buscando e listando os dados dos imóveis, através de cards. A busca pelos dados dos imóveis é realizada através do endpoint `http://localhost:8080/imoveis`                                 |

### Componentes e suas responsabilidades

| Componente     | Responsabilidade                                                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Header         | Adiciona o menu de navegação no cabeçalho                                                                                             |
| Modal          | Adiciona estrutura para pop-ups que exibirão mensagens após ações do usuário                                                          |
| CardsImovel    | Gera os cards que exibem um resumo do imóvel e que ao ser clicado, redireciona o usuário para a página com os detalhes daquele imóvel |
| DetalhesImovel | Gera a exibição de detalhes de um imóvel, com a opção de excluir o mesmo                                                              |
| ImovelForm     | Gera o formulário com os dados necessários para o cadastro de um imóvel                                                               |

## Classes e camadas

O back-end da aplicação foi desenvolvido para atender os requisitos em suportar ao menos uma requisição do tipo `GET` e uma requisição do tipo `POST`. A estrutura desenvolvida foi escolhida com o objetivo de separar as classes em camadas e atribuir responsabilidades específicas a elas, tornando o código mais organizado e facilitando a manutenção.

### Classes e suas responsabilidades

| Camada     | Classe                | Responsabilidade                                                                            |
| ---------- | --------------------- | ------------------------------------------------------------------------------------------- |
| Controller | ImobiliariaController | Responsável por receber as requisições HTTP e decidir qual operação deve ser executada.     |
| Model      | Imovel                | Responsável por representar um imóvel dentro da aplicação, contendo os atributos do imóvel. |
| Repository | ImovelRepository      | Responsável pela comunicação com o banco de dados.                                          |
| Service    | ImovelService         | Responsável por garantir a aplicação das regras de negócio através de validações.           |

## Banco de dados H2

A tabela criada no banco de dados foi desenvolvida para receber os dados de um cadastro de imóvel. Após o mapeamento de dados necessários para a aplicação, a tabela foi consolidada da seguinte forma:
| Campo | Tipo | Obrigatório | Regra |
| --- | --- | --- | --- |
| id | INT | Sim | Chave primária com incremento automático, não pode ser nulo ou vazio |
| titulo | VARCHAR | Sim | Não pode ser vazio ou nulo |
| tipo | VARCHAR | Sim | Não pode ser vazio ou nulo |
| endereco | VARCHAR | Sim | Não pode ser vazio ou nulo |
| cidade | VARCHAR | Sim | Não pode ser vazio ou nulo |
| uf | VARCHAR | Sim | Não pode ser vazio ou nulo |
| preco | DECIMAL | Sim | Maior que 0 |
| quartos | INT | Sim | Maior ou igual a 0 |
| banheiros | INT | Sim | Maior ou igual a 0 |
| area | DECIMAL | Sim | Maior que 0 |
| descricao | VARCHAR | Sim | Não pode ser vazio ou nulo |
| imagem | VARCHAR | Sim | Não pode ser vazio ou nulo |

## Requisição e resposta

| Método | Endpoint | Detalhe da requisição |
| --- | --- | --- |
| `GET` | `http://localhost:8080/imoveis` | Lista todos os imóveis cadastrados |
| `GET` | `http://localhost:8080/imoveis/{id}` | Busca um imóvel pelo ID |
| `POST` | `http://localhost:8080/imoveis` | Cadastra um novo imóvel |
| `DELETE` | `http://localhost:8080/imoveis/{id}` | Exclui um imóvel pelo ID |

Os quatro métodos acima concretizam o contrato da API e consiste em:

### GET
**Método** <br>
`GET /imoveis`

**Requisição** <br>
Para esta requisição não é enviado nenhum dado no corpo ou como parâmetro.

**Resposta** <br>
Em caso de sucesso a resposta será: <br>
`HTTP 200 OK` <br>
E o corpo da respostas será uma lista com todos os imóveis registrados
```
[
  {
    "area": 68.5,
    "banheiros": 2,
    "cidade": "São Paulo",
    "descricao": "Apartamento moderno e bem localizado, próximo a restaurantes, comércio e transporte público.",
    "endereco": "Rua Augusta, 1250",
    "id": 1,
    "imagem": "apartamento.jpg",
    "preco": 450000.0,
    "quartos": 2,
    "tipo": "Apartamento",
    "titulo": "Apartamento moderno no centro",
    "uf": "SP"
  },
  {
    "area": 185.0,
    "banheiros": 3,
    "cidade": "São Paulo",
    "descricao": "Casa ampla com piscina, área gourmet e garagem para dois carros.",
    "endereco": "Rua das Palmeiras, 320",
    "id": 2,
    "imagem": "casa.jpg",
    "preco": 780000.0,
    "quartos": 4,
    "tipo": "Casa",
    "titulo": "Casa espaçosa com piscina",
    "uf": "SP"
  },
  {
    "area": 42.0,
    "banheiros": 1,
    "cidade": "São Paulo",
    "descricao": "Apartamento compacto ideal para uma pessoa ou casal, com fácil acesso ao metrô.",
    "endereco": "Rua Vergueiro, 850",
    "id": 3,
    "imagem": "apartamento.jpg",
    "preco": 320000.0,
    "quartos": 1,
    "tipo": "Apartamento",
    "titulo": "Apartamento compacto",
    "uf": "SP"
  },
  {
    "area": 150.0,
    "banheiros": 2,
    "cidade": "Campinas",
    "descricao": "Casa confortável localizada em bairro residencial tranquilo, próxima a escolas e supermercados.",
    "endereco": "Rua das Acácias, 175",
    "id": 4,
    "imagem": "casa.jpg",
    "preco": 590000.0,
    "quartos": 3,
    "tipo": "Casa",
    "titulo": "Casa familiar em bairro tranquilo",
    "uf": "SP"
  },
  {
    "area": 210.0,
    "banheiros": 4,
    "cidade": "São Paulo",
    "descricao": "Cobertura sofisticada com ampla área externa e vista privilegiada da cidade.",
    "endereco": "Avenida Paulista, 2100",
    "id": 5,
    "imagem": "cobertura.jpg",
    "preco": 1250000.0,
    "quartos": 3,
    "tipo": "Cobertura",
    "titulo": "Cobertura com vista panorâmica",
    "uf": "SP"
  },
  {
    "area": 175.0,
    "banheiros": 2,
    "cidade": "Santo André",
    "descricao": "Casa térrea com quintal espaçoso, churrasqueira e duas vagas de garagem.",
    "endereco": "Rua dos Ipês, 450",
    "id": 6,
    "imagem": "casa.jpg",
    "preco": 650000.0,
    "quartos": 3,
    "tipo": "Casa",
    "titulo": "Casa térrea com amplo quintal",
    "uf": "SP"
  },
  {
    "area": 72.0,
    "banheiros": 2,
    "cidade": "São Paulo",
    "descricao": "Apartamento localizado a poucos minutos do metrô, com condomínio completo.",
    "endereco": "Rua Heitor Penteado, 600",
    "id": 7,
    "imagem": "apartamento.jpg",
    "preco": 510000.0,
    "quartos": 2,
    "tipo": "Apartamento",
    "titulo": "Apartamento próximo ao metrô",
    "uf": "SP"
  },
  {
    "area": 35.0,
    "banheiros": 1,
    "cidade": "São Paulo",
    "descricao": "Studio moderno em região valorizada, ideal para quem busca praticidade e localização.",
    "endereco": "Rua Oscar Freire, 890",
    "id": 8,
    "imagem": "apartamento.jpg",
    "preco": 295000.0,
    "quartos": 1,
    "tipo": "Studio",
    "titulo": "Studio moderno",
    "uf": "SP"
  },
  {
    "area": 120.0,
    "banheiros": 2,
    "cidade": "Guarulhos",
    "descricao": "Sobrado bem conservado com três quartos, garagem e espaço para toda a família.",
    "endereco": "Rua das Flores, 215",
    "id": 9,
    "imagem": "casa.jpg",
    "preco": 480000.0,
    "quartos": 3,
    "tipo": "Sobrado",
    "titulo": "Sobrado com garagem",
    "uf": "SP"
  },
  {
    "area": 320.0,
    "banheiros": 5,
    "cidade": "Barueri",
    "descricao": "Imóvel de alto padrão com piscina, área gourmet, jardim e garagem para quatro veículos.",
    "endereco": "Alameda dos Jardins, 100",
    "id": 10,
    "imagem": "casa.jpg",
    "preco": 1850000.0,
    "quartos": 5,
    "tipo": "Casa",
    "titulo": "Casa de alto padrão",
    "uf": "SP"
  }
]
```
<br>
Caso não houver nenhum imóvel cadastrado, a resposta será: <br>

`HTTP 204 NO CONTENT` <br>
Indicando que a requisição foi processada com sucesso, porém não há imóveis para serem retornados.

### GET por id
**Método** <br>
`GET /imoveis/{id}`

**Requisição** <br>
É enviado um `id: Integer` como parâmetro nesta requisição.

**Resposta** <br>
Ao encontrar o imóvel pelo ID a resposta será: <br>
`HTTP 200 OK` <br>
E o corpo da resposta será os dados do imóvel
```
{
  "area": 68.5,
  "banheiros": 2,
  "cidade": "São Paulo",
  "descricao": "Apartamento moderno e bem localizado, próximo a restaurantes, comércio e transporte público.",
  "endereco": "Rua Augusta, 1250",
  "id": 1,
  "imagem": "apartamento.jpg",
  "preco": 450000.0,
  "quartos": 2,
  "tipo": "Apartamento",
  "titulo": "Apartamento moderno no centro",
  "uf": "SP"
}
```
<br>
Caso o ID informado não seja encontrado a resposta será: <br>

`HTTP 404 NOT FOUND` <br>
Indicando que não existe um imóvel cadastrado com aquele ID

**Método**
`POST /imoveis` <br>

**Requisição** <br>
É enviado um JSON no corpo da requisição contendo os seguintes dados:
```
{
  "titulo": "Apartamento moderno no centro",
  "tipo": "Apartamento",
  "endereco": "Avenida Paulista, 1250",
  "cidade": "São Paulo",
  "uf": "SP"
  "preco": 450000.0,
  "quartos": 2,
  "banheiros": 2,
  "area": 68.5,
  "descricao": "Apartamento moderno e bem localizado, próximo a restaurantes e transporte público.",
  "imagem": "apartamento.jpg
}
```

**Resposta** <br>
Em caso de sucesso, a resposta será: <br>
`HTTP 201 CREATED` <br>
Caso a requisição seja enviada faltando algum dado, ou com dados que violem a regra de negócio, a resposta será:
`HTTP 400 BAD REQUEST` <br>
Com um JSON informando o erro: <br>
```
{
  "Erro": "A quantidade de quartos não pode ser negativa"
}
```

**Método** <br>
`DELETE /imoveis/{id}`

**Requisição** <br>
É enviado um `id: Integer` como parâmetro nesta requisição.

**Resposta** <br>
Em caso de sucesso a resposta será: <br>
`HTTP 204 NO CONTENT` <br>
Caso não seja encontrado nenhum imóvel com o ID informado, a resposta será: <br>
`HTTP 404 NOT FOUND` <br>
Indicando que não foi encontrado nenhum imóvel com o ID informado.