import { Link } from 'react-router-dom';
import { useTasks } from '../hooks/useTasks';

export function TasksList() {
    const { tasks, searchTerm, setSearchTerm } = useTasks();

    return (
        <div className="bg-gray-100 rounded-xl p-6" data-testid="tasks-list">
            <h1 className="text-3xl font-bold mb-8 text-blue-950">Tasks</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search tasks..."
                aria-label="Search tasks"
                className="w-full p-4 border-2 border-gray-400 rounded-xl focus:border-blue-800 placeholder:text-blue-950 mb-6"
            />
            <ul className="space-y-3">
                {tasks.map((task) => (
                    <li key={task.id}>
                        <Link to={`/${task.id}`}>
                            <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm hover:cursor-pointer">
                                <h2 className="text-lg font-semibold text-blue-800 mr-4 flex-1">
                                    {task.name}
                                </h2>
                                <p
                                    className={`text-sm font-semibold whitespace-nowrap
                                ${task.status === 'completed' && 'text-gray-500'}
                                ${task.status === 'in progress' && 'text-blue-600'}
                                ${task.status === 'not started' && 'text-red-700'}
                            `}
                                >
                                    {task.status}
                                </p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
