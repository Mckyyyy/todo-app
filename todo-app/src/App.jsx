import "./App.css";
import TodoList from "./Components/TodoList";
import { ColorThemeProvider } from "./Components/ColorThemeProvider";
import { LanguageProvider } from "./providers/LanguageProvider";

function App() {
    return (
        <LanguageProvider>
            <ColorThemeProvider>
                <div className="todo-app">
                    <TodoList />
                </div>
            </ColorThemeProvider>
        </LanguageProvider>
    );
}

export default App;
