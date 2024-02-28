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
        <div className='max-w-md mx-auto'>
            <form  onSubmit={onSubmit}>
                <input type="text" placeholder="Tittle" 
                {...register('title', {required: true})}
                className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                />
                {errors.title && <span>This field is required</span>}
                <textarea   rows="3" placeholder="Description"
                {...register('description', {required: true})}
                className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'>
                </textarea>
                {errors.description && <span>This field is required</span>}
                <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Save</button>
            </form>
            
            {params.id && (
            <div >
                <button
                onClick={async () => {
                    await deleteTask(params.id)
                    toast.success('Task deleted successfully')
                    navigate('/task')
                }}
                className='bg-red-500 p-3 rounded-lg block w-full mt-3'>Delete</button>

            </div>
        
            )}

        </div>
    )
}