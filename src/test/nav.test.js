import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../components/nav';

describe('Navigation', () => {
  it('Should display correctly', () => {
    const page = renderer.create(
      <Router>
        <Nav />
      </Router>
    );
    const componentTree = page.toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
