type Props = {
    title: string
}
const Header = ({title}:Props) => { 
    return(
        <div className="headline">
            <h2>{title}</h2>
        </div>
        
    )
}

export default Header