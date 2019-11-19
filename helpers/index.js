const enzyme = require('enzyme');
const enzymeToJson = require('enzyme-to-json');
const Adapter = require('enzyme-adapter-react-16');
const createGQLFetch = require('./graphQlFetcher');
const reactTestingLibrary = require('@testing-library/react');

enzyme.configure({
    adapter: new Adapter()
});

module.exports = {
    enzyme,
    enzymeToJson,
    createGQLFetch,
    reactTestingLibrary
};
