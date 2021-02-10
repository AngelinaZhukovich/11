const path = require ('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'main.js',
        parh: path.resolve (__dirname, 'public/js'),
    },
    mode: 'development'
};
