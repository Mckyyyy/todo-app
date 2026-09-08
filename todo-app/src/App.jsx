import "./App.css";
import TodoList from "./Components/TodoList";
import { ColorThemeProvider } from "./Components/ColorThemeProvider";

function App() {
    return (
        <ColorThemeProvider>
            <div className="todo-app">
                <TodoList />
            </div>
        </ColorThemeProvider>
    );
}

export default App;
