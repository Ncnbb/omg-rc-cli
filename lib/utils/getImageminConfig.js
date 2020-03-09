module.exports = function getImageminConfig() {
    return {
        mozjpeg: {
            progressive: true,
            quality: 75
        },
        optipng: {
            enabled: false,
        },
        pngquant: {
            quality: [0.65, 0.90],
            speed: 4
        },
        gifsicle: {
            interlaced: false,
        },
        webp: {
            quality: 75
        }
    }
}