window.IS_ELECTRON = true;
window.IPC = require('electron').ipcRenderer;
window.BASEBOARD = undefined;
window.REFRESH_RATE = 60;
window.TIME_FORMAT = null;
window.DATE_FORMAT = null;
window.CLIENT_VERSION = 9;

window.IPC.invoke('get-systeminfo').then((data) => {
	window.BASEBOARD = data.baseboard;
	window.REFRESH_RATE = data.refreshRate;
	window.TIME_FORMAT = data.timeFormat;
	window.DATE_FORMAT = data.dateFormat;
});
