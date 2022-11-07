import Link from 'next/link';
import React from 'react'
import { Todo } from '../../../typings';

const fetchTodos = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const todos : Todo[] = await res.json();
    console.log("This is the todos", todos);
    return todos;
}

async function TodoList() {

    const todos = await fetchTodos();

    return (
        <div>
            {
                todos.map((todo, i) => (
                    <p key={i} className="my-3 ml-5">
                        <Link href={`/todos/${todo.id}`} className="underline">
                            Todo: {todo.id}
                        </Link>
                    </p>
                ))
            }
        </div>
    )
}

export default TodoList