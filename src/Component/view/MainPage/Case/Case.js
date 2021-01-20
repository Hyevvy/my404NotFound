import './Case.css'
function Case(props){
    console.log(props.name)
    return(
        <div className="Case">
            {props.name}
        </div>
    )
}
export default Case;