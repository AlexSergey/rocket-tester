const webpack = require('webpack');
var { Server, constants } = require('karma');

const defaultProps = {
    watch: false,
    port: 9876,
    postfix: 'spec',
    ext: '+(js|jsx)'
};

module.exports = function(webpackConf, props) {
    if (!props) {
        throw new Error('props cant be empty');
    }
    if (!props.root) {
        throw new Error('root must be set');
    }
    props = Object.assign({}, defaultProps, props);

    webpackConf.plugins.push(new webpack.ProvidePlugin({
        'enzyme': require.resolve('enzyme'),
        'expect': require.resolve('expect')
    }));
    let query = `${props.root}/**/*.${props.postfix}.${props.ext}`;

    let preprocessors = {};
    preprocessors[query] = ['webpack'];

    webpackConf.externals = {
        'jsdom': 'window',
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ReactContext': true,
        'react/lib/ExecutionEnvironment': true
    };

    let finalConfig = {
        urlRoot:  props.root,
        basePath: props.root,
        frameworks: ['mocha', 'chai'],
        files: [
            query
        ],
        usePolling: true,
        webpack: webpackConf,
        preprocessors,
        plugins: [
            require.resolve('karma-mocha'),
            require.resolve('karma-chai'),
            require.resolve('karma-webpack'),
            require.resolve('karma-chrome-launcher'),
            require.resolve('karma-spec-reporter'),
            require.resolve('karma-sourcemap-loader')
        ],
        reporters: ['spec'],
        port: props.port,
        colors: true,
        logLevel: constants.LOG_DISABLE,
        browsers: ['Chrome'],
        autoWatch: props.watch,
        singleRun: !props.watch
    };

    const server = new Server(finalConfig, function(exitCode) {
        console.log('Karma has exited with ' + exitCode);
        process.exit(exitCode)
    });

    server.start();
};