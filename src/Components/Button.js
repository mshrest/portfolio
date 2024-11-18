import React from 'react';
import {IconButton} from '@mui/material';

const Button = ({icon, link}) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer"><IconButton>{icon}</IconButton></a>

    )
}

export default Button;
