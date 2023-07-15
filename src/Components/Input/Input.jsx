import React from 'react';
import { TextField } from '@mui/material';
function Input(props) {
    const label = props.label;
    const defaultValue = props.defaultValue;
    return (
        <div className="flex mr-10">
            <TextField
                id="outlined-helperText"
                label={label}
                defaultValue={defaultValue}
                color="error"
                fullWidth
                type={label === 'CVV/CVC' ? 'password' : 'text'}
                InputProps={{
                    sx: {
                        borderRadius: '16px',
                        fontFamily: 'Open Sans',
                    },
                }}
            />
        </div>
    );
}

export default Input;
