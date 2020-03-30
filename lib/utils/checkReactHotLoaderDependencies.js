const fs = require('fs');
const path = require('path');
const {pathConfig} = require('./path');
const { isString } = require('./typeof');
const runCommand = require('./runCommand');
const log = require('../extension/console/log');
const infoLog = require('../extension/console/infoLog');
const errorlog = require('../extension/console/errorLog');

module.exports = function checkReactHotLoaderDependencies() {
    return new Promise(async (resolve) => {
        infoLog( 'check react hot loader is install' );
        const {appPath} = pathConfig;

        // 获取当前package中的react-hot-loader版本
        const packageJson = require('../../package.json');
        const { dependencies } = packageJson;
        const curr_v = dependencies['react-hot-loader'].replace(/(\^|\~)/g, '');

        infoLog( `Omg react-hot-loader dependent version：${curr_v}` );

        // 获取当前运行目录下的package.json中的react-hot-loader版本;
        const targetPackageJsonPaht = path.resolve(appPath, 'package.json')
        if ( fs.existsSync(targetPackageJsonPaht) ) {


            let appPackageJson = fs.readFileSync(targetPackageJsonPaht, 'utf8');
            if (isString(appPackageJson)) appPackageJson = JSON.parse(appPackageJson);
            // 先查找devDependencies再找dependencies
            const { devDependencies, dependencies } = appPackageJson;
            let target_v = devDependencies['react-hot-loader'] || dependencies['react-hot-loader'] || null;
            if ( target_v ) {
                target_v = target_v.replace(/(\^|\~)/g, '');

                infoLog( `you project react-hot-loader dependent version：${target_v}` );

                // 版本必须相同
                if ( curr_v === target_v ) {
                    infoLog( `react-hot-loader Consistent version, no updates required！` );
                    resolve(true);
                    return;
                }
            }
        }

        infoLog( `react-hot-loader Version is not consistent. Update now！` );
        const isDone = await runCommand('npm', ['install', '--save-dev', `react-hot-loader@${curr_v}`]);
        if ( isDone ) {
            log( `install react-hot-loader success!` );
            resolve(true);
        } else {
            errorlog( 'install react-hot-loader failure！ Stop working！' );
            resolve(false);
        }
    });
}