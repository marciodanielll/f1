<body>
	<h1>Entenda Node assíncrono como um treino de classificação da F1</h1>
	<hr>
	<h2>Como usar com o Docker 🐳</h2>
	<p>Execute os seguinte comando para construir e iniciar os containers da aplicação:</p>
	<hr>
	<h3>1. Inicie os containers com o docker-compose</h3>
	<code>
		$ docker-compose up -d
	</code>
	<hr>
	<h3>2. Vamos abrir `dois` terminais no ``container`` da aplicação ``Node``</h3>
	<ul>
		<li>Acesse o container `f1_ap`</li>
		<code>
			$ docker container exec -it f1_app sh
		</code>
		<li>instale as dependências</li>
		<code>
			$ npm i
		</code>
		<li>inicie um dos servidores</li>
		<code>
			$ npm run devOne
		</code>
		<li>abra um novo terminal no container</li>
		<code>
			$ docker container exec -it f1_app sh
		</code>
		<li>inicie o segundo servidor com o comando</li>
		<code>
			$ npm run devTwo
		</code>
	</ul>
	<p>Ao efetuar esse passo, o seu terminal deve estar parecido com algo assim:</p>
	<img src="https://github.com/marciodanielll/f1/blob/lucas-barreto/public/Captura%20de%20Tela%202023-02-17%20%C3%A0s%2014.52.19.png" alt="Terminal dividido exibindo os 2 servidores">
	<hr>
	<h3>3. Em um cliente como ThunderClient, Insomnia ou no próprio navegador, faça duas requisições:</h3>
	<ul>
		<li>GET</li>
		<code>http://localhost:3000/qualify/one</code>
		<li>GET</li>
		<code>http://localhost:3001/qualify/two</code>
	</ul>
	<hr>
	<h3>4. Vídeo comparando a performance de operações síncronas e assíncronas em JavaScript com Promises</h3>
	<iframe width="560" height="315" src="https://www.youtube.com/embed/e_iHmdttVbo" title="Thread Bloqueante vs. Promises" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	<hr>
	<p>Você pode contribuir para este projeto abrindo um pull request com sugestões de melhorias ou novas funcionalidades. Também pode abrir uma issue para relatar bugs e ajudar a corrigi-los.</p>
	<hr>
</body>