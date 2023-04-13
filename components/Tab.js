import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

export default function Tab(props){
    return ( 
        <>
        <div onClick={()=>{
            props.onActive(props.id)
        }} className={"tab tab-lg tab-lifted "+(props.id === props.activeId && 'tab-active')}>{props.name}</div>

        </>
    )
}