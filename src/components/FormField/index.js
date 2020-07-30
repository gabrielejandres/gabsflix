import React from 'react';

function FormField({ label, type, name, value, onChange }) {
    return (
        <div>
            <label>
                {label} :
                { type !== 'textarea' ?
                <input 
                    type={type} 
                    value={value}
                    name={name}
                    onChange={onChange}
                />
                :
                <textarea 
                    value={value}
                    name={name}
                    onChange={onChange}
                />
                }
            </label>
        </div>
    );
}

export default FormField;