import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="app-sidebar">
           <NavLink to="/" end className={({isActive}) => (isActive ? 'active' : '')}> Dashboard </NavLink>
           <NavLink to="/expenses" className={({isActive}) => (isActive ? 'active' : '')}>
            Exprenses
           </NavLink>
           <NavLink to="/tasks" className={({isActive}) => (isActive ? 'active' : '')}>
            Tasks
           </NavLink>
           <NavLink to="/settings" className={({isActive}) => (isActive ? 'active' : '')}>
            Settings
           </NavLink>
        </aside>
    )
}