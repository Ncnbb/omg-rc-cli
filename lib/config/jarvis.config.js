let config = {
    host: '0.0.0.0',
    port: 9901
}
module.exports = {
    set: (props) => {
        config = Object.assign(config, props);
    },
    get: () => {
        return config;
    }
}