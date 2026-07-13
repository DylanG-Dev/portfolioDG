import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest'
import App from './App';

describe('App', () => {
    it('renders without crashing and shows the nav', () => {
        render(<App />);

        expect(screen.getByText('Johanna')).toBeInTheDocument();
    }); 
});