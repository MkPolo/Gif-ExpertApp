import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories}) => {

    const [inpuValue, setinpuValue] = useState('');//'' si esta vacio poner ''

    const handleInoutValue = (e) => {
        setinpuValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inpuValue.trim().length > 2 ){
            setCategories( cats => [  inpuValue,...cats]);
            setinpuValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inpuValue}
                onChange={handleInoutValue} />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
