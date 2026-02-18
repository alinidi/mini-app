export type TaskType = {
    id: number;
    name: string;
    status: 'active' | 'completed' | 'not started';
    description: string;
};
