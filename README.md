# Desafio-Concrete-Front-End
 Consulta de API do GitHub

 Proposta

Implementar uma aplicação client-side, que consulte a API do GitHub e mostre os repositórios de um determinado usuário. Esta aplicação deve funcionar nos navegadores mais recentes do mercado.

O GitHub oferece duas opções de API que podem ser utilizadas.

API v3 (RESTful)

https://developer.github.com/v3/

Endpoints

Detalhes de um usuário: https://api.github.com/users/{username}
Repositórios de um usuário: https://api.github.com/users/{username}/repos

API v4 (GraphQL)

https://developer.github.com/v4/
Objects

Detalhes de um usuário: https://developer.github.com/v4/object/user/

Repositórios de um usuário: https://developer.github.com/v4/object/repositoryconnection/
Layout

layout: https://zpl.io/VxYQp7g
usuário: desafio_concrete
senha: challengeaccepted
Navegação

●	Ao buscar um usuário pelo login do github, direcionar para página de resultado de busca.
●	Se o usuário for encontrado apresentar página de detalhes do usuário (Layout result), caso contrário exibir mensagem amigável (Layout NotFound).
Requisitos

●	Eu, como usuário, desejo buscar por um usuário do GitHub;
●	Eu, como usuário, desejo ver os detalhes desse usuário que foi buscado (número de seguidores, número de seguidos, imagem do avatar, e-mail e bio);
●	Eu, como usuário, desejo ver a listagem dos repositórios desse usuário que foi buscado, ordenados pelo número decrescente de estrelas;

NOTAS:
Existem divergencias entre os requisitos e o layout.
Não consta no layout as seguintes informações: número de seguidos, e-mail e bio.
