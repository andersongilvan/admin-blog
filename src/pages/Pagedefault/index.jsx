import { Outlet } from "react-router-dom"
import style from "./style.module.css"

const PageDefault = () => {
    return(
        <main className={style.main}>
            <Outlet />
        </main>
    )
}

export default PageDefault