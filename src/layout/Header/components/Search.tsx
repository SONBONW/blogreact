import React from 'react';
interface InputProps {
    handler: boolean;
}

function Input({ handler }: InputProps) {
    return (
        <input
            type="text"
            name="search"
            className={`form-control border-0 d-lg-flex ${
                handler ? 'd-block' : 'd-none'
            }`}
            placeholder="Search"
        />
    );
}

export default Input;
