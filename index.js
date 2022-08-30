const path = require('path');
const URL = require('url');
const {app ,BrowserWindow} = require ('electron');
const { url } = require('inspector');
const { mainModule } = require('process');

let win = null;
function createWindow() {
    win = new BrowserWindow({
        width: 1000,
        height:1000,
        icon: __dirname + "/img/microsoft.png"
    })
    // win.loadFile('index.html')
    win.loadURL("https://github.com/andKhokhlov")

    // win.loadUrl(url.format({
    //     pathname: path.join(__dirname,'index.html'),
    //     protocol: 'file:',
    //     slashes:true
    // )});
    // win.webContents.openDevTools();
    // win.on('closed', () => {
    //     win = null; 
    // });

    win.removeMenu()
}


app.on('ready', createWindow);

app.on('window-all-closed', () =>{
    if (process.platform !== 'darwin'){
        app.quit()
    }
})
