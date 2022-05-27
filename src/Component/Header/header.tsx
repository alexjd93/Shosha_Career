type Props = {
    title: string
}
const Header = ({title}:Props) => {
    console.log(title)
    return(
        <div className="headline">
            <h2>{title}</h2>
        </div>
        
    )
}

export default Header