import React from 'react'

type PageProps = {
    params: {
        searchTerm: string;
    };
};

type SearchResult = {
    organic_results: [
        {
            position: number;
            title: string;
            link: string;
            thumbnail: string;
            snippet: string;
        }
    ]
}

const Search = async(searchTerm: string) => {
    const res = await fetch(
        `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
    );
    
    // If ther is an error, redirect to error.tsx
    // throw new Error("WHOOPS something broke");
    const data: SearchResult = await res.json();
    return data;
}

async function SearchResults({params: {searchTerm}}: PageProps) {

    const searchResults = await Search(searchTerm);

    return (
        <div>
            <p className="text-sm text-gray-500">Your serached for: {searchTerm}</p>

            <ol className="p-5 space-y-5">
                {
                    searchResults.organic_results.map((result) => (
                        <li key={result.position} className="list-decimal">
                            <p className="font-bold">{result.title}</p>
                            <p>{result.snippet}</p>
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}

export default SearchResults