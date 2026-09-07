# ImobIgor
A ImobIgor é um protótipo de aplicação para imobiliárias, permitindo o cadastro de imóveis, visualizar todos os imóveis cadastrados, visualizar os detalhes de um imóvel específico e excluir um imóvel.

## Como executar a aplicação
Abaixo estão os comandos necessários para a execução da aplicação
| Comando | O que ele executa? |
| --- | --- |
| `npm install` | Instala todas as dependências necessárias para iniciar o servidor local do front-end da aplicação |
| `npm run dev` | Inicia um servidor local do front-end da aplicação. Inicialmente foi configurado o endereço `http://localhost:5173` como acesso inicial a aplicação |
| `mvn spring-boot:run` | Inicia o servidor local do back-end da aplicação. Os endpoints podem ser acessados a partir da URL base `http://localhost:8080` |
Após a execução dos comandos acima, você poderá acessar a aplicação através do endereço configurado para o front-end.

## Contrato da API
```
GET /imoveis - Lista todos os imóveis.
GET /imoveis/{id} - Busca um imóvel pelo ID.
POST /imoveis - Cadastra um novo imóvel.
DELETE /imoveis/{id} - Exclui um imóvel.
```
Para mais detalhes consultar [Contrato API](CONTRATO.md)