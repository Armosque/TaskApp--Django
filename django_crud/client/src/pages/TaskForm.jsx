import {useForm} from 'react-hook-form'
import { createTask, deleteTask, updateTask, getTask } from '../api/TaskApi'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect} from 'react'
import { toast } from 'react-hot-toast'

export const TaskForm = () => {
    const {register, handleSubmit, formState:{errors}, setValue} = useForm()
    const navigate = useNavigate()
    const params = useParams()
    const onSubmit = handleSubmit( async data => {
        if (params.id){
            await updateTask(params.id, data)
            toast.success('Task updated successfully')
        }else {
            await createTask(data)
            toast.success('Task created successfully')
        }
        
        navigate('/task')
    })

    useEffect(()=>{
        async function loadTask () {
        
            if (params.id){
            
                const res = await getTask(params.id)
                setValue('title', res.data.title)
                setValue('description', res.data.description)
            }   
        }
        loadTask()
    },[])
    return (
        <div>
            <form  onSubmit={onSubmit}>
                <input type="text" placeholder="Tittle" 
                {...register('title', {required: true})}/>
                {errors.title && <span>This field is required</span>}
                <textarea  rows="3" placeholder="Description"
                {...register('description', {required: true})}>
                </textarea>
                {errors.description && <span>This field is required</span>}
                <button>Save</button>
            </form>
            {params.id && <button onClick={async ()=>{
                const accepted = window.confirm('Are you sure?')
                if (accepted){
                    await deleteTask(params.id)
                    toast.success('Task deleted successfully')
                    navigate('/task')
                }
                
            }}>Delete</button>}
            
        </div>
    )
}