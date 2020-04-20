module.exports = (config) => {
    delete config.browserslist;
    delete config.imageConfig;
    delete config.svGruntimeGenerator;
    delete config.eslint;
    delete config.terser;
    delete config.loaderOpt;
    delete config.output.dirName;
    delete config.omg;
    delete config.jarvis;
    delete config.jarvisOpt;
    delete config.analyzer;
    delete config.analyzerOpt;
    return config;
}