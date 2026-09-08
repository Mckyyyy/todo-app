import PropTypes from "prop-types";

const filters = [
    ["all", "All"],
    ["open", "Open"],
    ["completed", "Completed"],
];

const TaskToolbar = ({ filter, onFilterChange, onClearCompleted, completedCount }) => {
    return (
        <div className="task-toolbar">
            <div className="filter-tabs" role="group" aria-label="Filter tasks">
                {filters.map(([value, label]) => (
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
                Clear completed
            </button>
        </div>
    );
};

TaskToolbar.propTypes = {
    filter: PropTypes.oneOf(["all", "open", "completed"]).isRequired,
    onFilterChange: PropTypes.func.isRequired,
    onClearCompleted: PropTypes.func.isRequired,
    completedCount: PropTypes.number.isRequired,
};

export default TaskToolbar;
