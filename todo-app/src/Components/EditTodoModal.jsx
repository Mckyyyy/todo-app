import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { RiCloseLine } from "react-icons/ri";

const EditTodoModal = ({ todo, onSave, onCancel }) => {
    const [text, setText] = useState(todo ? todo.text : "");
    const [error, setError] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onCancel();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onCancel]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = text.trim();
        if (!trimmed) {
            setError("Task description cannot be empty.");
            return;
        }
        onSave(trimmed);
    };

    const handleChange = (e) => {
        setText(e.target.value);
        if (error) setError("");
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onCancel();
        }
    };

    return (
        <div
            className="modal-overlay"
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="edit-modal-title"
        >
            <div className="edit-modal-card">
                <div className="edit-modal-header">
                    <h3 id="edit-modal-title">Edit Task</h3>
                    <button
                        type="button"
                        className="edit-modal-close"
                        onClick={onCancel}
                        aria-label="Close modal"
                    >
                        <RiCloseLine />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="edit-modal-form">
                    <div className="edit-modal-body">
                        <label htmlFor="edit-todo-input" className="edit-modal-label">
                            Task description
                        </label>
                        <input
                            id="edit-todo-input"
                            ref={inputRef}
                            type="text"
                            className="edit-modal-input"
                            value={text}
                            onChange={handleChange}
                            placeholder="Enter task text..."
                        />
                        {error && <p className="edit-modal-error">{error}</p>}
                    </div>

                    <div className="edit-modal-actions">
                        <button
                            type="button"
                            className="modal-btn modal-btn-cancel"
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="modal-btn modal-btn-save"
                            disabled={!text.trim()}
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

EditTodoModal.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default EditTodoModal;
