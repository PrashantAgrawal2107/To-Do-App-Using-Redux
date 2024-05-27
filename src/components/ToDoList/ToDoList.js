import "./ToDoList.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";
import { getInitialStateAsync, todoActions } from "../../redux/reducers/todoReducer";
import { todoSelector } from "../../redux/reducers/todoReducer";
import { useEffect } from "react";
// import axios from "axios";

function ToDoList() {

  // const todos = store.getState().todos  // It is allowed but not preffered way...
  // const todos = useSelector((state)=>state.todo.todos);
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();
  
  useEffect(()=>{
      // fetch("http://localhost:4100/api/todos")
      //   .then((res) => res.json())
      //       .then((json) => console.log(json));

      // axios.get("http://localhost:4100/api/todos")
      //   .then(res =>
      //      {
      //         console.log(res.data);
      //         dispatch(todoActions.setInitialState(res.data))
      //      }
      // );

      dispatch(getInitialStateAsync());

  })

  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={todo.id}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{dispatch(todoActions.toggleTodo(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;
