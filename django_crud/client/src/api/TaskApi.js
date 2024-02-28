import axios from 'axios'



export const getAllTask = () => {
    return axios.get('http://localhost:8000/task/api/task/')
    
}

export const createTask = (data) => {
    return axios.post('http://localhost:8000/task/api/task/', data)
}

export const getTask= (id) => {
    return axios.get(`http://localhost:8000/task/api/task/${id}/`)
}

export const deleteTask = (id) => {
    return axios.delete(`http://localhost:8000/task/api/task/${id}/`)
}

export const updateTask = (id, task) => {
    return axios.put(`http://localhost:8000/task/api/task/${id}/`, task)
}