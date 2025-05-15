import React, { useState } from "react";
import SearchBox from "./components/SearchBox";

function App() {

    const [search, setSearch] = useState('');

    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl h-screen mx-auto">
                <main className="py-12 flex flex-col items-center justify-center">
                    <img src="/images/main.svg" className="w-[400px]" />
                    <h1 className="text-4xl text-indigo-800 font-bold text-center">Find Movies You'll <br /> Enjoy without a Hastle</h1>
                    <SearchBox search={search} setSearch={setSearch}/>
                </main>
            </div>
        </div>
    );
}

export default App;
