import React from "react";

function FormFooter() {
    return (
        <div className="form-footer">
            <form action="#">
                <h4>Weekly NewSletter</h4>
                <p>Get blog articles and offers via email</p>
                <label htmlFor="email" className="w-100">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Your Email"
                    />
                    <i>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.4375 4.375C2.91973 4.375 2.5 4.79473 2.5 5.3125V14.6875C2.5 15.2053 2.91973 15.625 3.4375 15.625H16.5625C17.0803 15.625 17.5 15.2053 17.5 14.6875V5.3125C17.5 4.79473 17.0803 4.375 16.5625 4.375H3.4375ZM1.25 5.3125C1.25 4.10438 2.22938 3.125 3.4375 3.125H16.5625C17.7706 3.125 18.75 4.10438 18.75 5.3125V14.6875C18.75 15.8956 17.7706 16.875 16.5625 16.875H3.4375C2.22938 16.875 1.25 15.8956 1.25 14.6875V5.3125Z"
                                fill="#696A75"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.88165 5.86629C4.09357 5.59382 4.48625 5.54474 4.75871 5.75665L10 9.83321L15.2413 5.75665C15.5138 5.54474 15.9064 5.59382 16.1183 5.86629C16.3303 6.13875 16.2812 6.53143 16.0087 6.74335L10.3837 11.1183C10.158 11.2939 9.84198 11.2939 9.61629 11.1183L3.99129 6.74335C3.71882 6.53143 3.66974 6.13875 3.88165 5.86629Z"
                                fill="#696A75"
                            />
                        </svg>
                    </i>
                </label>
                <button type="button" className="btn btn-primary">
                    Subscribe
                </button>
            </form>
        </div>
    );
}

export default FormFooter;
