'use client'

import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

const Search = () => {

    const [ search, setSearch ] = useState("");
    const router = useRouter();

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/search/${search}`);
        setSearch("");
    }



    return (
        <form onSubmit={handleSearch} className="text-[15px]">
            <input 
                type="text"
                value={search}
                placeholder="Enter the Search Term"
                className='p-2 border border-gray-300 rounded-md outline-none focus:border-gray-600'
                onChange={(e) => setSearch(e.target.value)}
            />
            <button
                type='submit'
                className='p-2 ml-3 text-white bg-blue-500 rounded-md hover:bg-blue-700'
            >Search</button>
        </form>
    )
}

export default Search