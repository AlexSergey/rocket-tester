const babelJest = require('babel-jest');

const opts = {
    cacheDirectory: true,
    babelrc: false,
    presets: [
        [require.resolve('@babel/preset-env'), Object.assign({
            useBuiltIns: 'entry',
            modules: false,
            loose: true
        })],
        require.resolve('@babel/preset-react')
    ],
    plugins: [
        require.resolve('@babel/plugin-syntax-dynamic-import'),
        require.resolve('@babel/plugin-transform-flow-comments'),
        [require.resolve('@babel/plugin-proposal-decorators'), { "legacy": true }],
        require.resolve('@babel/plugin-proposal-class-properties'),
        require.resolve('@babel/plugin-proposal-object-rest-spread')
    ]
};

if (!opts.env.test) {
    opts.env.test = {};
}

if (!opts.env.test.plugins) {
    opts.env.test.plugins = [];
}

opts.env.test.plugins.push(
    require.resolve('@babel/plugin-transform-modules-commonjs')
);

module.exports = babelJest.createTransformer(Object.assign({}, opts));