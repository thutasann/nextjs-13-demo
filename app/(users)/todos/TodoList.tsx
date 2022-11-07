import Link from 'next/link';
import React from 'react'
import { Todo } from '../../../typings';

const fetchTodos = async() => {

    const timeout = Math.floor(Math.random() * 5 +1) * 1000;
    await new Promise((resolve) => setTimeout(resolve, timeout));

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