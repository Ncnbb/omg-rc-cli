module.exports = function getCmdDefaultParameter (type) {
    let defaultConfig = {};
    switch(type) {
        case 'build': defaultConfig = {
            progress: false,
            prompt: false,
            console: false,
            remove: false,
            target: null
        };
        break;
        case 'publish': defaultConfig = {
            progress: false,
            prompt: false,
            console: false,
            remove: false,
            chunkhash: false,
            target: null
        };
        break;
        case 'watch': defaultConfig = {
            progress: false,
            prompt: false,
            remove: false,
            chunkhash: false,
            target: null
        };
        break;
        case 'server': defaultConfig = {
            progress: false,
            prompt: false,
            remove: false,
            chunkhash: false,
            target: null
        };
        break;
    }

    return defaultConfig;
    
}