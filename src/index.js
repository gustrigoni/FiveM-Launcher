const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {

  Menu.setApplicationMenu(null);

  let loading = mainWindow = new BrowserWindow({
    width: 1150,
    height: 600,
    backgroundColor: '#111',
    frame: false,
    resizable:false,
  });

  console.log(__dirname);
  
  loading.loadFile(path.join(__dirname, 'loading.html'));
  loading.show();

  loading.webContents.once('did-finish-load', () => {

    let mainWindow = new BrowserWindow({
      width: 1150,
      height: 600,
      frame: false,
      show: false,
      resizable:false,
      backgroundColor: '#111',
      webPreferences: {
          nodeIntegration: true
      },
    });

    mainWindow.loadURL(path.join(__dirname, 'index.html'));

    mainWindow.webContents.on('new-window', function(event, url){
      event.preventDefault();
      shell.openExternal(url);
    });

    mainWindow.on('ready-to-show', () => {
      loading.hide();
      mainWindow.show();
      loading.close();
    });

  });

};

app.on('ready', createWindow);

app.allowRendererProcessReuse = true;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
