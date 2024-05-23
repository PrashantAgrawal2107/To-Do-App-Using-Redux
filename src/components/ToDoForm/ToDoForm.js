import { useState } from "react";
import "./ToDoForm.css";
import { useDispatch } from "react-redux";
// import { addTodo } from "../../redux/actions/todoActions";
import { todoActions } from "../../redux/reducers/todoReducer";
import { notificationSelector , resetNotificattion} from "../../redux/reducers/notificationReducer";
import { useSelector } from "react-redux";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const message = useSelector(notificationSelector);
  console.log(message)
  const dispatch = useDispatch();

  if(message){
    setTimeout(()=>{
      dispatch(resetNotificattion());
    },3000)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // onCreateTodo(todoText);
    dispatch(todoActions.addTodo(todoText));
    setTodoText("");
  };

  return (
    <div className="container">
      {message && (
        <div class="alert alert-primary" role="alert">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">
          Create Todo
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
