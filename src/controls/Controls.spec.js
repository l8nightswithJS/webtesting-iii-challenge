// Test away!
// Test away
import React from "react";
import * as rtl from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls.js'
import { fireEvent, render, cleanup } from "@testing-library/react";
afterEach(cleanup);
// test('gate can be toggled open on click.', async () => {
//     // const toggleToOpen = jest.fn();
//     const wrapper = rtl.render(<Controls locked={false} closed={false} />);
//     // await wrapper.findByTestId(/open/i);
    
//     // const openButton = wrapper.findByTestId(/open/i);
//     const locked = wrapper.getByText(/locked/i)
//     expect(locked).toHaveClass('control panel');
//     // expect(openButton).toEqual('open');
//     // rtl.fireEvent.click(openButton);
//     // expect(toggleToOpen).toHaveBeenCalled();

// })

test('looking to find button open.', async () => {
    const toggle = jest.fn();
    const { getByText } = render(<Controls closed={false} toggle={toggle} />);
    const close = getByText(/close gate/i);
    fireEvent.click(close);
    expect(toggle).not.toHaveBeenCalled();
    
})

test('looking to find button.', async () => {
    const toggle = jest.fn();
    const { getByText } = render(<Controls locked={true} toggle={toggle} />);
    const locked = getByText(/lock gate/i);
    fireEvent.click(locked);
    expect(toggle).not.toHaveBeenCalled();
    
})
//cleanup for testing

test('if close toggle is disabled when locked.', async () => {
    const toggle = jest.fn()
    const { getByTestId } = render(<Controls locked={true} toggle={toggle} />);
    const closed = getByTestId('closed');
    const locked = getByTestId('locked');
    fireEvent.click(closed);
    fireEvent.click(locked);
    expect(closed).toBeDisabled()
})


