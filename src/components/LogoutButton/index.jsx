import style from "./style.module.css"

const LogoutButton = ({children, logout}) => {
    return(
        <button className={style.btn} onClick={logout}> {children} </button>
    )
}
export default LogoutButton