import React from 'react'


const Todo = ({text , todo , setTodos , Todos}) => {


    const deleteHandler = () => {
        setTodos(Todos.filter(element => 
             element.id !== todo.id
        ))
    }

    // beautiful function 
    const complateHandler = () => {
        setTodos(Todos.map((item) => {
            if(todo.id === item.id){
                return {
                    ...item, completed : !item.completed 
                };
            }
            return item;
        }))
    }
    return(
        <div className="todo">
            <li className={`todo-items ${todo.completed ? "completed" : '' }`}>{text}</li>
            <button onClick={complateHandler} className='complete-btn'>
                <i className={`${todo.completed ? "fab fa-battle-net" : 'fas fa-check'}`}></i>
            </button>
            <button onClick={deleteHandler} className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    );
}

export default Todo;