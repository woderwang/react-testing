import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import dvaStore from './mock/dvaMock';
import '@testing-library/jest-dom/extend-expect';
import DvaComponent from '../src/component/Test/DvaComponent';
test('dva test', async () => {
    render(<Provider store={dvaStore}><DvaComponent /></Provider>);
    await waitFor(() => expect(screen.getByTestId('dva-test')).toHaveTextContent('woder'));
});