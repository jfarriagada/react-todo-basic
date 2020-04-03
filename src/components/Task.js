import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Task extends Component {

    // CSS dinamico con un funcion 
    StyleCompleted(){
        return {
            // operador ternario, una condicional en una sola linea
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render(){
        // Descomprimir props
        // = this.props.task.title
        const { task, deleteTask, checkDone } = this.props
    
        return <div style={this.StyleCompleted()}>
            {task.title} - {task.description} - {task.done}
            <input type="checkbox" onChange={checkDone.bind(this, task.id)} />
            <button onClick={deleteTask.bind(this, task.id)}>x</button>
        </div>
    }
}

// Tipo de dato que espero recibir
Task.propTypes = {
    task : PropTypes.object.isRequired
}

export default Task