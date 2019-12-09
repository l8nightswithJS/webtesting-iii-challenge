import React from "react";
import * as rtl from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';
import { fireEvent } from "@testing-library/react";

test('<Dashboard> SnapShot', async () => {
    const wrapper = rtl.render(<Dashboard />);

    expect(wrapper.asFragment()).toMatchSnapshot();

})

