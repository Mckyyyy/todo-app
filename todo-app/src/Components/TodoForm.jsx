import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ edit, onSubmit, labels }) => {
    const [input, setInput] = useState(edit ? edit.value : "");

    const inputRef = useRef(null);
    
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => { 
        e.preventDefault();

        if (!input.trim()) return;

        onSubmit({ id: edit?.id || Math.floor(Math.random() * 10000), text: input });

        setInput("");
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            {edit ? ( 
                <>  
                    <input 
                        placeholder={labels.updateTodo}
                        value={input} 
                        onChange={handleChange} 
                        name="text" 
                        ref={inputRef}
                        className="todo-input edit"
                    />
                    <button type="submit" className="todo-button edit">{labels.update}</button>
                </>
            ) : (
                <>
                    <input 
                        placeholder={labels.addTodo}
                        value={input} 
                        onChange={handleChange} 
                        name="text" 
                        className="todo-input"
                        ref={inputRef}
                    />
                    <button type="submit" className="todo-button">{labels.add}</button>
                </>
            )}
        </form>
    );
};

TodoForm.propTypes = {
    edit: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string,
    }),
    onSubmit: PropTypes.func.isRequired,
    labels: PropTypes.shape({
        updateTodo: PropTypes.string.isRequired,
        update: PropTypes.string.isRequired,
        addTodo: PropTypes.string.isRequired,
        add: PropTypes.string.isRequired,
    }).isRequired,
};

export default TodoForm;
