import React from 'react'
import { Todo } from '../../../../typings';
import Link from 'next/link';
import { notFound } from 'next/navigation'

export const dynamicParams = true;

type PageProps = {
    params: {
        todoId : string;
    }
}

const fetchSingleTodo = async (todoId: string) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`,
        {
            next: {
                revalidate: 60
            }
        }
    );
    const todo = await res.json();
    return todo;
};

const TodoPage = async ({ params: {todoId} }: PageProps) => {

    const todo: Todo  = await fetchSingleTodo(todoId);

    // if not ID -> 404
    if(!todo.id) return notFound();

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

export default TodoPage;

/**
 * Static Paths
 */
export async function generateStaticParams(){
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/", 
    { next: { revalidate: 60 }});
    const todos : Todo[] = await res.json();

    // For this DEMO, we are only prebuilding the first 10 pages to avoid being rate limited by the DEMO API
    // const trimmedTodos = todos.splice(0, 10);

    return todos.map((todo) => ({
        todoId: todo.id.toString()
    }))

    // [ {todoId: '1'}, {todoId: '2'} ]

}