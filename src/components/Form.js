import React from 'react'



function Form({input , setInput , Todos , setTodos , setStatus}){

    const inputHandler = (input) => {
      setInput(input.target.value)
    }

    const submitHandler = (event) => {
      event.preventDefault();

      setTodos([
        ...Todos , {text:input , completed:false , id : Math.random() * 1000 }
      ]);

      setInput('');
    }

    const filterHandler = (e) => {
      setStatus(e.target.value);
    }

    return(
        <form>
        <input value={input} onChange={inputHandler} type="text" className="todo-input" />
        <button onClick={submitHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={filterHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
}

export default Form;