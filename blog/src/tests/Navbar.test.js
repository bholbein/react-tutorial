import {render, screen} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; 

import NavBar from '../Navbar';

describe('NavBar', () => {
    test('NavBar to be present and completed', () => {
        render(<Router><NavBar /></Router> );
    // expect routes to Home and New Blog
    expect(screen.getByText('Home')).toBeInTheDocument;
    expect(screen.getByText('New Blog')).toBeInTheDocument;
    // expect three link elements in navigation
    expect(screen.getAllByRole('link')).toHaveLength(3);
    });
});