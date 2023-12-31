
export default function Editor(props){

return(
    <div className="editor-container">

        <div className="Heading" style={{textAlign: "center"}}>
          <h1>To-Do list app</h1>
        </div>

        <div className="note-textarea">
                <label htmlFor="title">Enter title of your Note</label>
                <input
                type="text"
                name="title"
                id="title"
                onChange={props.toggleTitle}
                />
                <textarea 
                id="noteTexts"
                name="noteTexts"
                onChange={props.toggleNote}
                placeholder="Enter your Meme/Note here"      
                />
                <button
                className="editor-button"
                onClick = {props.toggleSave}>
                    Save
                </button>
        </div>
        
    </div>
)
}