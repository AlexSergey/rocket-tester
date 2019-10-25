const jest = require('jest');
const argsCompiler = require('./argsCompiler');

function run(opts = {}) {
    let argv = argsCompiler(opts, 'run');
    console.log(argv);
    jest.run(argv);
}

module.exports = run;
