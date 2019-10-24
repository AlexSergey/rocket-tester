const rootFolder = __dirname;

module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": `${rootFolder}/modules/babelJest.js`,
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `${rootFolder}/modules/fileTransformer.js`
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": `${rootFolder}/modules/identityObjProxy.js`
  },
  transformIgnorePatterns: [
    "node_modules/"
  ],
  moduleFileExtensions: [
    "js", "jsx", "json", "ts", "tsx"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/(build|docs|node_modules)/"
  ]
};
