const babelJest = require("babel-jest");
const { babelOpts } = require("rocket-starter");
let opts = babelOpts();

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