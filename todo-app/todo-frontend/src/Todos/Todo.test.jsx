import { render, screen } from '@testing-library/react';
import Todo from './Todo';

test('renders todo text', () => {
    const todo = { text: 'Test todo', done: false };

    render(
        <Todo
            todo={todo}
            onClickDelete={() => { }}
            onClickComplete={() => { }}
        />
    );

    screen.getByText('Test todo');
});
