import PropTypes from "prop-types";

const TaskToolbar = ({ filter, onFilterChange, onClearCompleted, completedCount, labels }) => {
    const localizedFilters = [["all", labels.all], ["open", labels.openTasks], ["completed", labels.completed]];
    return (
        <div className="task-toolbar">
            <div className="filter-tabs" role="group" aria-label="Filter tasks">
                {localizedFilters.map(([value, label]) => (
                    <button
                        key={value}
                        type="button"
                        className={filter === value ? "filter-tab active" : "filter-tab"}
                        onClick={() => onFilterChange(value)}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <button
                type="button"
                className="clear-button"
                onClick={onClearCompleted}
                disabled={completedCount === 0}
            >
                {labels.clearCompleted}
            </button>
        </div>
    );
};

TaskToolbar.propTypes = {
    filter: PropTypes.oneOf(["all", "open", "completed"]).isRequired,
    onFilterChange: PropTypes.func.isRequired,
    onClearCompleted: PropTypes.func.isRequired,
    completedCount: PropTypes.number.isRequired,
    labels: PropTypes.shape({
        all: PropTypes.string.isRequired,
        openTasks: PropTypes.string.isRequired,
        completed: PropTypes.string.isRequired,
        clearCompleted: PropTypes.string.isRequired,
    }).isRequired,
};

export default TaskToolbar;
