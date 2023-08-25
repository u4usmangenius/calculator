
const { app, BrowserWindow, session } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 500,
    title: "Calculator",
    resizable: false, 
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const winSession = win.webContents.session;
  winSession.webRequest.onHeadersReceived((details, callback) => {
    const headers = Object.assign({}, details.responseHeaders, {
      "Content-Security-Policy":
        "default-src 'self'; script-src 'self' 'unsafe-inline'",
    });
    callback({ cancel: false, responseHeaders: headers });
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);
