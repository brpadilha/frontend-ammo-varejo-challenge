import { render, screen } from '@testing-library/react';
import { Header } from '../Header';

describe('Header', () => {
  it('should display find title mmartan', () => {
    render(<Header />);
    expect(screen.getByText('mmartan')).toBeInTheDocument();
  });

  it('should display a input', () => {
    render(<Header />);
    expect(screen.getByPlaceholderText('Filtrar produtos')).toBeInTheDocument();
  }
  );

  it('should display a button', () => {
    render(<Header />);
    expect(screen.getByText('Buscar')).toBeInTheDocument();
  }
  );

});

