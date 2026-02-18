import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { TasksList } from './components/TasksList';
import { TaskDetails } from './components/TaskDetails';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TasksList />} />
                <Route path="/:id" element={<TaskDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
