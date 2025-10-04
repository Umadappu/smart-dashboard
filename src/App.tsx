import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout"
import ExpensesPage from "./routes/expenses/expenses"
import TasksPage from "./routes/tasks/tasks"
import SettingsPage from "./routes/settings/settings"
import DashboardPage from "./routes/dashboard/dashboard"


function App() {
 

  return (
    <>
     <div>
    
     <Routes>
      <Route path="/"  element = {<Layout/>}>
      <Route index element = {<DashboardPage/>}/>
      <Route path="/expenses" element= {<ExpensesPage/>} />
      <Route path="/tasks" element={<TasksPage/>}/>
      <Route path="/settings" element={<SettingsPage/>} />
      </Route>
     </Routes>
     </div>
    </>
  )
}

export default App
