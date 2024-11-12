import React from "react"
import { Link } from "react-router-dom";
 function Error() {
    return(
        <div className="grid h-screen place-content-center bg-white px-4">
            <div className="text-center">
                

                <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</h1>

                <p className="mt-4 text-gray-500">We can't find that page.</p>
                <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="button">
                <Link to="/">Go back Home</Link></button>
            </div>
        </div>
    );
 }
 
 export default Error;