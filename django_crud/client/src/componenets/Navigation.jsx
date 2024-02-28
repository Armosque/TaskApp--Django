import { Link } from "react-router-dom"

export const Navigation = () => {
    return (
        <div className="flex justify-between py-3 mt-5" >
            <Link to ="/task">
                <h1 className="font-bold text-3xl mb-4">Task app</h1> 
            </Link>
            <button className="bg-indigo-500 text-white font-bold py-2 px-2 rounded-lg">
                <Link to="/create">Create Task</Link>
            </button>
            
        </div>
        
    )
}