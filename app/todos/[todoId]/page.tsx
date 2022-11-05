import React from 'react'
import { Todo } from '../../../typings';
import Link from 'next/link';

type PageProps = {
    params: {
        todoId : string;
    }
}

const fetchSingleTodo = async (todoId: string) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`
    );
    const todo = await res.json();
    return todo;
}

const TodoPage = async ({ params: {todoId} }: PageProps) => {

    const todo: Todo  = await fetchSingleTodo(todoId);

    return (
        <div className='p-10 m-2 bg-blue-200 shadow-lg'>
            <Link href="/todos">
                ← Back
            </Link>
            <p>
                #{todo.id}: {todo.title}
            </p>
            <p>
                Completed: {todo.completed ? "Yes": "No"}
            </p>
            <p className='mt-5 text-right border-t border-black'>
                By User: {todo.userId}
            </p>
        </div>
    )
}

export default TodoPage