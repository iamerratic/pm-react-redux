import React from 'react';

import FormRenderProps from '../../render-props/form.renderprops';

var fields = [
    { id: 'email', type: 'email', label: 'Email' },
    { id: 'password', type: 'password', label: 'Password' }
];

function SignIn() {

    function handleSubmit(e, state) {
        e.preventDefault();
        console.log(state);
    }

    return (
        <FormRenderProps fields={fields} render={function (state, handleChange) {
            return (
                <div className="container">
                    <form className="white" onSubmit={function (e) { handleSubmit(e, state) }}>
                        <h5 className="grey-text text-darken-3">SignIn</h5>
                        {fields.map(function (field) {
                            return (
                                <div className="input-field">
                                    <label htmlFor={field.id}>{field.label}</label>
                                    <input onChange={handleChange} type={field.type} id={field.id} />
                                </div>
                            );
                        })}
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Login</button>
                        </div>
                    </form>
                </div>
            );
        }} />
    )
}

export default SignIn;
