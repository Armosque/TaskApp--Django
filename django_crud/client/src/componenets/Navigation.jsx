import { Link } from "react-router-dom"

export const Navigation = () => {
    return (
        <div>
            <Link to ="/task">
                <h1>Task app</h1> 
            </Link>
            <Link to="/create">Create Task</Link>
        </div>
        
    )
}