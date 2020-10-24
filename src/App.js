import React , {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList'

function App() {


  const [input , setInput] = useState('');
  const [Todos , setTodos] = useState([]);
  const [status , setStatus] = useState('all');
  const [filter , setFilter] = useState([]);

  // Efftect 
  useEffect(() => {
    const filterTodo = () => {
      switch(status){
        case "completed":
          setFilter(Todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilter(Todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilter(Todos);
          break;
      }
    }

    filterTodo();
  }, [Todos , status])

  return (
    <div className="App">
      <header>
        Todo List
      </header>
      <Form Todos={Todos} setTodos={setTodos} input={input} setInput={setInput}  setStatus={setStatus}/>
      <TodoList Todos={Todos} setTodos={setTodos} filter={filter} />
    </div>
  );
}

export default App;
