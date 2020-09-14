import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {

        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {

            setCategories(cats => [inputValue, ...cats]); /*Yo no tengo acceso a las categorias pq no se lo estoy
            pasando como argumento. El setCategory se puede llamar con un callback que tiene el estado
            anterior.*/
            setInputValue('');
        }

    }
    const Clean = () => {
        setCategories([]);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange} />

            </form>
            <button onClick={Clean}>Limpiar</button>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired

}

