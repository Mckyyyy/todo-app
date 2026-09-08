import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Modal from "./Modal"; // Import the Modal component
import Clock from "./Clock"; // Import the Clock component
import Profile from "./profile";
import TaskToolbar from "./TaskToolbar";

const TodoList = () => {
    const [todos, setTodos] = useState(() => {
        try {
            const savedTodos = localStorage.getItem("todo-dashboard-tasks");
            return savedTodos ? JSON.parse(savedTodos) : [];
        } catch {
            return [];
        }
    });
    const [filter, setFilter] = useState("all");
    const [modalMessage, setModalMessage] = useState(""); // State to store modal message
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility

    // Function to calculate brightness of a color
    const getColorBrightness = (color) => {
        const rgb = color.match(/\d+/g);
        const r = parseInt(rgb[0], 10);
        const g = parseInt(rgb[1], 10);
        const b = parseInt(rgb[2], 10);

        const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        return brightness;
    };

    // Function to generate random colors
    const getRandomColor = () => {
        const colors = [
            "rgb(255, 99, 71)", // Tomato
            "rgb(255, 140, 0)", // Dark Orange
            "rgb(255, 215, 0)", // Gold
            "rgb(50, 205, 50)", // Lime Green
            "rgb(30, 144, 255)", // Dodger Blue
            "rgb(138, 43, 226)", // Blue Violet
            "rgb(255, 20, 147)", // Deep Pink
            "rgb(255, 69, 0)", // Orange Red
            "rgb(218, 165, 32)", // Goldenrod
            "rgb(127, 255, 0)", // Chartreuse
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    // Modify the addTodo function to set a color and adjust text color
    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const randomColor = getRandomColor();
        const brightness = getColorBrightness(randomColor);
        const textColor = brightness > 128 ? "black" : "white"; // Choose text color based on brightness

        const newTodo = {
            ...todo,
            color: randomColor,
            textColor: textColor, // Add text color for each todo item
        };

        setTodos([newTodo, ...todos]);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos((prev) =>
            prev.map((item) => (item.id === todoId ? { ...item, text: newValue.text } : item))
        );
        showModalWithMessage("Todo updated successfully!"); // Show custom modal after update
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
        showModalWithMessage("Todo removed successfully!"); // Show custom modal after removal
    };

    const completeTodo = (id) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
            )
        );
        showModalWithMessage("Todo marked as complete!"); // Show custom modal after completing
    };

    const showModalWithMessage = (message) => {
        setModalMessage(message);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        localStorage.setItem("todo-dashboard-tasks", JSON.stringify(todos));
    }, [todos]);

    const clearCompleted = () => {
        setTodos((prev) => prev.filter((todo) => !todo.isComplete));
    };

    const completedCount = todos.filter((todo) => todo.isComplete).length;
    const remainingCount = todos.length - completedCount;
    const progress = todos.length ? Math.round((completedCount / todos.length) * 100) : 0;
    const visibleTodos = todos.filter((todo) => {
        if (filter === "open") return !todo.isComplete;
        if (filter === "completed") return todo.isComplete;
        return true;
    });

    return (
        <div className="todo-container">
            <header className="dashboard-header">
                <div>
                    <p className="eyebrow">PERSONAL DASHBOARD</p>
                    <h1>Good day, let&apos;s get things done.</h1>
                </div>
                <div className="header-mark" aria-hidden="true">TD</div>
            </header>
            <div className="dashboard-grid">
                <aside className="dashboard-sidebar">
                    <Profile />
                    <Clock />
                    <div className="focus-note">
                        <span className="focus-dot" />
                        <div>
                            <strong>Daily focus</strong>
                            <p>Small steps make big progress.</p>
                        </div>
                    </div>
                    <div className="progress-block">
                        <div className="progress-label">
                            <span>Today&apos;s progress</span>
                            <strong>{progress}%</strong>
                        </div>
                        <div className="progress-track"><span style={{ width: `${progress}%` }} /></div>
                    </div>
                </aside>
                <main className="todo-app">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">YOUR TASKS</p>
                            <h2>My to-do list</h2>
                        </div>
                        <span className="task-count">{remainingCount} open</span>
                    </div>
                <TodoForm onSubmit={addTodo} />
                    <TaskToolbar
                        filter={filter}
                        onFilterChange={setFilter}
                        onClearCompleted={clearCompleted}
                        completedCount={completedCount}
                    />
                <div className="stats-row">
                    <button className={filter === "open" ? "stat-card stat-card-active" : "stat-card"} type="button" onClick={() => setFilter("open")} aria-pressed={filter === "open"}>
                        <span className="stat-icon open-icon">○</span><span><strong>{remainingCount}</strong><small>Open tasks</small></span>
                    </button>
                    <button className={filter === "completed" ? "stat-card stat-card-active" : "stat-card"} type="button" onClick={() => setFilter("completed")} aria-pressed={filter === "completed"}>
                        <span className="stat-icon done-icon">✓</span><span><strong>{completedCount}</strong><small>Completed</small></span>
                    </button>
                    <button className={filter === "all" ? "stat-card stat-card-active" : "stat-card"} type="button" onClick={() => setFilter("all")} aria-pressed={filter === "all"}>
                        <span className="stat-icon total-icon">#</span><span><strong>{todos.length}</strong><small>Total tasks</small></span>
                    </button>
                </div>
                <Todo
                    todos={visibleTodos}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
                {visibleTodos.length === 0 && <div className="empty-state"><span>✦</span><p>{todos.length === 0 ? "Your list is clear." : "Nothing here yet."}</p><small>{todos.length === 0 ? "Add a task above to get started." : "Try another filter to see more tasks."}</small></div>}
                {showModal && <Modal message={modalMessage} onClose={closeModal} />}
                </main>
            </div>
        </div>
    );
};

export default TodoList;
