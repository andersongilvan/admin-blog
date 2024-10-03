 import { Link } from "react-router-dom"
import "./style.css"

 const ButtonLink = ({url, children}) => {
    return(
        <Link className="btn-link" to={url}>
            {children}
        </Link>
    )
 }
 export default ButtonLink