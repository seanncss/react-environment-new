import React from 'react'
import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('should render text correctly', () => {
    const { getByText } = render(<App />)
    expect(getByText('Hello, Jest!')).toBeInTheDocument()
  })
});