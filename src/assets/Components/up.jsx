import './delete.css'

export default function Up(props){

    return(
        <svg className="up-icon"xmlns="http://www.w3.org/2000/svg" 
        onClick={ () => props.upNote(props.moveUpIndex)}
        height="24" viewBox="0 -960 960 960" width="24">
        <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/></svg>
    )
}