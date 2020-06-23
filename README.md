# FAÇA  O LAUNCHER DO SEU ROLEPLAY FACILMENTE 😎
Você que está desenvolvendo um servidor roleplay e quer deixar-lo com uma cara mais profissional,  aqui está sua solução. Este launcher tem uma base feita em [Electron](https://www.electronjs.org/) e para customiza-lo não é necessário ser um gênio da computação, é **hiper facilmente facíl 👌** fazer isso, usando apenas HTML5, CSS e JavaScript.

![Launcher Example](https://media3.giphy.com/media/fX2JC2TNXAYfJvTvad/giphy.gif "Launcher Example")

## Requisitos 🤔
- [Nodejs](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/en/)
- [Git](https://classic.yarnpkg.com/en/)

## Tutorial 😘
Após ter instalado os programas necessários iremos criar uma pasta na area de trabalho chamada **launchers**, beleza 👍? Feito isso, vamos abrir o terminal e ler até onde a raiz da pasta encontra (ex: ` C:\Users\TEUUSUARIO\Desktop\launchers`)  e iremos dar o seguinte comando `git clone https://github.com/gustrigoni/FiveM-Launcher` ou se preferir a pasta do repositório aqui mesmo e apenas colar na pasta que criamos na desktop. Após ter clonado ou colado os arquivos no diretório iremos rodar seguinte comando no terminal `npm install` ou `yarn install` para baixar todas as dependencias do projeto.

### Baixou as depedencias? 🙌
Então já está tudo pronto para fazer o quiser com o launcher 😎, o arquivo principal de edição fica na pasta `src/index.html`, aqui você muda todo seu design do launcher, eu recomendo que veja o projeto no arquivo `package.json` para atualizar algumas informações, como *nome, descrição, ícones, etc...*  para melhorar seu projeto você porde verificar o arquivo `src/index.js`.

### Testes 🤯
Para testar suas alterações gerais do launcher use o comando `yarn start` no terminal dentro da raiz da pasta do launcher (ex: ` C:\Users\TEUUSUARIO\Desktop\launchers\FiveM-Launcher`).

### Gerar arquivo executavel 😁 
Então quer dizer que você terminou seu launcher?
HMMM... é muito bom saber isso, para criar um instalador iremos ter que executar o seguinte comando `yarn make squirrel` no terminal do diretório (ex: ` C:\Users\TEUUSUARIO\Desktop\launchers\FiveM-Launcher`). 

![Launcher Example](https://media.giphy.com/media/jsed8tuRs4MZF9Pt9W/giphy.gif "Terminal Exmple")

###### depois de algum tempinho....
Você vai notar que na pasta raiz irá surgir uma pasta chamada `out` e dentro dela você pode ver o seu novo instalador dentro da pasta `make\squirrel.windows\x64` instale o arquivo no seu computador e divulgue-o para os jogadores do seu roleplay.
