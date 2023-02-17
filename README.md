# **``EM CONSTRUÇÃO``**

# F1
Entenda Node assíncrono como um treino de classificação da F1.

## Como usar no Docker
Execute os seguinte comando para construir e iniciar os containers da aplicação:

---
1. Abra dois terminais no container da aplicação Node:
- ``docker container exec -it f1_app sh``
  - Nesse container, inicie o servidor com o comando `npm run devOne`
- ``docker container exec -it f1_app sh``
  - Nesse container, inicie o servidor com o comando `npm run devTwo`

---
2. Em um cliente como ThunderClient, Insomnia ou no próprio navegador, faça duas requisições:
- `GET | http://localhost:3000/qualify/one`
- `GET | http://localhost:3001/qualify/two`
