import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { TaskPage } from './pages/TaskPage'
import { TaskForm } from './pages/TaskForm'
import { Navigation } from './componenets/Navigation'

export const App = () => {
  return (
      <BrowserRouter>

        <Navigation/>
        <Routes>
          <Route path="/" element={<Navigate to="/task" />} />
          <Route path="/task" element={<TaskPage/>} />
          <Route path="/create" element={<TaskForm/>} />
          
        </Routes>
      </BrowserRouter>
  )
}
