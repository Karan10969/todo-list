import './delete.css'

export default function Delete(props){

    return(
        <svg className="delete-icon" title="delete note" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"
        onClick={ () => props.deleteNote(props.delIndex)}>
        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5
         56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v5
         20-520Z"/></svg>
        )
}
