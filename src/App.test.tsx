import React from 'react';
import {screen, render, waitFor} from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('lazy loads routes', () => {
    render(<App />);
    const loader = screen.getByText('Loading...'); 
    expect(loader).toBeInTheDocument();
  });

  it('renders the home route by default after lazy loading', async () => {
    render(<App />);

    const loader = screen.getByText('Loading...'); 
    expect(loader).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText('What captivates your curiosity today?')).toBeInTheDocument());
    
    expect(loader).not.toBeInTheDocument();
  });
});