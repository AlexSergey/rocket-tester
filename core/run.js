const jest = require('jest');
const path = require('path');
const defaultProps = require('../defaultProps');
const deepExtend = require('deep-extend');
const { isString } = require('valid-types');

function run(opts = {}) {
    const options = deepExtend({}, defaultProps, opts);
    const rootFolder = path.resolve(__dirname, '..');
    const projectFolder = path.dirname(require.main.filename);
    const src = path.join(projectFolder, options.src);

    let argv = `--testMatch="${src}/**/*.${options.prefix}.{js,jsx,ts,tsx}"`;
    argv += ` --rootDir="${rootFolder}"`;
    argv += ` --testPathIgnorePatterns='(dist|build|docs|node_modules)'`;

    if (isString(options.configPath)) {
        argv += ` --config="${options.configPath}"`;
    }
    else {
        argv += ` --config="${rootFolder}/config.json"`;
    }

    jest.run(argv);
}

module.exports = run;
