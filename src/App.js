import React, { Component } from 'react';
import tasks from './tasks.json'
import Tasks from './components/Tasks'
import Form from './components/Form'

class App extends Component {
  
  state = {
    tasks: tasks
  }
  
  addTask = (title, description) => {
    
    const newTask = {
      title: title,
      description: description,
      id:this.state.tasks.length
    }

    // agregar tarea al estado
    this.setState({ tasks : [...this.state.tasks, newTask]})
  }

  deleteTask = (id) => {
    const newTask = this.state.tasks.filter(task => task.id !== id)
    this.setState({ tasks : newTask})
  }

  checkDone = id => {
    const newTask = this.state.tasks.map(task => {
      if(task.id === id){
        task.done = !task.done
      }
      return task
    })
    this.setState({ task: newTask})
  }


  render(){
    return( 
    <div>
      <Form  addTask={this.addTask} />
      <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone} />
    </div>
    )
  }
}

export default App;
