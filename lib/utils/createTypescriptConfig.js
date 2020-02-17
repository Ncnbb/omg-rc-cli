
const hasTsConfigFile = require('./hasConfigFile');
const getDefaultConfig = require('./setWebpackRulesDefaultConfig');

const hasTsConfig = hasTsConfigFile('typescript', false);

module.exports = () => {
    const defaultConfig = getDefaultConfig(hasTsConfig);
    defaultConfig.presets = defaultConfig.presets.concat([
        [ 
            '@babel/preset-typescript',
            //includes @babel/plugin-transform-react-jsx-self 
            {
                isTSX: true, //解析jsx
                allExtensions: true, 
                allowNamespaces: true, //启用TypeScript namespaces的编译
            }
        ]
    ])

    return defaultConfig;
}
