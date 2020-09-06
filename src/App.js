import React , {useState} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList'

function App() {

  const [input , setInput] = useState('');

  return (
    <div className="App">
      <header>
        Todo List
      </header>
      <p>hello world this is Faisal Alfaify</p>
      <Form setInput={setInput}/>
      <TodoList/>
    </div>
  );
}

export default App;
