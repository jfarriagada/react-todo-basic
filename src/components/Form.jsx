import React, { Component } from 'react';


class Form extends Component {

    state = {
        title: '',
        description: ''
    }

    // con esta forma no se utiliza el metodo bind
    handleSudmit = (e) => {
        this.props.addTask(this.state.title, this.state.description)
        // dejar de refrescar la pagina
        e.preventDefault()
    }

    onChange = e => {
        // en una sola linea
        this.setState({ [e.target.name] : e.target.value })
        //this.setState({ title: e.target.value })
        //this.setState({ description: e.target.value })
    }

    render(){
        return(
            <form onSubmit={this.handleSudmit}>
                <input type="text" name="title" placeholder="Escribir tarea" onChange={this.onChange} value={this.state.title}/> 
                <br/>
                <textarea name="description" id="" cols="40" rows="2" placeholder="descripción de la tearea" onChange={this.onChange}></textarea>
                <br/>
                <button type="submit">Agregar tarea</button>
                <br/>
            </form>
        )
    }
}

export default Form