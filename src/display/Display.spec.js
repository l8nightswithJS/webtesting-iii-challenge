// Test away!
import React from "react";
import * as rtl from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';
// import { fireEvent } from "@testing-library/react";


test('<Display> snapshot', () => {
    const wrapper = rtl.render(<Display />)

    expect(wrapper.asFragment()).toMatchSnapshot();
})
