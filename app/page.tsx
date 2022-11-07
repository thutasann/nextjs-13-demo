import React, { Suspense } from 'react'
import TodoList from './(users)/todos/TodoList'

const Home = () => {
    return (
        <div className='text-[20px]
        ml-5 mt-4'>
            <Suspense fallback={<p>Loading Todos...</p>}>
                <h1>Loading Todos</h1>
                <div className='flex space-x-2'>
                    {/* @ts-ignore */}
                    <TodoList/>
                </div>
            </Suspense>
            <Suspense fallback={<p>Loading Shopping Trolley...</p>}>
                <div className='flex space-x-2'>
                    {/* @ts-ignore */}
                    <TodoList/>
                </div>
                <h1>Loading Shopping Trolley</h1>
            </Suspense>
        </div>
    )
}

export default Home