import { useEffect } from "react";

export const TaskList = () => {

    useEffect(() => {
        console.log("Página cargada");
    }, []);
    return (
        <div>
            <h1>Task List</h1>
        </div>
    );
}