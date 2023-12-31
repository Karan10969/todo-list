import DeleteIcon from './assets/Components/detete'
import Up from './assets/Components/up'

export default function Sidebar(props){
   
    let sideBarNote = []
    if(props.saved){
        const allNotes = props.notesArray
            sideBarNote = props.notesArray.map( (note, index) => (
                
            <div key={index + 1}
                className="notes-sidebar"
                name="div"
            >
                <h5
                    onClick={() => props.savedNotes(event, index)}
                    name="heading"
                    title="open note"
                >
                    {props.notesTitle[index]}
                </h5>

                <DeleteIcon
                    deleteNote={props.delNote}
                    delIndex={index}
                />

                <Up
                upNote={props.moveNote}
                moveUpIndex={index}
                />
            </div>
                
            ))
        }


    return(
        <div className="sidebar-container">
            <div className="sidebar-header">
                <h3>Your Notes</h3>
            </div>
            {sideBarNote}
        </div>
    )
}


//extras
 {/* <button
                    onClick={ () => props.delNote(index)}
                    >🗑️
                </button> */}