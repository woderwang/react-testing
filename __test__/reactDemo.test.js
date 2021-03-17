import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Avatar from '../src/component/Avatar/Avatar';
import UserName from '../src/component/UserName/UserName';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import axios from 'axios';
const server = setupServer(
    rest.get('/greeting', (req, res, ctx) => {
        return res(ctx.json({ greeting: 'hello there' }))
    }),
    rest.get('/getUserName', (req, res, ctx) => {
        return res(ctx.json({
            code: 'ACK',
            data: 'woder',
        }));
    }),
    rest.get('/getSecondName', (req, res, ctx) => {
        return res(ctx.json({ code: 'ACK', data: 'lucy' }));
    }),
);
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
test('test first react component Avatar', async () => {
    render(<Avatar />);
    await waitFor(() => expect(screen.getByTestId('avatar')).toHaveTextContent('Avatar'));
});
test('request call test', async () => {
    await axios.get('/greeting').then(res => {
        expect(res.data).toStrictEqual({ greeting: 'hello there' });
    })
});
test('axios in react component', async () => {
    render(<UserName />);
    await waitFor(() => expect(screen.getByTestId('user-name')).toHaveTextContent('woder'));

});
test('click react component', async () => {
    render(<UserName />);
    fireEvent.click(screen.getByTestId('btn-fetch'));
    await waitFor(() => expect(screen.getByTestId('user-name')).toHaveTextContent('lucy'));
});