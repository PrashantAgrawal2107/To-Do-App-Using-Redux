import "./NoteList.css";
import { useSelector , useDispatch} from "react-redux";
// import { deleteNote } from "../../redux/actions/noteActions";
import { noteActions } from "../../redux/reducers/noteReducer";
import { noteSelector } from "../../redux/reducers/noteReducer";

function NoteList() {
    // const notes=[{text:"Hii Mitron" , createdOn: new Date()}];
    const notes = useSelector(noteSelector)
    const dispatch = useDispatch();

  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger" onClick={()=>{dispatch(noteActions.deleteNote(index))}}>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
