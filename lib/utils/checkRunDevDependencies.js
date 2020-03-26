const fs = require('fs');
const path = require('path');
const {pathConfig} = require('./path');
const { isString } = require('./typeof');
const runCommand = require('./runCommand');
const log = require('../extension/console/log');
const infoLog = require('../extension/console/infoLog');
const errorlog = require('../extension/console/errorlog');

module.exports = function checkRunDevDependencies() {
    return new Promise(async (resolve) => {
        infoLog( 'check omg runtime dependent' );
        const {appPath} = pathConfig;

        // 获取当前package中的@babel/runtime-corejs3版本
        const packageJson = require('../../package.json');
        const { dependencies } = packageJson;
        const corejs3_V = dependencies['@babel/runtime-corejs3'].replace(/(\^|\~)/g, '');

        infoLog( `Omg runtime @babel/runtime-corejs3 dependent version：${corejs3_V}` );

        // 获取当前运行目录下的package.json中的@babel/runtime-corejs3版本;
        const targetPackageJsonPaht = path.resolve(appPath, 'package.json')
        if ( fs.existsSync(targetPackageJsonPaht) ) {


            let appPackageJson = fs.readFileSync(targetPackageJsonPaht, 'utf8');
            if (isString(appPackageJson)) appPackageJson = JSON.parse(appPackageJson);
            // 先查找devDependencies再找dependencies
            const { devDependencies, dependencies } = appPackageJson;
            let target_corejs3_V = devDependencies['@babel/runtime-corejs3'] || dependencies['@babel/runtime-corejs3'] || null;
            if ( target_corejs3_V ) {
                target_corejs3_V = target_corejs3_V.replace(/(\^|\~)/g, '');

                infoLog( `you project @babel/runtime-corejs3 dependent version：${target_corejs3_V}` );

                // 版本必须相同
                if ( corejs3_V === target_corejs3_V ) {
                    infoLog( `@babel/runtime-corejs3 Consistent version, no updates required！` );
                    resolve(true);
                    return;
                }
            }
        }

        infoLog( `@babel/runtime-corejs3 Version is not consistent. Update now！` );
        const isDone = await runCommand('npm', ['install', '--save-dev', `@babel/runtime-corejs3@${corejs3_V}`]);
        if ( isDone ) {
            log( `install @babel/runtime-corejs3 success!` );
            resolve(true);
        } else {
            errorlog( 'install @babel/runtime-corejs3 failure！ Stop working！' );
            resolve(false);
        }
    });
}