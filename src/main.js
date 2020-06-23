/* 

    Aqui fica as funções principais da página, clicks etc..
    @Gustavo Rigoni

*/

const { remote } = require('electron');

const botaoPlay = document.getElementById('butaoJogar');
const botaoFechar = document.getElementById('butaoFechar');
const botaoMinimizar = document.getElementById('butaoMinimizar');
const botaoMaximizar = document.getElementById('butaoMaximizar');

let maximizado = false;

botaoMaximizar.addEventListener('click', () => {

    if (!maximizado) {

        // maximiza o launcher
        remote.getCurrentWindow().maximize();
        maximizado = true;

    } else {

        // restaura o launcher
        remote.getCurrentWindow().unmaximize();
        maximizado = false;

    }
    
});

botaoMinimizar.addEventListener('click', () => {

    // minimza o launcher
    remote.getCurrentWindow().minimize();
    
});

botaoFechar.addEventListener('click', () => {

    // fecha o launcher
    remote.app.quit();
    
});

botaoPlay.addEventListener('click', async() => {

    // espera X segundos e fecha o launcher
    setTimeout(() => {
        
        remote.app.quit();

    }, 5000);
    
});
