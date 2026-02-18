import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TasksList } from '../components/TasksList';
import { BrowserRouter } from 'react-router-dom';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
            <a
                href={to}
                onClick={(e) => {
                    e.preventDefault();
                    mockNavigate(to);
                }}
            >
                {children}
            </a>
        ),
    };
});

describe('TasksList component', () => {
    it('the component is being rendered', () => {
        render(
            <BrowserRouter>
                <TasksList />
            </BrowserRouter>
        );

        const header = screen.getByTestId('tasks-list');
        expect(header).toBeInTheDocument();
    });

    it('has a search input with aria-label', () => {
        render(
            <BrowserRouter>
                <TasksList />
            </BrowserRouter>
        );

        const searchInput = screen.getByLabelText('Search tasks');
        expect(searchInput).toBeInTheDocument();
        expect(searchInput).toHaveAttribute('placeholder', 'Search tasks...');
    });

    it('displays tasks from mock data', () => {
        render(
            <BrowserRouter>
                <TasksList />
            </BrowserRouter>
        );

        expect(screen.getByText('Custom hook')).toBeInTheDocument();
    });

    it('navigates to task details when clicking a task', async () => {
        const user = userEvent.setup();

        render(
            <BrowserRouter>
                <TasksList />
            </BrowserRouter>
        );
        const taskLink = screen.getByText('Custom hook');
        await user.click(taskLink);

        expect(mockNavigate).toHaveBeenCalledWith('/1');
    });
});
