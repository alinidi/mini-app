export type TaskType = {
    id: number;
    name: string;
    status: 'in progress' | 'completed' | 'not started';
    description: string;
};
