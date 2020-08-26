import React from 'react';

import FormRenderProps from '../../render-props/form.renderprops';

var fields = [
    { id: 'email', type: 'email', label: 'Email' },
    { id: 'password', type: 'password', label: 'Password' },
    { id: 'firstName', type: 'text', label: 'FirstName' },
    { id: 'lastName', type: 'text', label: 'LastName' }
];

function SignUp() {

    function handleSubmit(e, state) {
        e.preventDefault();
        console.log(state);
    }

    return (
        <FormRenderProps fields={fields} render={function (state, handleChange) {
            return (
                <div className="container">
                    <form className="white" onSubmit={(e) => handleSubmit(e, state)}>
                        <h5 className="grey-text text-darken-3">SignUp</h5>
                        {fields.map(function (field) {
                            return (
                                <div className="input-field">
                                    <label htmlFor={field.id}>{field.label}</label>
                                    <input onChange={handleChange} type={field.type} id={field.id} />
                                </div>
                            );
                        })}
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">SignUp</button>
                        </div>
                    </form>
                </div>
            );
        }} />
    )
}

export default SignUp;
