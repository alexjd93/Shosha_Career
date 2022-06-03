import { FaRegTrashAlt } from "react-icons/fa";

type Props = {
    title: string
}
const Header = ({title}:Props) => { 
    return(
        <div className="headline flex justify-between">
            <h2>{title}</h2>
            <a style={{display:"inline"}}>
                clear
            {/* <FaRegTrashAlt size="17"/> */}
            </a>
            
        </div>
        
    )
}

export default Header