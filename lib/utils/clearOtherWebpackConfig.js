module.exports = (config) => {
    delete config.browserslist;
    delete config.imageConfig;
    delete config.svGruntimeGenerator;
    delete config.eslint;
    delete config.terser;
    return config;
}