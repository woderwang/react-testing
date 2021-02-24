import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Avatar from '../src/component/Avatar/Avatar';
test('test first react component Avatar', () => {
    render(<Avatar />);
    expect(screen.getByTestId('avatar')).toHaveTextContent('Avatar');
})