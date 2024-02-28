import { useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export function TaskCard({task}) {

    const navigate = useNavigate()

    return (
        <div className="bg-zinc-800  mb-5 py-5 rounded-md  hover:bg-zinc-700 hover:cursor-pointer"
            onClick={() => 
                navigate('/task/'+ task.id
            )}>
            <h1 className="font-bold uppercase">{task.title}</h1>
            <p className="text-slate-400">{task.description}</p>
        </div>
    )
}