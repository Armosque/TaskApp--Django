import { useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export function TaskCard({task}) {

    const navigate = useNavigate()

    return (
        <div style={{background:'pink'}}
            onClick={() => 
                navigate('/task/'+ task.id
            )}>
            <h1 >{task.title}</h1>
            <p>{task.description}</p>
        </div>
    )
}