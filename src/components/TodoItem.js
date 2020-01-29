import React from 'react'

function  TodoItem({
    id, text, completed, handleChange
}){
    const completedStyles = {color: 'grey',
    fontWeight: 'noraml', 
    textDecoration: 'line-through'
};

    return (
            <div className='todo-item' key={id}>
                <input 
                    type='checkbox' 
                    checked={completed} 
                    onChange={() => handleChange(id)}/>
                <p style={completed === true ?completedStyles: {fontWeight: 'bold'}}>{text}</p>
            </div>
    )
}

export default TodoItem