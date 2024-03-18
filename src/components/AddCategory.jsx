import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(() => target.value);
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // setCategories((c) => c.includes(inputValue) ? [...c] : [inputValue, ...c] );
        onNewCategory(inputValue.trim());
        setInputValue(() => '');
    }

    return(
        <form onSubmit={onSubmitForm} className="md:basis-5/6">
            <input 
                value={inputValue}
                onChange={ onInputChange }
                type="text" 
                placeholder="Buscar gifs..."
                className="w-full px-4 py-3 rounded-xl bg-gray-100 border-none focus:ring-0" />
        </form>
    )
}
