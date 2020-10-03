# 💟 Contribuindo com o nosso projeto

<br/>
<p>✅ Para ter sucesso na sua contrimuição siga o nosso passo que vai desde a configuração inicial... á solicitação do último pull request </p>
<br/>

### 🛠 Configurando sua área de trabalho

<br/>
<p>Garanta que a lista abaixo já esteja devidamente instalada na sua máquina </p>
<p>Se você já tem o VSCode instalado, ma ótima maneira de descobrir é digitando no terminal os comandos para verificar a versão de cada uma:</p>
<br/>

`node -v`
<br/>

`git --version `
<br/>

`yarn -v`
<br/>

<p>Se você não tiver alguma, segue o link com o site oficial:</p>

1. 🔽 [VSCode](https://code.visualstudio.com/)
2. 🔽 [Node](https://nodejs.org/en/)
3. 🔽 [Git](https://git-scm.com/)
4. 🔽 [Yarn](https://classic.yarnpkg.com/pt-BR/docs/install)
   <br/>
   <br/>

### 💟 Contributing

<br/>
<h4>Vamos começar!</h4>
<br/>

<p>Você precisa fazer um fork do repositório do Women Who Code. Segue o link:</p>
<div align="center">
[Women Who Code](https://github.com/womenwhocoderecife/wwcode-hacktoberfest-2020)
</div>

Isto irá criar uma cópia para o seu repositório

![fork](https://user-images.githubusercontent.com/47724428/94500452-b4540880-01d5-11eb-970d-90a105016bc7.png),

- Você precisa fazer um clone do seu repositório que foi forkado.

![wwcode-clone](https://user-images.githubusercontent.com/47724428/94501302-e6666a00-01d7-11eb-8986-a225ad0707a5.png)

- Abra o terminal. Primeiro vamos criar uma pasta para o WW Code. Digite o comando abaixo e aperte Enter:

```
mkdir wwcode
```

- Agora vamos entrar nesta pasta. Digite o comando abaixo e aperte Enter:

```
cd wwcode
```

- No terminal, digite `git clone`, clique com o botão direito do mouse e cole o link copiado

###### Importante! o Ctrl + c e Ctrl + v não funciona no terminal

Deverá ficar assim: git clone https://github.com/SEU-USUÁRIO-DO-GITHUB/wwcode-hacktoberfest-2020.git

- Agora vamos entrar na pasta clonada. Digite o comando abaixo e aperte Enter

```
cd wwcode-hacktoberfest-2020
```

- Para instalar as dependências necessárias no repositório local, digite um dos comandos abaixo:
  `yarn ou npm install`

#### Agora vamos contribuir!

Digite no terminal `code .`

Você deve localizar no Visual Studio Code a pasta ` src` e seguir o caminho até o arquivo **src > data > team.js**

![WhatsApp Image 2020-09-28 at 21 54 51](https://user-images.githubusercontent.com/47724428/94501406-20d00700-01d8-11eb-9421-3226aad2c60c.jpeg)


Observe que o arquivo tem vários dados. Você irá procurar por <span>TÍTULO</span> e localizar em qual categoria se encaixa. Por exemplo:
Se você for da categoria "Members", você vai editar este trecho:

![object](https://user-images.githubusercontent.com/47724428/94751807-d5486500-035f-11eb-92f6-ab24a9ff9a04.png)


Primeiramente você vai copiar o objeto que estiver entre  { }, apagar todas as informações e deixá-lo assim:

![duplicate-info](https://user-images.githubusercontent.com/47724428/94753057-708f0980-0363-11eb-84b8-c3fa9910aab9.png)

### 1º PULL REQUEST
No campo de "photo" você irá inserir o link da sua foto de perfil do github. 
Aperte ``` Ctrl + s ``` para salvar o aquivo

Vamos voltar ao terminal e seguir os passos que aprendemos mais cedo para mandar uma modificação ao repositório remoto

``` git status ```
![git-status](https://user-images.githubusercontent.com/47724428/94755219-24939300-036a-11eb-9abc-31ced92d684e.png)


``` git add . ``` 
![git-add](https://user-images.githubusercontent.com/47724428/94755248-3e34da80-036a-11eb-9b9e-77aa5c26f2ad.png)


``` git commit -m "mensagem do commit com descrição" ``` 
![git-commit](https://user-images.githubusercontent.com/47724428/94755255-44c35200-036a-11eb-8421-f2cffa20ebf7.png)


``` git push origin master ``` 
![git-push](https://user-images.githubusercontent.com/47724428/94755258-4a209c80-036a-11eb-8b05-aca49b58736b.png)
