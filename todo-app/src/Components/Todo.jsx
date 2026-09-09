import { useState } from "react";
import PropTypes from "prop-types";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import EditTodoModal from "./EditTodoModal";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [editingTodo, setEditingTodo] = useState(null);

    const handleOpenEdit = (todo) => {
        setEditingTodo(todo);
    };

    const handleSave = (updatedText) => {
        if (!editingTodo) return;
        updateTodo(editingTodo.id, { text: updatedText });
        setEditingTodo(null);
    };

    const handleCancel = () => {
        setEditingTodo(null);
    };

    return (
        <div>
            {todos.map((todo) => (
                <div
                    key={todo.id}
                    className={todo.isComplete ? "todo-row complete done" : "todo-row"}
                    style={{ backgroundColor: todo.color }} // Dynamic background color
                >
                    <div
                        onClick={() => completeTodo(todo.id)}
                        className={todo.isComplete ? "todo-text completed" : "todo-text"}
                    >
                        {todo.text}
                    </div>
                    <div className="icons">
                        <RiCloseCircleLine
                            onClick={() => removeTodo(todo.id)}
                            className="delete-icon"
                            title="Delete task"
                        />
                        <TiEdit
                            onClick={() => handleOpenEdit(todo)}
                            className="edit-icon"
                            title="Edit task"
                        />
                    </div>
                </div>
            ))}

            {editingTodo && (
                <EditTodoModal
                    todo={editingTodo}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
};

Todo.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    completeTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
};

export default Todo;

