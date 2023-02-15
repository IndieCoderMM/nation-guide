import React from 'react';
import renderer from 'react-test-renderer';
import DataItem from '../components/DataItem';

describe('Component for Displaying Data', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<DataItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
