import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { TasksList } from './components/TasksList';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TasksList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
