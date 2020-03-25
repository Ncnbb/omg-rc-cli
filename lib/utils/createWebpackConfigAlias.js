const { pathConfig } = require( './path' );
const path = require( 'path' );

module.exports = function createWebpackConfigAlias() {
     // 配置react和react-dom的默认路径
     let REACT_PATH = process.env.OMG_ENV === 'production' ? 'react/umd/react.production.min.js' : 'react/umd/react.development.js';
     let REACT_DOM_PATH = process.env.OMG_ENV === 'production' ? 'react-dom/umd/react-dom.production.min.js': 'react-dom/umd/react-dom.development.js';
     let REACT_REDUX = process.env.OMG_ENV === 'production' ? 'react-redux/dist/react-redux.min.js': 'react-redux/dist/react-redux.js';
     let REDUX = process.env.OMG_ENV === 'production' ? 'redux/dist/redux.min.js': 'redux/dist/redux.js';
     let REACT_ROUTER = process.env.OMG_ENV === 'production' ? 'react-router/umd/react-router.min.js': 'react-router/umd/react-router.js';
     let REACT_ROUTER_DOM = process.env.OMG_ENV === 'production' ? 'react-router-dom/umd/react-router-dom.min.js': 'react-router-dom/umd/react-router-dom.js';
     let IMMUTABLE = process.env.OMG_ENV === 'production' ? 'immutable/dist/immutable.min.js': 'immutable/dist/immutable.js';

     return {
        root: pathConfig.appPath, // 根目录指向
        react: path.join( pathConfig.appNodeModules, REACT_PATH ),
        'react-dom': path.join( pathConfig.appNodeModules, REACT_DOM_PATH ),
        'react-redux': path.join( pathConfig.appNodeModules, REACT_REDUX ),
        'redux': path.join( pathConfig.appNodeModules, REDUX ),
        'react-router': path.join( pathConfig.appNodeModules, REACT_ROUTER ),
        'react-router-dom': path.join( pathConfig.appNodeModules, REACT_ROUTER_DOM ),
        'immutable': path.join( pathConfig.appNodeModules, IMMUTABLE )
    }
}