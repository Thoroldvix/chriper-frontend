import React from "react";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import {render} from "@testing-library/react";
import App from "./App";

describe('App', () => {

    const setup = (path) => {
        const utils = render(
            <MemoryRouter initialEntries={[path]}>
                <Routes>
                    <Route path="*" element={<App/>}/>
                </Routes>
            </MemoryRouter>
        );
        return {...utils};
    }

    it('displays home page when url is /', () => {
        const { queryByTestId } = setup('/');
        expect(queryByTestId('homepage')).toBeInTheDocument();

    });
    it('displays user page when url is /login', () => {
        const {container} = setup('/login');
        const header = container.querySelector('h1');
        expect(header).toHaveTextContent('Login');
    });
    it('displays only LoginPage  when url is /login', () => {
        const { queryByTestId } = setup('/login');
        expect(queryByTestId('homepage')).not.toBeInTheDocument();
    });
    it('displays UserSignupPage when url is /signup', () => {
        const {container} = setup('/signup');
        const header = container.querySelector('h1');
        expect(header).toHaveTextContent('Sign Up');
    });
    it('displays userpage  when url is other than /, /login or /signup', () => {
        const { queryByTestId } = setup('/user1');
        expect(queryByTestId('userpage')).toBeInTheDocument();

    });
});




