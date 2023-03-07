import {render} from "@testing-library/react";
import React from "react";
import UserPage from "./UserPage";

describe('HomePage', () => {
    describe('Layout', () => {
        it('has root page div', () => {
            const {queryByTestId} = render(<UserPage/>);
            const userPageDiv = queryByTestId('userpage');
            expect(userPageDiv).toBeInTheDocument();
        });
    });
});