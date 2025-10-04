import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Headercomponent from "./utils/header";

export default function Layout() {

    return (
        <div className="layout">
            <Sidebar/>
        <main className="app-main">
            <Headercomponent/>
            <div className="app-content">
                <Outlet/>
            </div>
        </main>

        </div>
    )

}