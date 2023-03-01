# F1 🏁
Entenda Node assíncrono como um treino de classificação da F1

---

## Como usar com o Docker 🐳
Execute os seguinte comando para construir e iniciar os containers da aplicação:

---
### 1. Inicie os containers com o docker-compose

```sh
$ docker-compose up -d
```
---

### 2. Vamos abrir `dois` terminais no ``container`` da aplicação ``Node``

- Acesse o container `f1_ap`
```sh
$ docker container exec -it f1_app sh
```

- instale as dependências 
```
$ npm i
```

- inicie um dos servidores
``` sh
$ npm run devOne
```

- abra um novo terminal no container
```sh
$ docker container exec -it f1_app sh
```

- inicie o segundo servidor com o comando 
```sh
$ npm run devTwo
```

<p>Ao efetuar esse passo, o seu terminal deve estar parecido com algo assim:</p>


![Terminal dividido exibindo os 2 servidores](https://github.com/marciodanielll/f1/blob/lucas-barreto/public/Captura%20de%20Tela%202023-02-17%20%C3%A0s%2014.52.19.png)  

---
### 3. Em um cliente como ThunderClient, Insomnia ou no próprio navegador, faça duas requisições:
- GET
```txt
http://localhost:3000/qualify/one
```

- GET
```txt
http://localhost:3001/qualify/two
```
---

Você pode contribuir para este projeto abrindo um pull request com sugestões de melhorias ou novas funcionalidades. Também pode abrir uma issue para relatar bugs e ajudar a corrigi-los.

----

