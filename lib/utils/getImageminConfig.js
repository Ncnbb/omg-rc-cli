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
            quality: [0.7, 0.90],
            speed: 4
        },
        gifsicle: {
            interlaced: false,
        },
        //https://github.com/tcoopman/image-webpack-loader/issues/180
        // 配置了webp的处理导致png经过image-webpck-loader处理后经过url-loader进行转换为base64的图片会在Safari中无法加载
        // webp: {
        //     quality: 75
        // },
        svgo: {
            plugins: [
                {
                    removeViewBox: false,
                },
                {
                    removeEmptyAttrs: false,
                },
            ],
        }
    }
}