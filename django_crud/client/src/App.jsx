import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { TaskPage } from './pages/TaskPage'
import { TaskForm } from './pages/TaskForm'
import { Navigation } from './componenets/Navigation'
import {Toaster} from 'react-hot-toast'
export const App = () => {
  return (
      <BrowserRouter>
      <div className='container mx-auto'>
        <Navigation/>
          <Routes>
            <Route path="/" element={<Navigate to="/task" />} />
            <Route path="/task" element={<TaskPage/>} />
            <Route path="/create" element={<TaskForm/>} />
            <Route path="/task/:id" element={<TaskForm/>} />
          </Routes>
          <Toaster/>

      </div>
        
      </BrowserRouter>
  )
}
