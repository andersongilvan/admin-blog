import style from "./style.module.css"

const Button = ({children}) => {
    return(
        <button className={style.btn}> {children} </button>
    )
}

export default Button