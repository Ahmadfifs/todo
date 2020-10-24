import React from 'react'
import Todo from './Todo'


function TodoList({Todos ,setTodos, filter }){
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filter.map(todo => (
                 <Todo 
                    key={todo.id}
                    text={todo.text}
                    setTodos={setTodos} 
                    Todos={Todos} 
                    todo={todo}
                    
                  />
            ))}
            </ul>
        </div>
    );
}

export default TodoList;