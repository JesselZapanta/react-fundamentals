import { Search } from 'lucide-react'
import React from 'react'

function SearchBox({search, setSearch}) {
    return (
        <div className="mt-12 w-xl bg-indigo-200 p-4 rounded-md">
            <div className="flex gap-2 text-xl items-center">
                <Search className='h-4 w-4'/>

                <input
                    type="text"
                    placeholder="Search through a thousand of movies"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full text-indigo-900 h-full border-none outline-none"
                />
            </div>
        </div>
    );
}

export default SearchBox;