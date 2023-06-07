import React from 'react';
import { useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import HomePage from '../components/homePage';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('<HomePage />', () => {
  const mockedArray = [
    { name: 'Test Country 1', flag: 'https://test-country-1-flag.png' },
    { name: 'Test Country 2', flag: 'https://test-country-2-flag.png' },
    { name: 'Test Country 3', flag: 'https://test-country-3-flag.png' },
  ];

  beforeEach(() => {
    useSelector.mockReturnValue({ StateInfo: mockedArray });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should display correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should display all states after loading', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const images = screen.getAllByRole('link', {
      name: /^test country/i,
    });
    expect(images).toHaveLength(mockedArray.length);
  });

  it('Should display states depending on filtered search', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const search = screen.getByPlaceholderText('Search a country here');
    fireEvent.change(search, { target: { value: 'test country 2' } });

    const stateImages = screen.getAllByText(/test country 2/i);
    expect(stateImages).toHaveLength(1);
  });
});
