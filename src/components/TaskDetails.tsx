import { Link, useParams } from 'react-router-dom';
import { useTasks } from '../hooks/useTasks';

export function TaskDetails() {
    const { id } = useParams();
    const { getTaskById } = useTasks();
    const task = getTaskById(Number(id));

    if (!task) {
        return (
            <div>
                <h2 className="text-3xl font-bold text-blue-900 m-3">
                    Task not found!
                </h2>
                <Link
                    to={'/'}
                    className="text-blue-500 text-2xl hover:text-gray-600 font-semibold"
                >
                    Go back
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 rounded-xl p-6">
            <h1 className="text-2xl font-bold mb-5">{task.name}</h1>
            <div className="flex flex-col gap-4 mb-4">
                <div className="flex flex-col items-start text-lg">
                    <span className=" font-semibold">Status</span>
                    <p
                        className={`text-lg font-semibold mt-1
                        ${task.status === 'completed' && 'text-gray-500'}
                        ${task.status === 'in progress' && 'text-blue-600'}
                        ${task.status === 'not started' && 'text-red-700'}
                        `}
                    >
                        {task.status}
                    </p>
                </div>
                <div className="flex flex-col items-start  text-lg">
                    <span className="font-semibold">Description</span>
                    <p className="mt-1">{task.description}</p>
                </div>
            </div>
            <Link
                to={'/'}
                className="text-blue-500 text-2xl hover:text-gray-600 font-semibold"
            >
                Back to tasks
            </Link>
        </div>
    );
}
