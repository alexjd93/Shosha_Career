import { FaRegTrashAlt } from "react-icons/fa";

type Props = {
    title: string
    deleteAll?:(() => void);
}
const Header = ({title,deleteAll}:Props) => { 
    return(
        <div className="headline flex justify-between">
            <h2>{title}</h2>
            <a role="button" style={{display:"inline"}} onClick={deleteAll}>
            <FaRegTrashAlt size="17"/>
            </a>
            
        </div>
        
    )
}

export default Header