import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import toDoListData from './components/todoListData'

import Footer from './components/Footer'

class  App extends Component {
  constructor(){
    super()
    this.state = {
      todos: toDoListData
     }

     this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return updatedTodos
    })
    
  }

  render() {

    const todoItems = this.state.todos.map((todo) => {
      return(
      <TodoItem key = {todo.id}
      id={todo.id}
        text={todo.text}
        completed={todo.completed}
         handleChange={this.handleChange}/>
      )
      
    })
    
    return (
      <div>
        <Header />
        <div className='todo-list'>
          {todoItems}
            </div>
          <Footer />
      </div>
        )
  }
}


export default App;
