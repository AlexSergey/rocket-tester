import React from 'react';
import { helpers } from '../../../';
const { enzyme, enzymeToJson } = helpers;
const { shallow } = enzyme;
const { shallowToJson } = enzymeToJson;

import Link from './Link';

describe('Link', () => {
    it('should render correctly', () => {
        const output = shallow(
            <Link title="mockTitle" url="mockUrl" />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});
