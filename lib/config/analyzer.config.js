let config = {
    analyzerMode: 'server',
    analyzerHost: '0.0.0.0',
    analyzerPort: 9902
}
module.exports = {
    set: (props) => {
        config = Object.assign(config, props);
    },
    get: () => {
        return config;
    }
}