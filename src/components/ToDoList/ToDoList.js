import "./ToDoList.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../../redux/actions/todoActions";

function ToDoList() {

  // const todos = store.getState().todos  // It is allowed but not preffered way...
  const todos = useSelector((state)=>state.todos);
  const dispatch = useDispatch();

  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={todo.id}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{dispatch(toggleTodo(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;
