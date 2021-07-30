import { render, screen } from '@testing-library/react';
import App from './containers/layout';
import React from 'react';
import ReactDOM from 'react-dom';  
import reportWebVitals from './reportWebVitals';
import StoreProvider  from './context'
import 'dotenv'

test('renders Pokemon link', () => {
  render(<React.StrictMode>
    <StoreProvider>
          <App />
      </StoreProvider>
</React.StrictMode>);
  const linkElement = screen.getByText(/Pokemon/i);
  expect(linkElement).toBeInTheDocument();
});
