import { useMemo, useState } from 'react';
import { MOCK_TASKS } from '../mocks/mockData';

export function useTasks() {
    const [tasks] = useState(MOCK_TASKS);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTasks = useMemo(() => {
        if (!searchTerm) return tasks;

        return tasks.filter((task) =>
            task.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, tasks]);

    const getTaskById = (id: number) => {
        return tasks.find((task) => task.id === id);
    };

    return {
        tasks: filteredTasks,
        searchTerm,
        setSearchTerm,
        getTaskById,
    };
}
