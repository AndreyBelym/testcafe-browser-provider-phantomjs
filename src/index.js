/* eslint-disable no-console*/
import browserTools from 'testcafe-browser-tools';
import childProcess from 'child_process';


export default {
    isMultiBrowser: true,

    async openBrowser (browserId, pageUrl, browserName) {
        var Promise = require('pinkie');

        console.log('\n', 0, '\n');
        var openParameters = await browserTools.getBrowserInfo(browserName);

        console.log(openParameters.cmd);

        var command = `${openParameters.path} ${openParameters.cmd} "${pageUrl}" 0<&- 1>/dev/null 2>&1 &`;

        await new Promise(resolve => {
            childProcess.exec(command, resolve);
        });

        console.log(2);
    },

    async closeBrowser (browserId) {
        await browserTools.close(browserId);
    },

    async isLocalBrowser () {
        return true;
    },

    async getBrowserList () {
        var installations = await browserTools.getInstallations();

        return Object.keys(installations);
    },

    async isValidBrowserName (browserName) {
        var browserNames = await this.getBrowserList();

        browserName = browserName.toLowerCase();

        return browserNames.indexOf(browserName) > -1;
    }
};
