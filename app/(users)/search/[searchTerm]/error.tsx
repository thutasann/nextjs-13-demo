'use client'

import { useEffect } from "react";

export default function Error({ error, reset } : {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return(
        <div>
            <p className="text-red-500">Something went wrong!</p>
            <button
                className="bg-red-500 p-2 text-[14px] text-white rounded-md"
                onClick={() => reset()}
            >Reset error boundary</button>
        </div>
    )
}