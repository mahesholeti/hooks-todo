import React,{useState} from 'react';

export const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);
        setValue('');
    }
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Enter"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}