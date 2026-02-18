import type { TaskType } from '../types/tasks';

export const MOCK_TASKS: TaskType[] = [
    {
        id: 1,
        name: 'Custom hook',
        status: 'completed',
        description: 'Create a custom hook for data access',
    },
    {
        id: 2,
        name: 'Detailed task view',
        status: 'not started',
        description:
            'Implement task details component with additional information',
    },
    {
        id: 3,
        name: 'Task list',
        status: 'not started',
        description: 'Display a list of all tasks',
    },
    {
        id: 4,
        name: 'Routing',
        status: 'not started',
        description: 'Set up basic routing between list and details pages',
    },
    {
        id: 5,
        name: 'Testing',
        status: 'not started',
        description: 'Write component tests to demonstrate testing skills',
    },
];
